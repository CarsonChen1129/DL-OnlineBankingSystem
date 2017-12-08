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
        # content = {
        #     "frist":1,
        #     "second":2,
        # }
        content = data
        headers = {
            'Access-Control-Allow-Origin':'http://localhost:8000',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers':'Content-Type, Authorization',
            'Access-Control-Allow-Credentials': True
        }
        return Response(content, headers = headers,status=status.HTTP_200_OK)


