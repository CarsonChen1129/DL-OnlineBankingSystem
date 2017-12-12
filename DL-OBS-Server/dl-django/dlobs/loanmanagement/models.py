# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Loan(models.Model):
    loan_id = models.IntegerField(blank=False)
    user_id = models.IntegerField(blank=False)
    loan_type = models.CharField(max_length=100, blank=False, default='')
    start_balance = models.FloatField(blank=False)
    current_balance = models.FloatField(blank=False)
    interest_rate = models.FloatField(blank=False)
    monthly_payment = models.FloatField(blank=False)
    start_date=models.DateField(null=False)
    end_date=models.DateField(null=False)
    payment_interval=models.IntegerField(blank=False)
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    class Meta:
        ordering = ('loan_id',)