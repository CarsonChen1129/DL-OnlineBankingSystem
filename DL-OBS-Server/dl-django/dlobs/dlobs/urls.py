"""dlobs URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from authentication.views import AccountViewSet, LoginView, LogoutView

from transferfund.views import getAccountInfoView
from transferfund.views import getAllAccountsView
from transferfund.views import getTransactionHistoryView
from transferfund.views import handleInternalTransfer
from transferfund.views import handleCheckDeposit
from transferfund.views import getContactsInfoView
from transferfund.views import handleExternalTransfer
from transferfund.views import addContactView

urlpatterns = [
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^account', AccountViewSet.as_view(), name='account'),
    url(r'^auth/login', LoginView.as_view(), name='login'),
    url(r'^auth/logout', LogoutView.as_view(), name='logout'),
    url(r'^loanmanage/', include('loanmanagement.urls')),
    url(r'^transferfund/getAccountInfo', getAccountInfoView.as_view(), name="getAccountInfo"),
    url(r'^transferfund/getAllAccounts', getAllAccountsView.as_view(), name="getAllAccounts"),
    url(r'^transferfund/getTransactionHistory', getTransactionHistoryView.as_view(), name="getTransactionHistory"),
    url(r'^transferfund/internalTransfer', handleInternalTransfer.as_view(), name="handleInternalTransfer"),
    url(r'^transferfund/checkDeposit', handleCheckDeposit.as_view(), name="handleCheckDeposit"),
    url(r'^transferfund/getContactsInfo', getContactsInfoView.as_view(), name="getContactsInfo"),
    url(r'^transferfund/externalTransfer', handleExternalTransfer.as_view(), name="handleExternalTransfer"),
    url(r'^transferfund/addContact', addContactView.as_view(), name="addContactView"),
]
