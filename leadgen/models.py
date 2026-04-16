from django.db import models
from django.utils import timezone
class Lead(models.Model):
    CATEGORY_CHOICES = [
        ('agri', 'Agricultural Products'),
        ('spices', 'Spices & Herbs'),
        ('auto', 'Auto Parts'),
    ]

    STATUS_CHOICES = [
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('closed', 'Closed'),
    ]

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    company = models.CharField(max_length=200, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=10, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    message = models.TextField()

    source = models.CharField(max_length=100, default="website")  # 🔥 important
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    created_at = models.DateTimeField( auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} - {self.email}"