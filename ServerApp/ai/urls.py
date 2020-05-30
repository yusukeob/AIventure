from django.urls import path
from . import views

urlpatterns = [
    path('api/ai/check_picture/', views.check_picture),
]
