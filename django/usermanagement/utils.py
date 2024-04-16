import	requests
import	os
from	django.core.files.base		import ContentFile

from	page.models	import ZongUser

def get_defaultImg(un):
    user = ZongUser.objects.get(username=un)
    local_file_path = 'page/static/images/profile_image.png'
    if os.path.isfile(local_file_path):
        with open(local_file_path, 'rb') as f:
            file_content = f.read()
    user.img.save(f"{user.username}_profile_image.jpg", ContentFile(file_content), save=True)
    user.save()

def get_image(un):
    user = ZongUser.objects.get(username=un)
    headers = {
        "Authorization": f"Bearer {user.token}"
    }
    response = requests.get(user.img, headers=headers)
    if response.status_code == 200:
        file_path = os.path.join('page/static/media/profile_images', f"{user.username}_profile_image.jpg")
        if os.path.exists(file_path):
            os.remove(file_path)
        user.img.save(f"{user.username}_profile_image.jpg", ContentFile(response.content), save=True)
        user.save()
    else:
        get_defaultImg(un)

def getToken(code):
    client_id = "u-s4t2ud-c399b9fa903103a21669d5aed9d8776ce72c2cd87776cedcd04cae18bb5f32b5"
    client_secret = "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"
    url = "https://api.intra.42.fr/oauth/token"
    payload = {
        "grant_type": "authorization_code",
        "client_id": client_id,
        "client_secret": client_secret,
        "code": code,
        "redirect_uri": "https://localhost:4343/user/getData"
    }   
    response = requests.post(url, data=payload)
    if response.status_code == 200:
        data = response.json()
        access_token = data["access_token"]
        return access_token
    else:
        return None
    
def getDefaultToken():
    client_id = "u-s4t2ud-c399b9fa903103a21669d5aed9d8776ce72c2cd87776cedcd04cae18bb5f32b5"
    client_secret = "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"
    url = "https://api.intra.42.fr/oauth/token"
    payload = {
        "grant_type": "client_credentials",
        "client_id": client_id,
        "client_secret": client_secret,
    }
    response = requests.post(url, data=payload)
    if response.status_code == 200:
        data = response.json()
        access_token = data["access_token"]
        return access_token
    else:
    	return None
    
def CheckIfUser42Exist(username):
    url = f"https://api.intra.42.fr/v2/users?filter[login]={username}"
    access_token = getDefaultToken()
    headers = {
    	"Authorization": f"Bearer {access_token}"
    }
    response = requests.get(url, headers=headers)
    responses = response.json()
    if response.status_code == 200 and responses:
        return True
    else:
        return False