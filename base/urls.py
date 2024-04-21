from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('sign-in/<str:pk>/', views.signIn, name="sign-in"),
]