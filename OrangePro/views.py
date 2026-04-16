from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    #return HttpResponse('Hello welcome to OrangePro, Home Page')
    return render(request, 'index.html')

def about(request):
    return HttpResponse('Hello welcome to OrangePro, About Page')

    return render(request, 'home.html')

def contact(request):
    return HttpResponse('Hello welcome to OrangePro, Contact Page')

    return render(request, 'home.html')


