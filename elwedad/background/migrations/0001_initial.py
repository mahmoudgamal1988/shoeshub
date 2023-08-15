# Generated by Django 3.2.7 on 2023-03-13 00:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Backgrounds',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title_small', models.CharField(max_length=255, unique=True)),
                ('title_big', models.CharField(max_length=255, unique=True)),
                ('title_mid', models.CharField(max_length=255, unique=True)),
                ('video_link', models.CharField(max_length=255, unique=True)),
                ('section2_green', models.CharField(max_length=255)),
                ('section2_black', models.CharField(max_length=255)),
                ('bg_image', models.ImageField(upload_to='photos/bg')),
            ],
        ),
    ]
