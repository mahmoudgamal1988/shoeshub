from django.db import models

# Create your models here.


class Vision(models.Model):
    vision_image = models.ImageField(
        upload_to='photos/vision', blank=False)
    our_vision = models.TextField(max_length=255, unique=True)
    our_mission = models.TextField(max_length=255, unique=True)
    green_title = models.CharField(max_length=255)
    black_title = models.CharField(max_length=255)
    ceo_word = models.TextField(max_length=500)
    ceo_signature = models.ImageField(
        upload_to='photos/vision', blank=False)
    short_bio_1 = models.TextField(max_length=300)
    short_bio_2 = models.TextField(max_length=300)

    def __str__(self):
        return self.our_vision
