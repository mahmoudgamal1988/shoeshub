from django.core import paginator
from django.http.response import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponseRedirect


from category.models import Category
from store.forms import QoutationsForm
from .models import Product
from category.models import Category
from django.db.models import Q

from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.contrib import messages

# Create your views here.


def store(request):

    categories = Category.objects.all()
    products = Product.objects.all()
    # we take only 5 products from the all teh products retrieved above
    paginator = Paginator(categories, 8)
    page = request.GET.get('page')
    # here we save the 6 products to use on each webpage instead of the whole products.
    pages_categories = paginator.get_page(page)
    categories_count = categories.count()

    context = {
        'categories': pages_categories,
        'product_count': categories_count,
        'products': products
    }
    return render(request, 'store/products.html', context)


def product_detail(request, category_slug, product_slug):
    try:
        single_product = Product.objects.get(
            category__slug=category_slug, slug=product_slug)

    except Exception as e:
        raise e

    context = {
        "single_product": single_product
    }
    return render(request, 'store/product_detail.html', context)


def category_detail(request, category_slug):
    try:

        category = get_object_or_404(Category, slug=category_slug)
        single_category = Product.objects.filter(
            category=category, is_available=True)
    except Exception as e:
        raise e

    context = {
        "single_category": single_category,
        "category": category
    }
    return render(request, 'store/category_products.html', context)


def sendqoute(request):
    url = request.META.get('HTTP_REFERER')
    if request.method == 'POST':
        form = QoutationsForm(request.POST)
        if form.is_valid():

            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            qoute_info = form.cleaned_data['qoute_info']

            form.save()
            # messages.success(
            #     request, 'Thank you! Your qoute has been submitted.')
            return render(request, 'store/thanks.html')


def search(request):
    if 'keyword' in request.GET:
        keyword = request.GET['keyword']
        # if keyword:
        products = Product.objects.order_by('-created_date').filter(
            Q(description__icontains=keyword) | Q(product_name__icontains=keyword))
        product_count = products.count()
        if not keyword:
            products = ""
            product_count = 0

    context = {
        'products': products,
        'product_count': product_count,
    }
    return render(request, 'store/store.html', context)
