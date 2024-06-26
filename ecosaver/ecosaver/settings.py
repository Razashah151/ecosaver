"""
Django settings for ecosaver project.

Generated by 'django-admin startproject' using Django 4.2.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path



# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-%u@h=5wgk#_k$or#tzd!(0n!k-ug&i@$3366c@z!!ksbgaeo@5'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition
SITE_ID = 2
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',
    'allauth.socialaccount.providers.facebook',
    'ecosaverapp',
    'rest_framework',
    'rest_framework.authtoken',
    'debug_toolbar',
    'corsheaders',
    'frontend',
]
SOCIALACCOUNT_PROVIDERS = {
    'facebook': {
        'SCOPE': ['email'],
        'AUTH_PARAMS': {
            'access_token_params': {
                'grant_type': 'client_credentials',
            },
        },
        'AUTH_PROVIDER_CLASS': 'allauth.socialaccount.providers.facebook.views.FacebookOAuth2Adapter',
        'LOGIN_URL': '/facebook/login/',
    },
    'google': {
        'SCOPE': [
            'profile',
            'email'
        ],
        'AUTH_PARAMS': {
            'access_type': 'online',
        },
        'LOGIN_URL': 'login',
        'LOGOUT_URL': 'logout',
        'CLIENT_CLASS': 'allauth.socialaccount.providers.google.views.GoogleOAuth2Adapter',
    }
}



SOCIAL_AUTH_FACEBOOK_KEY = '307362628911834'
SOCIAL_AUTH_FACEBOOK_SECRET = '122849e4be1046e13b1bcd66d28532d0'
SOCIALACCOUNT_LOGIN_ON_GET=True



MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'allauth.account.middleware.AccountMiddleware',
    'django.contrib.sites.middleware.CurrentSiteMiddleware',
    'debug_toolbar.middleware.DebugToolbarMiddleware',
    'django.middleware.common.CommonMiddleware',
]
CSRF_COOKIE_SECURE = True  # Set to False for development without HTTPS
CSRF_COOKIE_SAMESITE = 'Lax'  # or 'Strict' depending on your requirements

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',  # Default backend
    'allauth.account.auth_backends.AuthenticationBackend',  # Allauth backend
)

LOGIN_REDIRECT_URL = "/"
LOGIN_REDIRECT_URL="/"
ROOT_URLCONF = 'ecosaver.urls'



TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'ecosaver.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }
DATABASES = {   
    'default': {   
        'ENGINE': 'django.db.backends.mysql',   
        'NAME': 'ecosaver_database',
        'USER': 'root',   
        'PASSWORD': 'superstar1',   
        'HOST': '127.0.0.1',   
        'PORT': '3306',   
        'OPTIONS': {   
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'"   
        }   
    }   
} 

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators




# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/


STATIC_URL = '/static/' 
STATIC_ROOT = BASE_DIR / 'staticfiles'


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

STATICFILES_DIRS = [
     BASE_DIR / "ecosaverapp/static",
]

AUTH_USER_MODEL = 'ecosaverapp.CustomUser'

# settings.py

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Add the URL of your React app
]
