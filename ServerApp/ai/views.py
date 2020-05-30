from .models import Picture
from .serializers import PictureSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def check_picture(request):
        serializer = PictureSerializer(data = request.data)
        if serializer.is_valid():
            response = {"success": True}
            return Response(response)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
