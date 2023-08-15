from django.contrib import admin
from .models import Vision

# Register your models here.


class VisionAdmin(admin.ModelAdmin):
    list_display = (
        'our_vision',
        'our_mission',
        'vision_image',
        'green_title',
        'black_title',
        'ceo_word',
        'ceo_signature'
    )


admin.site.register(Vision, VisionAdmin)
