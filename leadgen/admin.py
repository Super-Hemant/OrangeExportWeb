from django.contrib import admin

# Register your models here.
from .models import Lead

#admin.site.register(Lead)



@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'email', 'phone', 'category', 'status', 'created_at')