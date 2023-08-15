from django.shortcuts import render

from background.models import Backgrounds, Section2
from category.models import Category
from store.models import Product
from our_vision.models import Vision
from services_titles.models import Services


def home(request):
    backgrounds = Backgrounds.objects.all()
    section2 = Section2.objects.all()
    services = Services.objects.all()
    vision = Vision.objects.all()
    categories = Category.objects.all()
    products = Product.objects.all().filter(is_available=True)

    context = {
        'backgrounds': backgrounds,
        'services': services,
        'vision': vision,
        'categories': categories,
        'products': products,
        'section2': section2
    }
    return render(request, 'home.html', context)
