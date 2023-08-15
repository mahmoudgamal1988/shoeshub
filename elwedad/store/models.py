from django.db import models
from django.db.models.fields import CharField
from django.urls.base import reverse
from category.models import Category

# Create your models here.


class Product(models.Model):
    product_name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255)
    description = models.TextField(max_length=500)
    images = models.ImageField(
        upload_to='photos/products')
    stock = models.IntegerField()
    is_available = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def get_url(self):
        return reverse('product_detail', args=[self.category.slug, self.slug])

    def __str__(self):
        return self.product_name


class Qoutations(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    qoute_info = models.TextField()
    replied = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Qoutations'
