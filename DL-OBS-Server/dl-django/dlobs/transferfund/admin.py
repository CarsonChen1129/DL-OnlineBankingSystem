# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import AccountInfo
from .models import Transaction
from .models import Contact

# Register your models here.
class AccountInfoAdmin(admin.ModelAdmin):
    list_display = ('owner', 'accountNumber', 'accountType')
    search_fields = ('owner','accountNumber')

class TransactionAdmin(admin.ModelAdmin):
    list_display = ('owner', 'fromAccountNumber', 'toAccountNumber', 'amount')
    search_fields = ('owner','fromAccountNumber')

class ContactAdmin(admin.ModelAdmin):
    list_display = ('owner', 'firstName', 'lastName', 'accountNumber')
    search_fields = ('owner','accountNumber')

admin.site.register(AccountInfo, AccountInfoAdmin)
admin.site.register(Transaction, TransactionAdmin)
admin.site.register(Contact, ContactAdmin)

