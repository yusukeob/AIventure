from django.db import models

class Picture(models.Model):
    picture = models.ImageField()
