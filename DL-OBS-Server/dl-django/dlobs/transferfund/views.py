# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import permissions, status, viewsets, views
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

import json
from models import AccountInfo
from models import Transaction
from models import Contact
from permissions import IsAccountOwner
from serializers import AccountInfoSerializer
from serializers import TransactionSerializer

# Create your views here.
class getAccountInfoView(views.APIView):
    print("[getAccountInfo view ready]")

    @csrf_exempt
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    @csrf_exempt
    def post(self,request, format=None):
        data = json.loads(request.body)
        print(data['owner'])
        print(data['accountType'])
        owner = data.get('owner', None)
        accountType = data.get('accountType', None)
        # content = {
        #     "frist":1,
        #     "second":2,
        # }
        result = None
        headers = {'Content-Type':'application/json'}
        if (owner != None and accountType != None):
            try:
                result = AccountInfo.objects.get(owner = owner, accountType = accountType)
                content = {
                    "id": result.id,
                    "accountNumber": result.accountNumber,
                    "firstName": result.firstName,
                    "lastName":result.lastName,
                    "owner":result.owner,
                    "balance":result.balance,
                    "accountType":result.accountType,
                    "interestRate":result.interestRate,
                    "routingNumber":result.routingNumber
                }
                return Response(content, headers = headers, status = status.HTTP_200_OK)
            except AccountInfo.DoesNotExist:
                return Response({
                    'status': 'Not found',
                    'message': 'Cannot find matched account info!'
                }, headers=headers, status = status.HTTP_404_NOT_FOUND)
        else:
            return Response({
                'status': 'Not acceptable',
                'message': 'Cannot find request parameters!'
            }, headers=headers, status=status.HTTP_406_NOT_ACCEPTABLE)

class getAllAccountsView(views.APIView):
    print("[getAllAccounts view ready]")

    @csrf_exempt
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    @csrf_exempt
    def post(self,request, format=None):
        data = json.loads(request.body)
        print(data['owner'])
        owner = data.get('owner', None)
        result = None
        headers = {'Content-Type':'application/json'}
        if (owner != None):
            result = AccountInfo.objects.filter(owner = owner)
            serializer = AccountInfoSerializer(result, many=True)
            return Response(serializer.data, headers=headers, status=status.HTTP_200_OK)
        else:
            return Response({
                'status': 'Not acceptable',
                'message': 'Cannot find request parameters!'
            }, headers=headers, status=status.HTTP_406_NOT_ACCEPTABLE)

# the function to get transaction history
class getTransactionHistoryView(views.APIView):
    print("[getTransactionHistory view ready]")

    @csrf_exempt
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    @csrf_exempt
    def post(self,request, format=None):
        data = json.loads(request.body)
        print(data['owner'])
        print(data['fromAccountNumber'])
        print(data['pending'])
        owner = data.get('owner', None)
        fromAccountNumber = data.get('fromAccountNumber', None)
        pending = data.get('pending', None)

        transactions = None
        headers = {'Content-Type':'application/json'}
        if (owner != None and fromAccountNumber != None and pending != None):
            transactions = Transaction.objects.filter(owner = owner, fromAccountNumber = fromAccountNumber, pending = pending)
            serializer = TransactionSerializer(transactions, many=True)
            return Response(serializer.data, headers=headers, status=status.HTTP_200_OK)            
        else:
            return Response({
                'status': 'Not acceptable',
                'message': 'Cannot find request parameters!'
            }, headers=headers, status=status.HTTP_406_NOT_ACCEPTABLE)

