# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import uuid


# Create your models here.
class AccountInfo(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    accountNumber = models.CharField(max_length=50, blank=False, null=False)
    firstName = models.CharField(max_length=30, blank=False, null=False)
    lastName = models.CharField(max_length=30, blank=False, null=False)
    owner = models.CharField(max_length=50, blank=False, null=False)
    balance = models.FloatField(default=0.00, blank=False, null=False)
    accountType = models.CharField(max_length=30, blank=False, null=False)
    interestRate = models.FloatField(default=0.00, blank=True, null=False)
    routingNumber = models.CharField(max_length=50, default='', blank=True, null=False)

    def __str__(self):
        return u'%s %s' % (self.owner, self.accountNumber)


class Transaction(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    fromAccountNumber = models.CharField(max_length=50, blank=False, null=False)
    toAccountNumber = models.CharField(max_length=50, blank=False, null=False)
    owner = models.CharField(max_length=50, blank=False, null=False)
    date = models.DateField(null=False)
    pending = models.BooleanField(default=True, blank=False, null=False)
    amount = models.FloatField(default=0.00, blank=False, null=False)
    notes = models.CharField(max_length=200, blank=True, null=False)

    def __str__(self):
        return u'%s %s -> %s' % (self.owner, self.fromAccountNumber, self.toAccountNumber)


class Contact(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    owner = models.CharField(max_length=50, blank=False, null=False)
    firstName = models.CharField(max_length=30, blank=False, null=False)
    lastName = models.CharField(max_length=30, blank=False, null=False)
    accountNumber = models.CharField(max_length=50, blank=False, null=False)
    routingNumber = models.CharField(max_length=50, blank=False, null=False)
    accountType = models.CharField(max_length=30, blank=False, null=False)

    def __str__(self):
        return u'%s -> %s %s' % (self.owner, self.firstName, self.lastName)
