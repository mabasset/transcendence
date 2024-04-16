from django.urls import path

from . import views
from . import userm

app_name = "usermanagement"
urlpatterns = [
    path("getData", views.getData, name="data"),
    path("getToken", views.getSessionToken, name="token"),
    path("register", views.register, name="register"),
    path("authenticate", views.authenticate, name="auth"),
    path("logout", views.logout, name="logout"),
    path("getUserData", views.getUserData, name="userData"),
    path("updateAlias", views.changeAlias, name="aliasUpdate"),
    path("updateImage", views.changeImage, name="imageUpdate"),
    path("getonline", userm.getonline, name="online"),
]