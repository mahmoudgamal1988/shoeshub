from django.contrib import admin

from .models import Backgrounds, Section2

# Register your models here.


class BgAdmin(admin.ModelAdmin):
    list_display = (
        "title_small",
        "title_big",
        "title_mid",
        "bg_image"
    )


class S2Admin(admin.ModelAdmin):
    list_display = (
        'section2_green',
        'section2_black'
    )


# Register your models here.
admin.site.register(Backgrounds, BgAdmin)
admin.site.register(Section2, S2Admin)
