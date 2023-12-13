from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.shortcuts import render, redirect
from django.contrib.auth.backends import ModelBackend
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .forms import CustomUserCreationForm
from .serializers import CustomUserSerializer
from datetime import datetime
import requests

@api_view(['POST'])
@permission_classes([])
def login_api(request):
    if request.method == "POST":
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            serializer = CustomUserSerializer(user)
            return Response(serializer.data, status=200)
        else:
            return Response({"message": "Incorrect username or password"}, status=401)

    return Response({"message": "Invalid request"}, status=400)

@api_view(['POST'])
@permission_classes([])
def signup_api(request):
    if request.method == "POST":
        user_form = CustomUserCreationForm(request.data)
        if user_form.is_valid():
            user = user_form.save()
            print('User saved successfully:', user)
            serializer = CustomUserSerializer(user)
            return Response(serializer.data, status=201)
        else:
            print('Invalid form data:', user_form.errors)
            return Response({"message": "Invalid data", "errors": user_form.errors}, status=400)

    return Response({"message": "Invalid request"}, status=400)


@api_view(['POST'])
@permission_classes([])
def logout_api(request):
    logout(request)
    return Response({"message": "Logged out successfully."})

ESP32_IP_ADDRESS = "192.168.1.12"

@api_view(['GET'])
def home_automation(request):
    return JsonResponse({"message": "Welcome to Home Automation App"})

@api_view(['GET'])
def turn_on(request):
    requests.get(f'http://{ESP32_IP_ADDRESS}/on')
    return JsonResponse({'status': 'success', 'message': 'Bulb turned ON'})

@api_view(['GET'])
def turn_off(request):
    requests.get(f'http://{ESP32_IP_ADDRESS}/off')
    return JsonResponse({'status': 'success', 'message': 'Bulb turned OFF'})
