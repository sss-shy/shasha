# Generated by Django 2.1.3 on 2018-12-10 13:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shasha', '0003_hotbrands'),
    ]

    operations = [
        migrations.CreateModel(
            name='Newarrivals',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('messpic', models.CharField(max_length=50)),
                ('coupic', models.CharField(max_length=50)),
                ('pic', models.CharField(max_length=20)),
                ('saleNum', models.IntegerField()),
                ('price', models.DecimalField(decimal_places=1, max_digits=7)),
                ('dis', models.DecimalField(decimal_places=1, max_digits=7)),
                ('count', models.CharField(max_length=20)),
                ('des02', models.CharField(max_length=256)),
                ('des03', models.CharField(max_length=256)),
                ('des04', models.CharField(max_length=256)),
                ('des05', models.CharField(max_length=256)),
            ],
            options={
                'db_table': 'shasha_newarrivals',
            },
        ),
    ]