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