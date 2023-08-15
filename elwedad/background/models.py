from django.db import models

# Create your models here.


class Backgrounds(models.Model):
    title_small = models.CharField(max_length=255, unique=True)
    title_big = models.CharField(max_length=255, unique=True)
    title_mid = models.CharField(max_length=255, unique=True)
    video_link = models.CharField(max_length=255, unique=True)

    # to use upload images Pillow should be installed.
    bg_image = models.ImageField(upload_to='photos/bg', blank=False)

    def __str__(self):
        return self.title_big

    class Meta:
        verbose_name_plural = 'Backgrounds'


class Section2(models.Model):
    section2_green = models.CharField(
        max_length=255, null=True, blank=True)
    section2_black = models.CharField(
        max_length=255, null=True, blank=True)

    def __str__(self):
        return self.section2_green

    class Meta:
        verbose_name_plural = 'Section 2'
