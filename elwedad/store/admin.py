from django.contrib import admin
from .models import Product, Qoutations

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('product_name',)}
    list_display = ('product_name', 'stock',
                    'created_date', 'modified_date', 'is_available')


class QoutationAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'email',
        'qoute_info',
        'replied'
    )
    list_editable = ('replied',)
    list_filter = ('replied',)


admin.site.register(Product, ProductAdmin)
admin.site.register(Qoutations, QoutationAdmin)
