# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2017-12-06 20:20
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=254, unique=True, validators=[django.core.validators.EmailValidator()])),
                ('first_name', models.CharField(max_length=40)),
                ('middle_name', models.CharField(blank=True, max_length=40, null=True)),
                ('last_name', models.CharField(max_length=40)),
                ('dob', models.DateTimeField()),
                ('primary_phone_number', models.CharField(max_length=20)),
                ('alternative_phone_number', models.CharField(blank=True, max_length=20, null=True)),
                ('home_address_1', models.CharField(max_length=256)),
                ('home_address_2', models.CharField(blank=True, max_length=128, null=True)),
                ('home_address_city', models.CharField(max_length=64)),
                ('home_address_state', models.CharField(max_length=2)),
                ('home_address_country', models.CharField(max_length=64)),
                ('home_address_zip', models.CharField(max_length=64)),
                ('mail_address_1', models.CharField(max_length=256)),
                ('mail_address_2', models.CharField(blank=True, max_length=128, null=True)),
                ('mail_address_city', models.CharField(max_length=64)),
                ('mail_address_state', models.CharField(max_length=2)),
                ('mail_address_country', models.CharField(max_length=64)),
                ('mail_address_zip', models.CharField(max_length=64)),
                ('license_number', models.CharField(max_length=128)),
                ('license_type', models.CharField(max_length=64)),
                ('license_issue_date', models.DateField()),
                ('license_expire', models.DateField()),
                ('license_geo', models.CharField(max_length=128)),
                ('occupation', models.CharField(max_length=128)),
                ('annual_income', models.IntegerField()),
                ('employee', models.CharField(max_length=128)),
                ('security_question_1', models.IntegerField()),
                ('security_answer_1', models.CharField(max_length=1024)),
                ('security_question_2', models.IntegerField()),
                ('security_answer_2', models.CharField(max_length=1024)),
                ('security_question_3', models.IntegerField()),
                ('security_answer_3', models.CharField(max_length=1024)),
                ('language', models.CharField(max_length=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]