from django.urls import path
from .views import PasswordAPIView

urlpatterns = [
    path("passwords/", PasswordAPIView.as_view(), name="password-detail")
]
