from rest_framework import serializers
from .models import Transaction


class TransactionSerializer(serializers.ModelSerializer):
    print("In AccountSerializer")

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

