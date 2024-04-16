import	json, os, requests, time
from	django.http				import JsonResponse, HttpResponseForbidden, HttpResponse
from	django.middleware.csrf	import get_token
from	django.shortcuts		import redirect
from	django.core.files.base	import ContentFile

from	.utils		import getToken
from	.login		import handleLogin, handleRegister, handleLogout, register42
from	page.models	import ZongUser, CaricaImmagineForm

# Create your views here.
def getSessionToken(request):
	if request.method == 'GET':
		csrf_token = get_token(request)
		if not request.user.is_anonymous:
			return JsonResponse({'tokencsrf': csrf_token, 'IsLogged':True})
		else:
			return JsonResponse({'tokencsrf': csrf_token, 'IsLogged':False})
	else:
		return HttpResponseForbidden()

def register(request):
	if request.method == 'POST':
		json_data = json.loads(request.body)
		caller = json_data.get('Caller')
		if caller != 'ZONGFRONTEND':
			return HttpResponseForbidden()
		
		username = json_data.get('username')
		password = json_data.get('password')
		
		res = handleRegister(request, username, password)
		if res == 0:
			return JsonResponse({'Error': 'NoError'})
		elif res == 1:
			return JsonResponse({'Error': 'Username giá presente'})
		elif res == 2:
			return JsonResponse({'Error': 'Username non consentito'})
	else:
		return HttpResponseForbidden()

def authenticate(request):
	if request.method == 'POST':
		json_data = json.loads(request.body)
		caller = json_data.get('Caller')
		if caller != 'ZONGFRONTEND':
			return HttpResponseForbidden()

		username = json_data.get('username')
		password = json_data.get('password')

		res = handleLogin(request, username, password)

		if res == 0:
			return JsonResponse({'Error': 'NoError'})
		elif res == 1:
			return JsonResponse({'Error': 'Password Sbagliata'})
		elif res == 2:
			return JsonResponse({'Error': 'Utente non registrato'})
	else:
			return HttpResponseForbidden()

def getData(request):

	error =request.GET.get("error")
	code =request.GET.get("code")

	if error:
		return HttpResponse("Errore sconosciuto. Contatta l'amministratore del sistema.", status=500)
	else :
		url = "https://api.intra.42.fr/v2/me"
		token = getToken(code)
		if token == None:
			return HttpResponse("Auth42 ha ritornato un errore nell'acquisizione del token.", status=500)
		
		headers = {
		    "Authorization": f"Bearer {token}"
		}
		response = requests.get(url, headers=headers)
		responses = response.json()
		if response.status_code == 200:
			register42(request, responses['location'], responses['login'], "42DefaultPassword", responses['image']['versions']['large'], token)
			return redirect("https://localhost")
		else:
			return HttpResponse("Auth42 ha ritornato un errore.", status=500)

def logout(request):
	if request.method == 'POST':
		json_data = json.loads(request.body)
		caller = json_data.get('Caller')
		if caller != 'ZONGFRONTEND':
			return HttpResponseForbidden()
		
		handleLogout(request)
		return JsonResponse({'Error': 'NoError'})
	else:
		return HttpResponseForbidden()

def changeAlias(request):
	if request.method == 'POST':
		json_data = json.loads(request.body)
		caller = json_data.get('Caller')
		if caller != 'ZONGFRONTEND':
			return HttpResponseForbidden()
		
		newAlias = json_data.get('Alias')
		user = ZongUser.objects.get(username=request.user.username)

		user.Alias = newAlias
		user.save()
		return JsonResponse({'Error': 'NoError', 'newAlias': user.Alias})
	else:
		return HttpResponseForbidden()

def getUserData(request):
	if request.method == 'POST':
		json_data = json.loads(request.body)
		caller = json_data.get('Caller')
		if caller != 'ZONGFRONTEND':
			return HttpResponseForbidden()
		
		user = ZongUser.objects.get(username=request.user.username)
		usn = request.user.username
			
		jsonBody = {
			'Error':'No error',
			'User':usn,
			'Alias':user.Alias,
			'is42User':user.is42User,
			'game_total':user.game_total,
			'game_won':user.game_won
		}
		return JsonResponse(jsonBody)
	else:
		return HttpResponseForbidden()

def changeImage(request):
	if request.method == 'POST':
		caller = request.POST.get('Caller')
		if caller != 'ZONGFRONTEND':
			return HttpResponseForbidden()
		
		image_file = request.FILES['Image']
		file_path = os.path.join('page/static/media/profile_images', f"{request.user.username}_profile_image.jpg")
		if os.path.exists(file_path):
			os.remove(file_path)

		user = ZongUser.objects.get(username=request.user.username)
		user.img.save(f"{user.username}_profile_image.jpg", image_file, save=True)
		user.save()
		return JsonResponse({'Error': 'NoError'})
	else:
		return HttpResponseForbidden()
