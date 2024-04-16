export const API_42 = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-c399b9fa903103a21669d5aed9d8776ce72c2cd87776cedcd04cae18bb5f32b5&redirect_uri=https%3A%2F%2Flocalhost%3A443%2Fuser%2FgetData&response_type=code";
export const SIGNUP_URL = "https://localhost/user/register";
export const LOGIN_URL = "https://localhost/user/authenticate";
export const LOGOUT_URL = "https://localhost/user/logout";
export const USER_INFO_URL = "https://localhost/user/getUserData";
export const TOKEN_URL = "https://localhost/user/getToken";
export const ALIAS_URL = "https://localhost/user/updateAlias"
export const IMAGE_URL = "https://localhost/user/updateImage"
export const ONLINE_URL = "https://localhost/user/getonline"
export const GAME_URL = "https://localhost/game/savematch"


export const GAME_PREVIEWS = [
	{
		board: { color: "black", stroke: { color: "white", }, },
		ball: { color: "white", size: 2.5, speed: 0.075, },
		player1: { color: "white", size: 10, speed: 0.05, },
		player2: { color: "white", size: 10, speed: 0.05, },
	},
	{
		board: { color: "DarkSlateGrey", stroke: { color: "white", }, },
		ball: { color: "LightCoral", size: 2.5, speed: 0.075, },
		player1: { color: "LightCoral", size: 10, speed: 0.05, },
		player2: { color: "LightCoral", size: 10, speed: 0.05, },
	},
	{
		board: { color: "DarkRed", stroke: { color: "white", }, },
		ball: { color: "DarkTurquoise", size: 2.5, speed: 0.075, },
		player1: { color: "DarkTurquoise", size: 10, speed: 0.05, },
		player2: { color: "DarkTurquoise", size: 10, speed: 0.05, },
	},
];
