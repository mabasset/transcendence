from	django.http				import JsonResponse, HttpResponseForbidden, HttpResponse
from page.models import ZongUser

def getonline(request):
	users = ZongUser.objects.filter(online=True).exclude(username=request.user)
	names = []
	for user in users:
		names.append(user.username)
	return JsonResponse({'online':names})