from django.urls import path

from .consumer import ChartConsumer

ws_urlpatterns = [
    path('ws/chart/', ChartConsumer.as_asgi()),
]
