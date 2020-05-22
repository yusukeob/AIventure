from .models import Player
from .serializers import PlayerSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# class PlayerListCreate(generics.ListCreateAPIView):
#     queryset = Player.objects.all()
#     serializer_class = PlayerSerializer
@api_view(['POST'])
def login(request):
        serializer = PlayerSerializer(data=request.data)
        if serializer.is_valid():
            is_user = Player.objects.filter(username=serializer.data['username'], password=serializer.data['password']).exists()
            response = {"success": is_user}
            return Response(response)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
