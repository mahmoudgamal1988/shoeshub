from django.db import models
from django.urls import reverse

# Create your models here.


class Category(models.Model):
    category_name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    # blank=True means this field is optional.
    description = models.TextField(max_length=255, blank=True)
    # to use upload images Pillow should be installed.
    cat_image = models.ImageField(upload_to='photos/categories', blank=True)

    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def get_url(self):
        return reverse('category_detail', args=[self.slug])

    def __str__(self):
        return self.category_name