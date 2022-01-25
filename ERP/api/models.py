from distutils.command.upload import upload
from unicodedata import name
from django.db import models
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

# Create your models here.
class Organization(models.Model):
    og_name = models.CharField(max_length = 500)
    desc = models.TextField(blank=True)
    image = models.ImageField(blank=True)
    users = models.ManyToManyField("UserAc", through = "UserOrg", related_name="userOrg", blank=True)
    admins = models.ManyToManyField("UserAc", through = "AdminOrg", related_name="adminOrg", blank=True)

    def __str__(self):
        return self.og_name

#Can be a person or an organizaitonal entity
class Person(models.Model):
    full_name = models.CharField(max_length = 500)
    email = models.EmailField()
    image = models.ImageField(upload_to = 'person/',blank=True)
    additional_info = models.TextField(blank=True)

    class Meta:
        abstract = True
    
    def __str__(self):
        return self.full_name

class UserOrg(models.Model):
    user = models.ForeignKey("UserAc", models.CASCADE)
    organization = models.ForeignKey("Organization", models.CASCADE)

    def __str__(self):
        return self.user +" in "+ self.organization

class AdminOrg(models.Model):
    user = models.ForeignKey("UserAc", on_delete = models.CASCADE)
    organization = models.ForeignKey("Organization", on_delete = models.CASCADE)

    def __str__(self):
        return "account: " + self.user.username

class UserAc(User, Person):
    organizations = models.ManyToManyField(Organization, through = "UserOrg", blank=True)

    def __str__(self):
        return self.username

class Client(Person):
    receivables = models.FloatField()
    company = models.CharField(max_length=500)

    def __str__(self):
        return "Client:" + self.full_name

class Seller(Person):
    payables = models.FloatField()
    company = models.CharField(max_length=500)

    def __str__(self):
        return "Seller:" + self.full_name

class ItemCat(models.Model):
    category_name = models.CharField(max_length=500)
    desc = models.TextField()

    def __str__(self):
        return self.category_name


class Item(models.Model):
    item_name = models.CharField(max_length = 500)
    quantity = models.FloatField()
    unit = models.CharField(null=False, blank = False, max_length=25)
    category = models.ForeignKey(ItemCat, on_delete = models.CASCADE)
    images = models.ImageField(upload_to = 'item',blank=True)
    assetornot = models.BooleanField()
    seller = models.ForeignKey(Seller, on_delete= models.CASCADE)
    priceperunit = models.FloatField()

    def __str__(self):
        return self.item_name

class Product(models.Model):
    product_name = models.CharField(max_length = 500)
    item_list = models.ManyToManyField(Item,through="ItemRequirement",blank=True)
    inventory = models.FloatField()
    unit = models.CharField(null=False, blank = False, max_length=25)
    images = models.ImageField(blank=True)
    desc = models.TextField()
    isVariation = models.BooleanField(default=False)
    variationOf = models.ForeignKey("self", null=True, blank = True, on_delete= models.SET_NULL)

    def __str__(self):
        return self.product_name

class ItemRequirement(models.Model):
    product = models.ForeignKey(Product, on_delete= models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.PROTECT)
    quantity = models.FloatField()

    def __str__(self):
        return self.product.product_name + " needs"

class Order(models.Model):
    ORDER_CONDITION = (
        ('CT', "InCart"),
        ('OD', "Ordered"),
        ('OW', "OnTheWay"),
        ('DV', "Delivered"),
        ('RQ', "RefundRequested"),
        ('RG', "RefundGranted")
    )

    order_name = models.CharField(blank = True, null=True, max_length=500)
    description = models.TextField()
    order_date = models.DateField()
    start_date = models.DateField(auto_now_add = True)
    ordered = models.BooleanField(default=False)
    items = models.ManyToManyField(Product, through="OrderItem",blank = True)
    state = models.CharField(max_length=2, choices = ORDER_CONDITION)
    ordered_by = models.ForeignKey(Client, null=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.order_name

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete = models.CASCADE)
    product = models.ForeignKey(Product, on_delete = models.PROTECT)
    quantity = models.FloatField()

    def __str__(self):
        return self.order.order_name + " items"

class Employee(Person):
    joined = models.DateField()
    salary_amount = models.FloatField()

    def __str__(self):
        return self.full_name

class Transaction(models.Model):
    occured_on = models.DateField()
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    entity = GenericForeignKey('content_type', 'object_id')
    amount = models.FloatField()
    isBank = models.BooleanField(default=False)
    cheque_no = models.CharField(max_length=25)
    bank_trans_id = models.CharField(max_length=50)
    received = models.BooleanField()
    
    def __str__(self):
        return self.id