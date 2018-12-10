from django.db import models

# Create your models here.

# {"class" : "banner_list" , "url" : "img/banner/banner1.jpg"},
class Banner(models.Model):
    urls = models.CharField(max_length=100)
    class Meta:
        db_table='shasha_banner'


# {"count": "2.8", "pic": "n.m", "buyNum": 140, "price": 88.0, "dis": 315.0,
#  "des01": "含2倍以上的透明质酸和神经酰胺3，天然保湿因子 (N.M.F – Nutrient Moisturizing Factor) 及金缕梅、大马士革玫瑰水等多种保湿成份提炼而成高浓度保湿精华。",
#  "des02": "美迪惠尔&nbsp;MEDIHEAL NUDE GEL MASK&nbsp;", "des03": "金装双倍特强保湿水库针剂裸贴水凝胶面膜 (V3)", "des04": "30 克 x 10 "},

class Flashsale(models.Model):
    count=models.CharField(max_length=20)
    pic=models.CharField(max_length=20)
    buyNum=models.IntegerField()
    price=models.DecimalField(max_digits=7,decimal_places=1)
    dis=models.DecimalField(max_digits=7,decimal_places=1)
    des01=models.CharField(max_length=256)
    des02 = models.CharField(max_length=256)
    des03 = models.CharField(max_length=256)
    des04 = models.CharField(max_length=256)
    class Meta:
        db_table='shasha_flashsale'

class Hotbrands(models.Model):
    img=models.CharField(max_length=100)
    logo=models.CharField(max_length=100)
    class Meta:
        db_table='shasha_hotbrands'


# {"messpic":"limit","coupic":"korea","pic":"Dr",
#  "saleNum":12,"price":140.0,"dis":207.0,"count":
#      "6.7","des02":"DR.ORACLE","des03":"MAKEUP BASE 爱护理抗敏BB修饰霜SPF50+ PA+++ ",
#  "des04":"40 毫升  ","des05":"Dr.Oracle (奥拉克博士) 爱护理抗敏BB修饰霜，专为敏感性肌肤设计，以多种植物保湿护肤成分，温和地调整肤色和遮蔽瑕疵。"},

class Newarrivals(models.Model):
    messpic=models.CharField(max_length=50)
    coupic=models.CharField(max_length=50)
    pic=models.CharField(max_length=20)
    saleNum=models.IntegerField()
    price=models.DecimalField(max_digits=7,decimal_places=1)
    dis = models.DecimalField(max_digits=7, decimal_places=1)
    count=models.CharField(max_length=20)
    des02=models.CharField(max_length=256)
    des03 = models.CharField(max_length=256)
    des04 = models.CharField(max_length=256)
    des05 = models.CharField(max_length=256)
    class Meta:
        db_table='shasha_newarrivals'



class Register(models.Model):
    signup=models.CharField(max_length=256)
    usr=models.CharField(max_length=100)
    psd=models.CharField(max_length=256)
    # 等级
    rank = models.IntegerField(default=1)
    token = models.CharField(max_length=256)
    class Meta:
        db_table='shasha_register'