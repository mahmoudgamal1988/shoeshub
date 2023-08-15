from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Account

# Register your models here.


class AccountAdmin(UserAdmin):
    list_display = (
        'email',
        'first_name',
        'last_name',
        'username',
        'last_login',
        'date_joined',
        'is_active'
    )
    list_display_links = ('email', 'username')
    readonly_fields = ('last_login', 'date_joined')
    # the - here is to show it in a descending order
    ordering = ('-date_joined',)
    # this is needed when we work with the custom user model, which allows us to see the user inside the admin panel
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(Account, AccountAdmin)