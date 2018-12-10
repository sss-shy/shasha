from django.shortcuts import render

# Create your views here.
#首页
from shasha.models import Banner


def index(request):
    tupis= Banner.objects.all()


    data={
        'tupis':tupis
    }
    return render(request,"index.html",context=data)

#登录
def login(request):
    return render(request,"login.html")

#注册
def register(request):
    return render(request,"register.html")


def cart(request):
    return render(request,"Shopping Cart.html")


def base(request):
    return render(request,"base.html")


def details(request):
    return render(request,'Product Details.html')


