# Generated by Django 4.2 on 2023-04-25 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(upload_to='photos/')),
                ('caption', models.CharField(max_length=200)),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]