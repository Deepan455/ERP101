from posixpath import basename
from django.http import response
from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'organization', views.OrganizationViewSet)
router.register(r'item', views.ItemViewSet)
router.register(r'order', views.OrderViewSet, basename='order')
router.register(r'product', views.ProductViewSet, basename='product')
router.register(r'employee', views.EmployeeViewSet)
router.register(r'client', views.ClientViewSet)
router.register(r'transaction', views.TransactionViewSet)
router.register(r'seller', views.SellerViewset)
router.register(r'itemcat', views.ItemCatViewSet)

urlpatterns = [
    path('',include(router.urls))
]