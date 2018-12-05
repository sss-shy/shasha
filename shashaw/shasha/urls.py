from django.conf.urls import url
from django.urls import include

from shasha import views

urlpatterns = [
    url(r"^$",views.index),
    url(r"^login$",views.login),
    url(r"^register$",views.register),
    url(r"^cart$",views.cart),
]