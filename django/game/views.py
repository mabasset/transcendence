import json
from django.http import JsonResponse
from django.utils.timezone import now
from .models import Match
from page.models import ZongUser

def showWinner(request):
	if request.method == 'POST':
		data = json.loads(request.body)
		print (data)
		winner = data.get('winner')
		s1 = data.get('swinner')
		loser = data.get('loser')
		s2 = data.get('swinner')
		print(winner)
		print(loser)
		winner = ZongUser.objects.get(username=winner)
		loser = ZongUser.objects.get(username=loser)
		match = Match.objects.create(winner=winner, loser=loser, date=now(), score=f'{s1} : {s2}')
		print(match)
		match.save()
		return JsonResponse({'mess': 'tuttoko'})
	
