from rest_framework import serializers
from .models import Transaction
from .models import AccountInfo
from .models import Contact


class AccountInfoSerializer(serializers.ModelSerializer):
    print("-->In AccountInfoSerializer<--")

    class Meta:
        model = AccountInfo
        fields = (
            'id',
            'accountNumber',
            'firstName',
            'lastName',
            'owner',
            'balance',
            'accountType',
            'interestRate',
            'routingNumber'
        )


class TransactionSerializer(serializers.ModelSerializer):
    print("-->In TransactionSerializer<--")

    class Meta:
        model = Transaction
        fields = (
            'id',
            'fromAccountNumber',
            'toAccountNumber',
            'owner',
            'date',
            'pending',
            'amount',
            'notes'
        )


class ContactSerializer(serializers.ModelSerializer):
    print("-->In ContactSerializer<--")

    class Meta:
        model = Contact
        fields = (
            'id',
            'owner',
            'firstName',
            'lastName',
            'accountNumber',
            'routingNumber',
            'accountType'
        )
