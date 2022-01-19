from django.http import response
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'organization', views.OrganizationViewSet)
router.register(r'item', views.ItemViewSet)
router.register(r'order', views.OrderViewSet)
router.register(r'product', views.ProductViewSet)
router.register(r'employee', views.EmployeeViewSet)

urlpatterns = [
    path('',include(router.urls))
]