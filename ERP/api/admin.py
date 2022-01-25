from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Organization)
admin.site.register(UserOrg)
admin.site.register(AdminOrg)
admin.site.register(UserAc)
admin.site.register(Client)
admin.site.register(ItemCat)
admin.site.register(Item)
admin.site.register(Product)
admin.site.register(ItemRequirement)
admin.site.register(Order)
admin.site.register(Seller)
admin.site.register(OrderItem)
admin.site.register(Employee)
admin.site.register(Transaction)