from rest_framework import serializers
from user.models import User


# USER SERIALIZER
class   UserSerializer(serializers.ModelSerializers):
    class Meta:
        model = User
        fields = '__all__'