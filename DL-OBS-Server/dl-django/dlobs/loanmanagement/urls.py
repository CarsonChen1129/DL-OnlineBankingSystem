from django.conf.urls import url
from loanmanagement import views

urlpatterns = [
    url(r'^$', views.loan_list),
    url(r'^(?P<user_id>[0-9]+)$', views.loan_detail),
]