from django.shortcuts import render, redirect, render_to_response
from django.template.context_processors import csrf
from .models import EventClass

####AUTHENTICATION METHODS

def login(request):
    c = {}
    c.update(csrf(request))
    return render(request, 'login.html', c)

def auth_login(request):

    username = request.POST.get('username')
    password = request.POST.get('password')
    user_info = request.POST

    instance = EventClass(user_info)
    user = instance.login_event()

    if user is not None:
        request.session['username'] = username
        request.session['password'] = password
        request.session['is_logged'] = True
        return redirect("users:index")
    else:
        return redirect("users:login")

def index(request):
    return render(request, "index.html")

def register(request):
    return render(request, "register.html")

def profile(request):
    user_content = {'username': request.session['username'],
                    'password': request.session['password'],
                    }
    return render(request, "profile.html", user_content)


