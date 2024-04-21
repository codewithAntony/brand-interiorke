from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    return HttpResponse('HomePage')

def signIn(request):
    return render('signin')