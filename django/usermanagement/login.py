import	os

from	django.contrib.auth.models	import User
from	django.contrib.auth			import login, authenticate, logout
from	django.contrib.auth.hashers	import check_password

from	page.models	import ZongUser
from	.utils		import get_image, CheckIfUser42Exist, get_defaultImg

def register42(request, locationInfo, username, password, imag, tokens):
	if not User.objects.filter(username=f"{username}").exists():
		new_user = User.objects.create_user(username=username, password=password)
		login(request, new_user)
		user = ZongUser(location=locationInfo, username=username, online=True, is42User=True, token=tokens, img=imag, Alias=username)
		user.save()
		get_image(username)
		return 0
	else:
		user = User.objects.get(username=username)
		if not check_password(password, user.password):
			return 1
		user = authenticate(request, username=username, password=password)
		login(request, user)
		file_path = os.path.join('page/static/media/profile_images', f"{user.username}_profile_image.jpg")
		if not os.path.exists(file_path):
			get_image(username)
		user = ZongUser.objects.get(username=request.user.username)
		user.online = True
		user.token = tokens
		return 0


def handleRegister(request, username, password):
	if User.objects.filter(username=username).exists():
		return 1
	if CheckIfUser42Exist(username) == True:
		return 2
	new_user = User.objects.create_user(username=username, password=password)
	login(request, new_user)
	user = ZongUser(username=username, is42User=False, online=True, token='None', Alias=username)
	user.save()
	get_defaultImg(username) 
	return 0

def handleLogin(request, username, password):

	if User.objects.filter(username=username).exists():

		userdb = User.objects.get(username=username)
		if check_password(password, userdb.password):
			userdb = authenticate(request, username=username, password=password)
			login(request, userdb)
			file_path = os.path.join('page/static/media/profile_images', f"{username}_profile_image.jpg")
			if not os.path.exists(file_path):
				get_defaultImg(username)
			user = ZongUser.objects.get(username=request.user)
			user.online = True
			user.save()
			return 0
		else:
			return 1
	else:
		return 2
	
def handleLogout(request):
    if not request.user.is_anonymous:
        user = ZongUser.objects.get(username=request.user)
        user.token = None
        user.online = False
        logout(request)