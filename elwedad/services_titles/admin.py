from django.contrib import admin

from .models import Services

# Register your models here.


class ServiceAdmin(admin.ModelAdmin):
    list_display = (

        "service_name",
        "services_description",
        "services_thumbnail",
    )


# Register your models here.
admin.site.register(Services, ServiceAdmin)
