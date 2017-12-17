import uuid


def init_data(apps, schema_editor):
    AccountInfo = apps.get_model("transferfund", "AccountInfo")
    db_alias = schema_editor.connection.alias
    AccountInfo.objects.using(db_alias).bulk_create([
        AccountInfo(id=uuid.uuid4(), accountNumber="9530143847925231",
                    firstName="Haoshuai", lastName="Qin", owner="shuai@gmail.com",
                    balance=123.57, accountType="lending", interestRate=0.6, routingNumber="9530143847925231"),
        AccountInfo(id=uuid.uuid4(), accountNumber="2378946716393578",
                    firstName="Haoshuai", lastName="Qin", owner="shuai@gmail.com",
                    balance=8345.9, accountType="checking", interestRate=0.2, routingNumber="2378946716393578"),
        AccountInfo(id=uuid.uuid4(), accountNumber="3674965842406578",
                    firstName="Team", lastName="Best", owner="team8best@gmail.com",
                    balance=1289.79, accountType="saving", interestRate=0.4, routingNumber="3674965842406578"),
        AccountInfo(id=uuid.uuid4(), accountNumber="7894232574905679",
                    firstName="Team", lastName="best", owner="team8best@gmail.com",
                    balance=1044.46, accountType="lending", interestRate=0.6, routingNumber="78942325749056793"),
        AccountInfo(id=uuid.uuid4(), accountNumber="3539546074253649",
                    firstName="Team", lastName="Best", owner="team8best@gmail.com",
                    balance=3636.6, accountType="checking", interestRate=0.2, routingNumber="3539546074253649"),
        AccountInfo(id=uuid.uuid4(), accountNumber="6793146395206389",
                    firstName="Haoshuai", lastName="Qin", owner="shuai@gmail.com",
                    balance=3422.84, accountType="saving", interestRate=0.4, routingNumber="6793146395206389"),
    ])
