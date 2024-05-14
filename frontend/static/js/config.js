import notFoundView from "/static/js/views/NotFoundView.js";
import mainPageView from "/static/js/views/MainPageView.js";
import accountView from "/static/js/views/AccountView.js";
import messagesView from "/static/js/views/MessagesView.js";
import otherUsersView from "/static/js/views/OtherUsersView.js";
import securityView from "/static/js/views/SecurityView.js";
import notAuthorizedView from "/static/js/views/NotAuthorizedView.js";

export const routes = {
	401: { view: notAuthorizedView, requiresAuth: false },
	404: { view: notFoundView, requiresAuth: false },
	"/": { view: mainPageView, requiresAuth: false },
	"/account": { view: accountView, requiresAuth: true },
	"/messages": { view: messagesView, requiresAuth: true },
	"/other-users": { view: otherUsersView, requiresAuth: true },
	"/security": { view: securityView, requiresAuth: true },
};

const IP = "localhost";

export const API_42 = `https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-c399b9fa903103a21669d5aed9d8776ce72c2cd87776cedcd04cae18bb5f32b5&redirect_uri=https%3A%2F%2F${IP}%3A8443%2Fuser%2FgetData&response_type=code`;
export const SIGNUP_URL = `https://${IP}:8443/user/register`;
export const LOGIN_URL = `https://${IP}:8443/user/authenticate`;
export const LOGOUT_URL = `https://${IP}:8443/user/logout`;
export const EDIT_ALIAS_URL = `https://${IP}:8443/user/updateAlias`;
export const EDIT_IMAGE_URL = `https://${IP}:8443/user/updateImage`;
export const ONLINE_URL = `https://${IP}:8443/user/getonline`;
export const GAME_URL = `https://${IP}:8443/game/savematch`;
export const USER_INFO_URL = `https://${IP}:8443/user/getUserData`;
export const ALL_USERS_URL = `https://${IP}:8443/user/getZongUsers`;
export const SAVE_EMAIL_URL = `https://${IP}:8443/2f/saveMail`; 
export const SEND_MAIL_URL = `https://${IP}:8443/2f/sendMail`;
export const VERIFY_CODE_URL = `https://${IP}:8443/2f/checkCode`;
export const DISABLE_2FA_URL = `https://${IP}:8443/2f/disablewTwof`;
export const ADD_FRIEND_URL = `https://${IP}:8443/user/addFriend`;
export const REMOVE_FRIEND_URL = `https://${IP}:8443/user/removeFriend`;

export const alertIcons = {
	primary: '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>',
	success: '<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>',
	warning: '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>',
	danger: '<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>',
}