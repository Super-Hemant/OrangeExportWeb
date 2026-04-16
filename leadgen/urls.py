from django.urls import path
from .views import submit_lead

urlpatterns = [
    path('submit/', submit_lead, name='submit_lead'),
]
