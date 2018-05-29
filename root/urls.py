from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.shortcuts import render
from django.conf import settings
from django.views.generic import TemplateView

from calc.views import CalcView


def app(request):
    return render(request, 'frontend/index.html')


urlpatterns = []

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_URL)

urlpatterns += [
    url(r'^admin/', admin.site.urls),
    url(r'^calc/?$', CalcView.as_view(), name="calc"),
    url(r'^$', TemplateView.as_view(template_name="frontend/index.html"))
    # url(r'^$', app, name='app'),
]
