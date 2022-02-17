from msilib.schema import Error
from rest_framework import viewsets
from rest_framework import permissions
from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework.response import Response
from .models import *
from .serializers import *

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    permission_classes = [permissions.AllowAny]

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [permissions.AllowAny]

# class ProductViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#     permission_classes = [permissions.AllowAny]

class ProductViewSet(viewsets.GenericViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all ()

    def list(self, request):
        queryset = Product.objects.all ()
        serializer = ProductSerializer(queryset, many = True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk = None):
        queryset = Product.objects.all()
        product = get_object_or_404(queryset, id=pk)
        serializer = ProductSerializer(product)
        querysetItems = ItemRequirement.objects.all()
        items = get_list_or_404(querysetItems, product=serializer.data['id'])
        serializerReq = ItemRequirementSerializer(items, many=True)
        return Response({"product":serializer.data,"items":serializerReq.data})
    
    #Don't forget to implement try catch
    def create(self, request):
        try:
            info = request.data
            serializer = ProductSerializer(data = info['product'])
            if(serializer.is_valid()):
                serializer.save()
                itemholder = []
                outdata = serializer.data
                for item in info['items']:
                    modified_data = item
                    modified_data["product"] = serializer.data['id']
                    iserial = ItemRequirementSerializer(data = modified_data)
                    if(iserial.is_valid()):
                        # print(serializer.data['id'])
                        iserial.save()
                        itemholder.append(iserial.data)
                        outdata["item_list"].append(iserial.data["item"])
                        
                    else:
                        return Response({"error":"Items invalid"})
                return Response({"product":serializer.data,"items":itemholder})
            else:
                return Response({"status":"Invalid"})
        except:
            pass
            
        # if(serializer.is_valid()):
        #     serializer.save()
        #     return Response(serializer.data)
        # else:
        #     return Response({"error":"Fatal"})
        # product.save()
        # for item in info['items']:
        #     i = ItemSerializer(item)
        #     itemobj = Item(i.data)

class OrderViewSet(viewsets.GenericViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def list(self, request):
        queryset = Order.objects.all()
        serializer = OrderSerializer(queryset, many = True)
        return Response(serializer.data)
    
    def retrieve(self, request, pk = None):
        queryset = Order.objects.all()
        order = get_object_or_404(queryset, id=pk)
        serializer = OrderSerializer(order)
        querysetItems = OrderItem.objects.all()
        items = get_list_or_404(querysetItems, order=serializer.data['id'])
        serializerReq = OrderItemSerializer(items, many=True)
        return Response({"order":serializer.data,"products":serializerReq.data})
    
    #Don't forget to implement try catch
    def create(self, request):
        try:
            info = request.data
            serializer = OrderSerializer(data = info['order'])
            if(serializer.is_valid()):
                serializer.save()
                itemholder = []
                outdata = serializer.data
                for item in info['products']:
                    modified_data = item
                    modified_data["order"] = serializer.data['id']
                    iserial = OrderItemSerializer(data = modified_data)
                    if(iserial.is_valid()):
                        # print(serializer.data['id'])
                        iserial.save()
                        itemholder.append(iserial.data)
                        outdata["items"].append(iserial.data["product"])
                        
                    else:
                        return Response({"error":"Items invalid"})
                return Response({"order":serializer.data,"products":itemholder})
            else:
                return Response({"status":"Invalid"})
        except Exception:
            pass

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.AllowAny]

class ItemRequirementViewSet(viewsets.ModelViewSet):
    queryset = ItemRequirement.objects.all()
    serializer_class = ItemRequirementSerializer
    permission_classes = [permissions.AllowAny]

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    permission_classes = [permissions.AllowAny]

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [permissions.AllowAny]

class ItemCatViewSet(viewsets.ModelViewSet):
    queryset = ItemCat.objects.all()
    serializer_class = ItemCatSerializer
    permission_classes = [permissions.AllowAny]

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    permission_classes = [permissions.AllowAny]

class SellerViewset(viewsets.ModelViewSet):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer
    permission_classes = [permissions.AllowAny]