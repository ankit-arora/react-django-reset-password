import os
from django.contrib.auth.models import User


def create_user():
    user = User.objects.create_user('foo', password='Bar@10121')
    user.is_superuser = False
    user.is_staff = False
    user.save()


if __name__ == "__main__":
    create_user()
