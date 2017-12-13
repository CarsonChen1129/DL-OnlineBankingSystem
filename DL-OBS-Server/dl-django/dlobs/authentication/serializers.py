from django.contrib.auth import update_session_auth_hash
from rest_framework import serializers
from models import Account


class AccountSerializer(serializers.ModelSerializer):
    print "In AccountSerializer"
    password = serializers.CharField(write_only=True, required=False)
    confirm_password = serializers.CharField(write_only=True, required=False)

    class Meta:
        print "In AccoutSerializer meta"
        model = Account
        fields = (
            'id',
            'email',
            'first_name',
            'middle_name',
            'last_name',
            'dob',
            'primary_phone_number',
            'alternative_phone_number',
            'home_address_1',
            'home_address_2',
            'home_address_city',
            'home_address_state',
            'home_address_country',
            'home_address_zip',
            'mail_address_1',
            'mail_address_2',
            'mail_address_city',
            'mail_address_state',
            'mail_address_country',
            'mail_address_zip',
            'license_number',
            'license_type',
            'license_issue_date',
            'license_expire',
            'license_geo',
            'occupation',
            'annual_income',
            'employee',
            'security_question_1',
            'security_answer_1',
            'security_question_2',
            'security_answer_2',
            'security_question_3',
            'security_answer_3',
            'language',
            'date_registered',
            'last_login',
            'password',
            'confirm_password',
            'pin_code',
            'registration_status'
        )
        read_only_fields = ('created_at', 'updated_at',)

        def create(self, validated_data):
            print "In AccountSerializer create"
            print validated_data
            return Account.objects.create(**validated_data)

        def update(self, instance, validated_data):
            print "In AccountSerializer update"
            instance.email = validated_data.get('email', instance.email)
            instance.first_name = validated_data.get('first_name', instance.first_name)

            instance.save()

            password = validated_data.get('password', None)
            confirm_password = validated_data.get('confirm_password', None)

            if password and confirm_password and password == confirm_password:
                instance.set_password(password)
                instance.save()

            update_session_auth_hash(self.context.get('request'), instance)

            return instance
