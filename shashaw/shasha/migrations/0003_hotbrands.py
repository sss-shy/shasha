# Generated by Django 2.1.3 on 2018-12-10 12:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shasha', '0002_flashsale'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hotbrands',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.CharField(max_length=100)),
                ('logo', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'shasha_hotbrands',
            },
        ),
    ]