# Generated by Django 3.2.7 on 2023-03-22 01:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_qoutations'),
    ]

    operations = [
        migrations.AddField(
            model_name='qoutations',
            name='replied',
            field=models.BooleanField(default=False),
        ),
    ]