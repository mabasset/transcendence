from django.contrib import admin
from .models import ZongUser

class ZongUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'online', 'is42User', 'location', 'Alias', 'game_total', 'game_won', 'img']
    list_filter = ['online', 'is42User']
    search_fields = ['username', 'Alias']

admin.site.register(ZongUser, ZongUserAdmin)