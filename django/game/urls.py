from django.urls import path

from . import views

app_name = "game"
urlpatterns = [
    path("savematch", views.showWinner, name="savematch"),
]