from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.shortcuts import render, redirect
from django.contrib.auth.backends import ModelBackend
from django.http import JsonResponse
import json
import logging
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .forms import CustomUserCreationForm
from .serializers import CustomUserSerializer
from datetime import datetime
import requests
from .models import SensorData
from .serializers import SensorDataSerializer
from django.core.exceptions import ObjectDoesNotExist
import serial

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

@api_view(['GET'])
@permission_classes([])
def user_profile(request):
    if request.method == 'GET':
        # Get the currently authenticated user (assuming you're using token-based authentication)
        user = request.user

        # Check if the user is authenticated
        if user.is_authenticated:
            # Retrieve the user profile details
            profile_data = {
                'username': user.username,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                # Add any other fields you want to include in the profile data
            }

            # Return the profile data in JSON format
            return JsonResponse(profile_data)
        else:
            # User is not authenticated, return an error message
            return JsonResponse({'error': 'User is not authenticated'}, status=401)
    else:
        # Method not allowed, return an error message
        return JsonResponse({'error': 'Method not allowed'}, status=405)
    
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


logger = logging.getLogger(__name__)

def sensor_data(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            current_data = data.get('current_data')
            logger.info(f'Received POST request with data: {current_data}')
            # Process the data as before...
            # For now, let's just return a success response
            return JsonResponse({'message': 'Data received successfully'}, status=200)
        except Exception as e:
            logger.error(f'Error processing POST request: {e}')
            return JsonResponse({'error': 'An error occurred'}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
    
from datetime import date
from django.http import JsonResponse

def sensor_data(request):
    if request.method == 'GET':
        # Retrieve today's date
        today = date.today()

        # Retrieve today's consumption data from the database or another source
        # For now, let's assume daily consumption data is stored in a variable named daily_data
        # You should replace this with actual logic to fetch today's data
        daily_data = [20]  # Sample data for demonstration

        # Return the daily consumption data as a JSON response
        return JsonResponse(daily_data, safe=False)
    elif request.method == 'POST':
        # Handle POST requests for sending sensor data (already implemented)
        try:
            data = json.loads(request.body)
            current_data = data.get('current_data')
            logger.info(f'Received POST request with data: {current_data}')
            # Process the data as before...
            return JsonResponse({'message': 'Data received successfully'}, status=200)
        except Exception as e:
            logger.error(f'Error processing POST request: {e}')
            return JsonResponse({'error': 'An error occurred'}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
