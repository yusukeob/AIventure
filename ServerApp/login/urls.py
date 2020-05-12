from django.urls import path
from . import views

urlpatterns = [
    # path('api/login/', views.PlayerListCreate.as_view()),
    path('api/login/singleUser', views.single_user),
]