# the function to handle internal transfer 
class handleInternalTransfer(views.APIView):
    print("[handleInternalTransfer view ready]")

    @csrf_exempt
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    @csrf_exempt
    def post(self,request, format=None):
        data = json.loads(request.body)
        print('--------------------')
        print(data['fromAccountNumber'])
        print(data['toAccountNumber'])
        print(data['owner'])
        print(data['amount'])
        print(data['date'])
        print(data['pending'])
        print('--------------------')
        fromAccountNumber = data.get('fromAccountNumber', None)
        toAccountNumber = data.get('toAccountNumber', None)
        owner = data.get('owner', None)
        amount = data.get('amount', None)
        date = data.get('date', None)
        pending = data.get('pending', None)

        headers = {'Content-Type':'application/json'}
        if (fromAccountNumber == None or toAccountNumber == None or owner == None \
            or amount == None or date == None or pending == None):
            return Response({
                'status': 'Not acceptable',
                'message': 'Cannot find request parameters!'
            }, headers=headers, status=status.HTTP_406_NOT_ACCEPTABLE)
        
        # validate the from account balance
        try:
            fromAcct = AccountInfo.objects.get(owner = owner, accountNumber = fromAccountNumber)
            toAcct = AccountInfo.objects.get(owner = owner, accountNumber = toAccountNumber)
            if (amount > fromAcct.balance):
                return Response({
                    'status': 'Precondition invalid',
                    'message': 'Your from account has insufficient fund!'
                }, headers=headers, status=status.HTTP_428_PRECONDITION_REQUIRED) 
            # deduct the amount in from-account
            fromAcct.balance = fromAcct.balance - amount
            fromAcct.save()
            # increase the amount in to-account
            toAcct.balance = toAcct.balance + amount
            toAcct.save()
            # generate two transaction records related to two accounts
            trans1 = Transaction(fromAccountNumber = fromAccountNumber, \
                toAccountNumber = toAccountNumber, owner = owner, date = date, \
                pending = pending, amount = amount * -1)
            trans1.save()
            trans2 = Transaction(fromAccountNumber = toAccountNumber, \
                toAccountNumber = fromAccountNumber, owner = owner, date = date, \
                pending = pending, amount = amount)
            trans2.save()
            return Response({
                'status': 'Success',
                'message': 'Your transfer has been scheduled successfully!'
            }, headers=headers, status=status.HTTP_200_OK) 
        except AccountInfo.DoesNotExist:
            return Response({
                'status': 'Precondition invalid',
                'message': 'Internal Error: cannot find from/to account!'
            }, headers=headers, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# the function to handle check deposit
class handleCheckDeposit(views.APIView):
    print("[handleCheckDeposit view ready]")

    @csrf_exempt
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    @csrf_exempt
    def post(self,request, format=None):
        data = json.loads(request.body)
        print('--------------------')
        print(data['fromAccountNumber'])
        print(data['toAccountNumber'])
        print(data['owner'])
        print(data['amount'])
        print(data['date'])
        print(data['pending'])
        print('--------------------')
        fromAccountNumber = data.get('fromAccountNumber', None)
        toAccountNumber = data.get('toAccountNumber', None)
        owner = data.get('owner', None)
        amount = data.get('amount', None)
        date = data.get('date', None)
        pending = data.get('pending', None)

        headers = {'Content-Type':'application/json'}
        if (fromAccountNumber == None or toAccountNumber == None or owner == None \
            or amount == None or date == None or pending == None):
            return Response({
                'status': 'Not acceptable',
                'message': 'Cannot find request parameters!'
            }, headers=headers, status=status.HTTP_406_NOT_ACCEPTABLE)
        
        # validate the account information
        try:
            toAcct = AccountInfo.objects.get(owner = owner, accountNumber = toAccountNumber)
            # increase the amount in to-account
            toAcct.balance = toAcct.balance + amount
            toAcct.save()
            # generate one transaction record in the database
            trans = Transaction(fromAccountNumber = toAccountNumber, \
                toAccountNumber = fromAccountNumber, owner = owner, date = date, \
                pending = pending, amount = amount)
            trans.save()
            return Response({
                'status': 'Success',
                'message': 'Your check has been deposited successfully!'
            }, headers=headers, status=status.HTTP_200_OK)
        except AccountInfo.DoesNotExist:
            return Response({
                'status': 'Precondition invalid',
                'message': 'Internal Error: cannot find to account!'
            }, headers=headers, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

