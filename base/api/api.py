from user.models import User
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead viewset
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer