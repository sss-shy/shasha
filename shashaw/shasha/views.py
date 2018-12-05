from django.shortcuts import render

# Create your views here.
#首页
def index(request):
    return render(request,"index.html")

#登录
def login(request):
    return render(request,"login.html")

#注册
def register(request):
    return render(request,"register.html")


def cart(request):
    return render(request,"Shopping Cart.html")