from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):
    def handle(self, *args, **options):
        try:
            user = User.objects.create_user('ankit', password='Password@1234')
            user.is_superuser = False
            user.is_staff = False
            user.save()
        except:
            print("test user already exists")
            return
        print("created test user")
