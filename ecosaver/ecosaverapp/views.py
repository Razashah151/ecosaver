from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from ecosaverapp.forms import CustomUserCreationForm


def base(request):
    return render(request,'registration/base.html')

def home(request):
    return render(request, 'registration/home.html')

def login_user(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, "Incorrect email or password. Please try again.")
            return redirect('login')
    else:
        return render(request, 'registration/login.html', {})

def logout_user(request):
    logout(request)
    messages.success(request, "Logged out successfully.")
    return redirect('login')

def signup_user(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)  
            messages.success(request, "Sign Up Successful")
            return redirect('home')  
    else:
        form = CustomUserCreationForm()

    context = {'form': form}
    return render(request, 'registration/signup.html', context)



