from .models import Player
from .serializers import PlayerSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# class PlayerListCreate(generics.ListCreateAPIView):
#     queryset = Player.objects.all()
#     serializer_class = PlayerSerializer
@api_view(['GET'])
def single_user(request):
        player = Player.objects.first()
        serializer = PlayerSerializer(player)
        return Response(serializer.data)
