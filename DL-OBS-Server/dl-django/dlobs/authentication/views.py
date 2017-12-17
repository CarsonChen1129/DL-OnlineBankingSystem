# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework import permissions, status, viewsets, views
from rest_framework.response import Response

from models import Account
from permissions import IsAccountOwner
from serializers import AccountSerializer

import json, datetime
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import check_password

import logging

logger = logging.getLogger('obs-log')


class AccountViewSet(views.APIView):
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
    def get(self, request):
        print "[Received data]"
        print request.query_params
        # print typerequest.query_params
        data = request.query_params
        print data
        print data.get('email')
        print data.get('pin')
        pin = data.get('pin')
        try:
            user = Account.objects.get(email=data.get('email'))
            print "user: {}".format(user)
        except Account.DoesNotExist as e:
            return Response({
                'status': 'Unauthorized',
                'message': 'Unable to find the user. [Message]: ' + e.message
            }, status=status.HTTP_401_UNAUTHORIZED)
        print "registration status: {}".format(user.registration_status)
        if user.registration_status is True:
            return Response({
                'status': 'Bad request',
                'message': 'Account is already registered.'
            }, status=status.HTTP_400_BAD_REQUEST)
        else:
            print pin
            print user.pin_code
            if pin == user.pin_code:
                return Response(AccountSerializer(user).data, status=status.HTTP_200_OK)
            else:
                return Response({
                    'status': 'Unauthorized',
                    'message': 'Your pin code does not match our record.'
                }, status=status.HTTP_401_UNAUTHORIZED)
            # return Response({
            #     'status': 'OK',
            #     'message': 'OK.'
            # }, status=status.HTTP_200_OK)

    @csrf_exempt
    def post(self, request):

        logger.debug(self.request._content_type)
        # data = request.POST.dict()
        try:
            print "Account post"
            data = json.loads(request.body)
            print data
            print data['email']
            # logger.debug(type(data))
            # serializer = self.serializer_class(data=data)
            # logger.debug(serializer)
            # logger.debug("serializer is valid?: ")
            # logger.debug(serializer.is_valid())
            # logger.debug(serializer.errors)

            # if serializer.is_valid():
            user = Account.objects.get(email=data['email'])
            logger.debug(user)
            logger.debug(user.registration_status)
            if user.registration_status is True:
                return Response({
                    'status': 'Bad request',
                    'message': 'Account is already registered.'
                }, status=status.HTTP_400_BAD_REQUEST)
            else:
                user.first_name = data['first_name']
                user.middle_name = data['middle_name']
                user.last_name = data['last_name']
                user.set_password(data['password'])
                user.home_address_1 = data['home_address_1']
                user.home_address_2 = data['home_address_2']
                user.mail_address_1 = data['mail_address_1']
                user.mail_address_2 = data['mail_address_2']
                user.license_type = data['license_type']
                user.license_number = data['license_number']
                user.occupation = data['occupation']
                user.annual_income = data['annual_income']
                user.employee = data['employee']
                user.security_question_1 = data['sq1']
                user.security_answer_1 = data['sq1a']
                user.security_question_2 = data['sq2']
                user.security_answer_2 = data['sq2a']
                user.security_question_3 = data['sq3']
                user.security_answer_3 = data['sq3a']
                user.date_registered = datetime.datetime.now()
                user.registration_status = True
                user.save()
                return Response(AccountSerializer(user).data, status=status.HTTP_201_CREATED)
                # Account.objects.create_user(**serializer.validated_data)

                # return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

            # return Response({
            #     'status': 'Bad request',
            #     'message': 'Account could not be created with received data.',
            #     'data': serializer.errors
            # }, status=status.HTTP_400_BAD_REQUEST)
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
    def post(self, request, format=None):
        try:
            data = json.loads(request.body)
            print data
            email = data.get('email', None)
            print email
            password = data.get('password', None)
            try:
                user = Account.objects.get(email=email)
            except Account.DoesNotExist as e:
                return Response({
                    'status': 'Unauthorized',
                    'message': 'Username does not exist. Please visit the nearest branch. Error: ' + e.message
                }, status=status.HTTP_401_UNAUTHORIZED)

            if user.registration_status is False:
                return Response({
                    'status': 'Unauthorized',
                    'message': 'Your online banking account is not yet registered.'
                }, status=status.HTTP_401_UNAUTHORIZED)

            valid = check_password(password, user.password)
            print "valid {}".format(valid)
            # account = authenticate(email=email, password=password)
            # print account
            if valid is True:
                login(request, user)
                serialized = AccountSerializer(user)
                return Response(serialized.data)
            else:
                return Response({
                    'status': 'Unauthorized',
                    'message': 'Password invalid'
                }, status=status.HTTP_401_UNAUTHORIZED)

            # if account is not None:
            #     if account.is_active:
            #         login(request, account)
            #
            #         serialized = AccountSerializer(account)
            #         print "Logged user in"
            #         return Response(serialized.data)
            #     else:
            #         return Response({
            #             'status': 'Unauthorized',
            #             'message': 'This account has been disabled.'
            #         }, status=status.HTTP_401_UNAUTHORIZED)
            # else:

        except ValueError as e:
            return Response({
                'status': 'Unauthorized',
                'message': 'Please provide login credentials.[Message]:' + e.message
            }, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(views.APIView):
    print "[LogoutView ready]"
    # permission_classes = (permissions.IsAuthenticated,IsAccountOwner,)
    permission_classes = (permissions.AllowAny,)

    @csrf_exempt
    def post(self, request, format=None):
        print "Logging user out"
        try:
            print json.loads(request.body)
            logout(request)
            return Response({}, status=status.HTTP_204_NO_CONTENT)
        except ValueError as e:
            return Response({
                'status': 'Unauthorized',
                'message': 'Unable to log the user out. [Message]: ' + e.message
            }, status=status.HTTP_401_UNAUTHORIZED)
