# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from loanmanagement.models import Loan
from loanmanagement.serializers import LoanManagementSerializer


@csrf_exempt
def loan_list(request):
    if request.method == 'GET':
        loans = Loan.objects.all()
        serializer = LoanManagementSerializer(loans, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = LoanManagementSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def loan_detail(request, user_id):
    if request.method == 'GET':
        loans = Loan.objects.filter(user_id=user_id)
        serializer = LoanManagementSerializer(loans, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = LoanManagementSerializer(loans, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        loans.delete()
        return HttpResponse(status=204)
