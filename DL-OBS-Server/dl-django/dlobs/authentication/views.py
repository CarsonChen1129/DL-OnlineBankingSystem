# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions, status, viewsets, views
from rest_framework.response import Response

from models import Account
from permissions import IsAccountOwner
from serializers import AccountSerializer

import json
from django.contrib.auth import authenticate,login, logout


class AccountViewSet(viewsets.ModelViewSet):

    lookup_field = 'email'
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    # permission_classes = (permissions.AllowAny,)

    # def __init__(self, data):
    #     content = JSONRenderer().render(data)
    #     super(AccountViewSet, self).__init__(content)
    @csrf_exempt
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    @csrf_exempt
    def create(self, request):

        print self.request._content_type
        # data = request.POST.dict()
        try:
            data = json.loads(request.body)
            print data
            print type(data)
            serializer = self.serializer_class(data=data)
            print serializer
            print "serializer is valid?: "
            print serializer.is_valid()
            print serializer.errors

            if serializer.is_valid():
                Account.objects.create_user(**serializer.validated_data)

                return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

            return Response({
                'status': 'Bad request',
                'message': 'Account could not be created with received data.',
                'data': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
        except ValueError as e:
            return Response({
                'status': 'Unauthorized',
                'message': 'Unable to create the user. [Message]: ' + e.message
            }, status=status.HTTP_401_UNAUTHORIZED)


class LoginView(views.APIView):
    print "[LogintView ready]"
    # permission_classes = (permissions.AllowAny,)
    @csrf_exempt
    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    @csrf_exempt
    def post(self,request, format=None):
        print('inside post method--------------')
        try:
            data = json.loads(request.body)
            print data
            email = data.get('email', None)
            print email
            password = data.get('password', None)
            account = authenticate(email=email, password=password)
            print account

            if account is not None:
                if account.is_active:
                    login(request, account)

                    serialized = AccountSerializer(account)
                    print "Logged user in"
                    return Response(serialized.data)
                else:
                    return Response({
                        'status': 'Unauthorized',
                        'message': 'This account has been disabled.'
                    }, status=status.HTTP_401_UNAUTHORIZED)
            else:
                return Response({
                    'status': 'Unauthorized',
                    'message': 'Username/password combination invalid'
                }, status=status.HTTP_401_UNAUTHORIZED)
        except ValueError as e:
            return Response ({
                'status': 'Unauthorized',
                'message':'Please provide login credentials.[Message]:'+e.message
            }, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(views.APIView):
    print "[LogoutView ready]"
    # permission_classes = (permissions.IsAuthenticated,IsAccountOwner,)
    permission_classes = (permissions.AllowAny,)

    @csrf_exempt
    def post(self,request, format=None):
        print "Logging user out"
        try:
            print json.loads(request.body)
            logout(request)
            return Response({}, status=status.HTTP_204_NO_CONTENT)
        except ValueError as e:
            return Response({
                'status':'Unauthorized',
                'message':'Unable to log the user out. [Message]: '+e.message
            }, status=status.HTTP_401_UNAUTHORIZED)