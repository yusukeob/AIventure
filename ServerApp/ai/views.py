from .models import Picture
from .serializers import PictureSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from . import training
import tensorflow as tf
from PIL import Image
from tensorflow.keras.preprocessing import image
import io
import numpy as np
import matplotlib.pyplot as plt

# def image_to_byte_array(img:Image):
#         imgByteArr = io.BytesIO()
#         img.save(imgByteArr, format="jpg")
#         imgByteArr = imgByteArr.getvalue()
#         return imgByteArr

# def normalize_img(img):
#         """Normalizes images: `uint8` -> `float32`."""
#         return tf.cast(img, tf.float32) / 255.

@api_view(['POST'])
def check_picture(request):
        # training.train_clothing_image_classifier_model()
        picture = Image.open(request.data['picture'])
        picture = picture.resize((28, 28), Image.ANTIALIAS)
        # picture = normalize_img(picture)
        picture = (np.expand_dims(picture, 0))
        model = tf.keras.models.load_model('ai/saved_models/clothing_image_classifier')
        predictions_single = model.predict(picture)
        prediction = 'Failure'
        if (np.argmax(predictions_single[0]) == 5):
          prediction = 'Success'
        response = {'prediction': prediction}
        return Response(response)
