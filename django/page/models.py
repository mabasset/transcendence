from    django.db   import models
from    django      import forms

class ZongUser(models.Model):
    username = models.CharField(max_length=50, unique=True, primary_key=True)
    token = models.CharField(blank=True)
    online = models.BooleanField(default=False)
    is42User = models.BooleanField(null=True)
    location = models.CharField(max_length=50, blank=True, null=True)
    Alias = models.CharField(max_length=50, blank=True)
    game_total = models.IntegerField(default=0)
    game_won = models.IntegerField(default=0)
    img = models.ImageField(upload_to='profile_images/', blank=True, null=True)

    def __str__(self):
        return f'{self.username}'
    
class CaricaImmagineForm(forms.ModelForm):
    class Meta:
        model = ZongUser
        fields = ['img']