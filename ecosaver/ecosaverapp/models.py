from django.contrib.auth.models import AbstractUser,Group,Permission
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    

    groups = models.ManyToManyField(Group, blank=True, related_name='customuser')
    user_permissions = models.ManyToManyField(Permission, blank=True, related_name='customuser')

    def __str__(self):
        return self.username
