from django import forms
from django.db import models
from django.db.models import fields
from .models import Qoutations


class QoutationsForm(forms.ModelForm):

    class Meta:
        model = Qoutations
        fields = ['name', 'email',
                  "qoute_info"]
