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
    def get(self,request, format=None):
        content = {
            "frist":1,
            "second":2,
        }
        return Response(content, status=status.HTTP_200_OK)


