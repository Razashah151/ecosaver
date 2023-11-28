from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from ecosaverapp.forms import CustomUserCreationForm
from .utils import send_otp
from datetime import datetime
import pyotp
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.backends import ModelBackend
def base(request):
    return render(request, 'registration/base.html',{})

@login_required(login_url='login') 
def home(request):
    return render(request, 'registration/home.html',{})

def login_user(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            send_otp(request)
            request.session['username']=username
            return redirect('otp')
            # login(request, user)
            # return redirect('home')
        else:
            messages.error(request, "Incorrect email or password. Please try again.")
            return redirect('login')
    else:
        return render(request, 'registration/login.html', {})
from django.contrib.auth import get_user_model

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from ecosaverapp.forms import CustomUserCreationForm
from .utils import send_otp
from datetime import datetime
import pyotp
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate as auth_authenticate, login as auth_login
from django.contrib.auth.backends import ModelBackend

def otp_view(request):
    error_message = None
    if request.method == 'POST':
        otp = request.POST['otp']
        
        # Check if 'username' key exists in the session
        if 'username' in request.session:
            username = request.session['username']
            otp_secret_key = request.session['otp_secret_key']
            otp_valid_date = request.session['otp_valid_date']

            print(f"Entered OTP: {otp}")
            print(f"Username: {username}")

            if otp_secret_key and otp_valid_date is not None:
                valid_date = datetime.fromisoformat(otp_valid_date)
                
                if valid_date > datetime.now():
                    totp = pyotp.TOTP(otp_secret_key, interval=60)
                    generated_otp = totp.now()
                    print(f"Generated OTP: {generated_otp}")

                    # Specify the backend as ModelBackend
                    user = auth_authenticate(request, username=username, backend=ModelBackend)

                    if user is not None and totp.verify(otp):
                        print("OTP verification successful")
                        auth_login(request, user)
                        del request.session['otp_secret_key']
                        del request.session['otp_valid_date']
                        return redirect('home')
                    else:
                        print("Authentication or OTP verification failed")
                        print(f"User: {user}")
                        print(f"Generated OTP: {generated_otp}")
                else:
                    print("OTP has expired")
            else:
                print("OTP secret key or valid date is not available")
        else:
            print("Username not found in the session")

    return render(request, 'registration/otp.html', {})






def logout_user(request):
    logout(request)
    messages.success(request, "Logged out successfully.")
    return redirect('login')

def signup_user(request):
    if request.method == "POST":
        user_form = CustomUserCreationForm(request.POST)
        if user_form.is_valid():
            user = user_form.save(commit=False)
            user.backend = 'django.contrib.auth.backends.ModelBackend'  # Specify the authentication backend
            user.save()

            # Redirect to the login page after successful signup
            messages.success(request, "Sign Up Successful! Please login.")
            return redirect('login')
        else:
            print(user_form.errors)
    else:
        user_form = CustomUserCreationForm()

    context = {'user_form': user_form}
    return render(request, 'registration/signup.html', context)
