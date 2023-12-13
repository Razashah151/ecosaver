from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('login/', views.login_api, name='login_api'),  
    path('logout/', views.logout_api, name='logout_api'),  
    path('signup/', views.signup_api, name='signup_api'),  
    path('home_automation/', views.home_automation, name='home_automation'), 
    path('turn_on/', views.turn_on, name='turn_on'),  
    path('turn_off/', views.turn_off, name='turn_off'),  
]
