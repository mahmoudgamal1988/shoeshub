from django.db import models

# Create your models here.


class Services(models.Model):
    services_thumbnail = models.ImageField(
        upload_to='photos/services', blank=False)
    service_name = models.CharField(max_length=255, unique=True)
    services_description = models.TextField(max_length=500, unique=True)

    def __str__(self):
        return self.service_name

    class Meta:
        verbose_name_plural = 'Services'
