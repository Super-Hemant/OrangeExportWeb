from django.shortcuts import render

# Create your views here.
from django.shortcuts import redirect
from .models import Lead

def submit_lead(request):
    print("POST DATA:", request.POST)   
    if request.method == 'POST':
        print("POST DATA:", request.POST)   
        Lead.objects.create(
            first_name=request.POST.get('first_name'),
            last_name=request.POST.get('last_name'),
            company=request.POST.get('company'),
            email=request.POST.get('email'),
            phone=request.POST.get('phone'),
            category=request.POST.get('category'),
            message=request.POST.get('message'),
        )
    return redirect('/')   # go back to homepage