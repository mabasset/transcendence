from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from page.models import ZongUser

class Match(models.Model):
    id = models.AutoField(primary_key=True)
    loser = models.ForeignKey(ZongUser, on_delete=models.CASCADE, related_name='loser', null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True, verbose_name="Date of the match")
    score = models.CharField(max_length=10, default='0:0')
    winner = models.ForeignKey(ZongUser, on_delete=models.CASCADE, related_name='winner')

    def __str__(self):
        #return f'p1:{self.p1} VS p2:{self.p2}, id:{self.id}, score:{self.score}, winner:{self.winner}, data:{self.date}'
        return f'id: {self.id}, Winner: {self.winner}'
    

