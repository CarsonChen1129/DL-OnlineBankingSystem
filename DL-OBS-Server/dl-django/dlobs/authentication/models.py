from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.contrib.auth.hashers import check_password
import re
import uuid


class AccountManager(BaseUserManager):

    def create_user(self, email, password=None, **kwargs):
        print "in AccountManager create_user"
        print kwargs
        print email
        print password
        if not email:
            raise ValueError('Users must have a valid email address.')
        if not kwargs.get('first_name'):
            raise ValueError('Users must have a valid first name.')
        if not kwargs.get('last_name'):
            raise ValueError('Users must have a valid last name')
        if not kwargs.get('age'):
            raise ValueError('Users must have a valid age')

        account = self.model(
            email=self.normalize_email(email),
            first_name=kwargs.get('first_name'),
            middle_name=kwargs.get('middle_name'),
            last_name=kwargs.get('last_name'),
            dob=kwargs.get('dob'),
            primary_phone_number=kwargs.get('primary_phone_number'),
            alternative_phone_number=kwargs.get('alternative_phone_number'),
            home_address_1=kwargs.get('home_address_1'),
            home_address_2=kwargs.get('home_address_2'),
            home_address_city=kwargs.get('home_address_city'),
            home_address_state=kwargs.get('home_address_state'),
            home_address_country=kwargs.get('home_address_country'),
            home_address_zip=kwargs.get('home_address_zip'),
            mail_address_1=kwargs.get('mail_address_1'),
            mail_address_2=kwargs.get('mail_address_2'),
            mail_address_city=kwargs.get('mail_address_city'),
            mail_address_state=kwargs.get('mail_address_state'),
            mail_address_country=kwargs.get('mail_address_country'),
            mail_address_zip=kwargs.get('mail_address_zip'),
            license_number=kwargs.get('license_number'),
            license_type=kwargs.get('license_type'),
            license_issue_date=kwargs.get('license_issue_date'),
            license_expire=kwargs.get('license_expire'),
            license_geo=kwargs.get('license_geo'),
            occupation=kwargs.get('occupation'),
            annual_income=kwargs.get('annual_income'),
            employee=kwargs.get('employee'),
            security_question_1=kwargs.get('security_question_1'),
            security_answer_1=kwargs.get('security_answer_1'),
            security_question_2=kwargs.get('security_question_2'),
            security_answer_2=kwargs.get('security_answer_2'),
            security_question_3=kwargs.get('security_question_2'),
            security_answer_3=kwargs.get('security_answer_2'),
            language=kwargs.get('language')
        )
        account.set_password(password)
        print "account password:+{}".format(account.password)
        print check_password(password, account.password)
        account.full_clean()
        account.save()

        return account


class Account(AbstractBaseUser, models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True, validators=[validate_email])
    first_name = models.CharField(max_length=40, blank=False)
    middle_name = models.CharField(max_length=40, null=True, blank=True)
    last_name = models.CharField(max_length=40, blank=False)
    dob = models.DateTimeField(null=False)
    primary_phone_number = models.CharField(max_length=20, null=False, blank=False)
    alternative_phone_number = models.CharField(max_length=20, null=True, blank=True)
    home_address_1 = models.CharField(max_length=256, blank=False, null=False)
    home_address_2 = models.CharField(max_length=128, blank=True, null=True)
    home_address_city = models.CharField(max_length=64, blank=False, null=False)
    home_address_state = models.CharField(max_length=2, blank=False, null=False)
    home_address_country = models.CharField(max_length=64, blank=False, null=False)
    home_address_zip = models.CharField(max_length=64, blank=False, null=False)
    mail_address_1 = models.CharField(max_length=256, blank=False, null=False)
    mail_address_2 = models.CharField(max_length=128, blank=True, null=True)
    mail_address_city = models.CharField(max_length=64, blank=False, null=False)
    mail_address_state = models.CharField(max_length=2, blank=False, null=False)
    mail_address_country = models.CharField(max_length=64, blank=False, null=False)
    mail_address_zip = models.CharField(max_length=64, blank=False, null=False)
    license_number = models.CharField(max_length=128, blank=False, null=False)
    license_type = models.CharField(max_length=64, blank=False, null=False)
    license_issue_date = models.DateField(null=False)
    license_expire = models.DateField(null=False)
    license_geo = models.CharField(max_length=128, blank=False, null=False)
    occupation = models.CharField(max_length=128, blank=False, null=False)
    annual_income = models.IntegerField(blank=False)
    employee = models.CharField(max_length=128, blank=False, null=False)
    security_question_1 = models.IntegerField(blank=False)
    security_answer_1 = models.CharField(max_length=1024, blank=False, null=False)
    security_question_2 = models.IntegerField(blank=False)
    security_answer_2 = models.CharField(max_length=1024, blank=False, null=False)
    security_question_3 = models.IntegerField(blank=False)
    security_answer_3 = models.CharField(max_length=1024, blank=False, null=False)
    language = models.CharField(max_length=1, blank=False)
    pin_code = models.CharField(max_length=16, blank=False, null=False, default='')
    registration_status = models.BooleanField(default=False)

    date_registered = models.DateTimeField(null=True)
    last_login = models.DateTimeField(auto_now=True)

    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELD = ['first_name', 'last_name']

    def __unicode__(self):
        return self.email

    def get_full_name(self):
        return ' '.join([self.first_name, self.last_name])

    def get_short_name(self):
        return self.first_name

    def clean(self, *args, **kwargs):
        # add custom validation here
        if len(self.password) < 8:
            raise ValidationError('The password is too short')
        if re.match('[!@#$%^&*\'"();<>,+=/?0-9]\w+', self.first_name):
            raise ValidationError('The first name %s contains invalid characters' % self.first_name)
        if self.middle_name and not self.middle_name.isspace():
            if re.match('[!@#$%^&*\'"();<>,+=/?0-9]\w+', self.middle_name):
                raise ValidationError('The middle name %s contains invalid characters' % self.middle_name)
        if re.match('[!@#$%^&*\'"();<>,+=/?0-9]\w+', self.last_name):
            raise ValidationError('The last name %s contains invalid characters' % self.last_name)
        super(Account, self).clean(*args, **kwargs)

    def save(self, *args, **kwargs):
        # safePassword = make_password(self.password, None, 'pbkdf2_sha256')
        # self.set_password(safePassword)
        self.full_clean()
        super(Account, self).save(*args, **kwargs)
