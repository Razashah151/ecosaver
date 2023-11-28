from django.contrib.auth.forms import UserCreationForm
from django import forms
from .models import CustomUser
from .validators import validate_username

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'first_name', 'last_name', 'password1', 'password2')

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if CustomUser.objects.filter(email=email).exists():
            raise forms.ValidationError('This email address is already in use.')
        return email

    def clean_username(self):
        username = self.cleaned_data['username']
        validate_username(username)  # Ensure custom alphanumeric validation
        return username

    def save(self, commit=True):
        user = super().save(commit=False)
        # You can add any additional logic here before saving the user.
        if commit:
            user.save()
        return user
