from rest_framework import serializers
from loanmanagement.models import Loan


class LoanManagementSerializer(serializers.ModelSerializer):
     class Meta:
        model = Loan
        fields = ('id','loan_id','user_id','loan_type','start_balance','current_balance','interest_rate','monthly_payment','start_date','end_date','payment_interval')

          