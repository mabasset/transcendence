//import Board from "./game/Board.js";
//import Ball from "./game/Ball.js";
//import Paddle from "./game/Paddle.js";
import { EDIT_IMAGE_URL, EDIT_ALIAS_URL, LOGIN_URL, LOGOUT_URL, SIGNUP_URL, USER_INFO_URL, ALL_USERS_URL, SEND_MAIL_URL, SAVE_EMAIL_URL, VERIFY_CODE_URL, ADD_FRIEND_URL} from "/static/js/config.js"
import { getCookie } from "/static/js/helpers.js";

export const state = {
	chatSocket: undefined,
	user: undefined,
	chats: [
		{
			user: "fabio",
			messages: [
				{
					sender: "fabio",
					text: "ciao matteo",
					date: new Date(2024, 4, 29, 22, 48),
				},
				{
					sender: "matteo",
					text: "bella fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
					date: new Date(2024, 4, 29, 22, 50),
				},
			]
		},
		{
			user: "arianna",
			messages: [
				{
					sender: "matteo",
					text: "hello pappi",
					date: new Date(2029, 4, 4, 22, 48),
				}
			]
		}
	],
	allUsers: undefined,
	friends: [
		{
			username: "matteo",
			alias: "mabasset",
			online: true,
		},
		{
			username: "mepifano",
			alias: "aaa",
			online: true,
		},
	],
	game: {
		mode: "practice",
		speedLevel: 1,
		timeLimit: 1,
		mapLevel: 1,
		powerUps: "",
		queue: {
			player1: { username: "Guest", alias: "Guest" },
			player2: { username: "Ai", alias: "Ai" },
			player3: { username: undefined, alias: undefined },
			player4: { username: undefined, alias: undefined },
		}
		// board: new Board(),
		// ball: new Ball(),
		// player1: new Paddle("left"),
		// player2: new Paddle("right"),
	},
};

//export const initGame = (info) => {
//	state.game.board.init(info.board);
//	state.game.ball.init(state.game.board, info.ball);
//	state.game.player1.init(state.game.board, info.player1);
//	state.game.player2.init(state.game.board, info.player2);
//}
//
//export const resizeGame = function() {
//	state.game.board.resize();
//	state.game.ball.resize(state.game.board);
//	state.game.player1.resize(state.game.board);
//	state.game.player2.resize(state.game.board);
//}
//
//const resetGame = function() {
//	state.game.ball.reset(state.game.board);
//	state.game.player1.reset(state.game.board);
//	state.game.player2.reset(state.game.board);
//}
//
//const isCollision = function(ball, paddle) {
//	if (paddle.side === "left")
//	{
//		if (ball.x - ball.radius <= paddle.x + paddle.width &&
//			(ball.y - (ball.radius / 2) <= paddle.y + paddle.height && ball.y + (ball.radius / 2) >= paddle.y))
//			return true;
//	}
//	else
//	{
//		if (ball.x + ball.radius >= paddle.x &&
//			(ball.y - (ball.radius / 2) <= paddle.y + paddle.height && ball.y + (ball.radius / 2) >= paddle.y))
//			return true;
//	}
//	return false;
//}
//
//export const updateGame = function(delta) {
//	const board = state.game.board;
//	const ball = state.game.ball;
//	const paddle1 = state.game.player1;
//	const paddle2 = state.game.player2;
//	
//	if (ball.y - ball.radius <= 0)
//	{
//		ball.y = ball.radius;
//		ball.direction.y *= -1;
//	}
//	if (ball.y + ball.radius >= board.height)
//	{
//		ball.y = board.height - ball.radius;
//		ball.direction.y *= -1;
//	}
//	if (isCollision(ball, paddle1))
//	{
//		let calc = ball.y - paddle1.y;
//		if (calc < 0)
//			calc = 0;
//		if (calc > paddle1.heigh)
//			calc = paddle1.heigh;
//		console.log(calc);
//		console.log(paddle1.height / 2);
//		const heading = calc < paddle1.height / 2 ? (1.6 + 0.4 * calc / (paddle1.height / 2)) * Math.PI :
//			(0.4 * ((calc - paddle1.height / 2) / (paddle1.height / 2))) * Math.PI;
//		ball.direction = {x: Math.cos(heading), y: Math.sin(heading)};
//	}
//	if (isCollision(ball, paddle2))
//	{
//		let calc = ball.y - paddle2.y;
//		if (calc < 0)
//			calc = 0;
//		if (calc > paddle2.heigh)
//			calc = paddle2.heigh;
//		const heading = calc < paddle2.height / 2 ? (1.4 - 0.4 * calc / (paddle2.height / 2)) * Math.PI :
//			(1 - (0.4 * ((calc - paddle2.height / 2) / (paddle1.height / 2)))) * Math.PI;
//		ball.direction = {x: Math.cos(heading), y: Math.sin(heading)};
//	}
//
//	const winner = ball.x - ball.radius <= 0 ? paddle2 :
//		ball.x + ball.radius >= board.width ? paddle1 : undefined;
//	if (winner)
//	{
//		winner.score.value += 1;
//		resetGame();
//	}
//
//	if (paddle1.y <= 0 && paddle1.direction.y === -1)
//		paddle1.direction.y = 0;
//	if (paddle1.y + paddle1.height >= board.height && paddle1.direction.y === 1)
//		paddle1.direction.y = 0;
//	if (paddle2.y <= 0 && paddle2.direction.y === -1)
//		paddle2.direction.y = 0;
//	if (paddle2.y + paddle2.height >= board.height && paddle2.direction.y === 1)
//		paddle2.direction.y = 0;
//
//	ball.move(delta);
//	paddle1.move(delta);
//	paddle2.move(delta);
//}
//
//export const redirectGamePaddle = function(code) {
//	if (code === "KeyW")
//		state.game.player1.direction.y = -1;
//	else if (code === "KeyS")
//		state.game.player1.direction.y = 1;
//	else if (code === "ArrowUp")
//		state.game.player2.direction.y = -1;
//	else if (code === "ArrowDown")
//		state.game.player2.direction.y = 1;
//}
//
//export const stopGamePaddle = function(code) {
//	const p1direction = state.game.player1.direction.y
//	const p2direction = state.game.player2.direction.y
//
//	if (code === "KeyW" && p1direction === -1)
//		state.game.player1.direction.y = 0;
//	else if (code === "KeyS" && p1direction === 1)
//		state.game.player1.direction.y = 0;
//	else if (code === "ArrowUp" && p2direction === -1)
//		state.game.player2.direction.y = 0;
//	else if (code === "ArrowDown" && p2direction === 1)
//		state.game.player2.direction.y = 0;
//}
//
//export const getOnlinePlayers = async function() {
//	const request = {
//		method: "GET",
//		headers: {
//			"Content-type": "application/json; charset=UTF-8",
//			"X-CSRFToken": state.sessionToken,
//		}
//	};
//	const response = await fetch(ONLINE_URL, request);
//	const json = await response.json();
//	console.log(json);
//}
//
//export const sendMatchInfo = async function(data) {
//	const request = {
//		method: "POST",
//		body: JSON.stringify({
//			Caller: 'ZONGFRONTEND',
//			winner: data.winner.username,
//			loser: data.loser.username,
//			swinner: data.winner.score,
//			sloser: data.loser.score,
//		}),
//		headers: {
//			"Content-type": "application/json; charset=UTF-8",
//			"X-CSRFToken": state.sessionToken,
//		}
//	};
//	const response = await fetch(GAME_URL, request);
//	const json = await response.json();
//	console.log(json);
//}

// const sendRequest = async function(url, method, body) {
// 	// const cookie = document.cookie.split(";").find(cookie => cookie.trim().startsWith("csrftoken="));
// 	// if (!cookie) throw Error("CSRF token not found");
// 	// const csrfToken = cookie.substring("csrftoken=".length);
// 	// const headers = {
// 	// 	"X-CSRFToken": state.csrfToken,
// 	// };
// 	// console.log(state.csrfToken)
// 	// const options = {
// 	// 	method,
// 	// 	headers,
// 	// 	body,
// 	// };
// 	const response = await fetch(url, method);
// 	if (!response.ok)
// 		throw new Error(await response.text(), {cause: response});
// 	return response;
// }

export const setGameMode = async function (action) {
	if (action === "practice") {
		Object.keys(state.game.queue.player2).forEach(key => {
			state.game.queue.player2[key] = "Ai";
		});
		["player3", "player4"].forEach(player => {
			Object.keys(state.game.queue[player]).forEach(key => {
				state.game.queue[player][key] = undefined;
			});
		});
	}
	state.game.mode = action;
}

export const setGameSpeedLevel = async function (action) {
	action === "decrement" && state.game.speedLevel > 1 && --state.game.speedLevel;
	action === "increment" && state.game.speedLevel < 4 && ++state.game.speedLevel;
}

export const setGameTimeLimit = async function (action) {
	action === "decrement" && state.game.timeLimit > 1 && --state.game.timeLimit;
	action === "increment" && state.game.timeLimit < 4 && ++state.game.timeLimit;
}

export const setGameMapLevel = async function (action) {
	if (action === "prev")
		state.game.mapLevel = state.game.mapLevel === 1 ? state.game.mapLevel = 3 : --state.game.mapLevel;
	else
		state.game.mapLevel = state.game.mapLevel === 3 ? state.game.mapLevel = 1 : ++state.game.mapLevel;
}

export const setGamePowerUps = async function () {
	state.game.powerUps = state.game.powerUps === "" ? "checked" : "";
}

export const setGameQueue = async function (player, friend) {
	state.game.queue[player].username = state.friends[friend].username;
	state.game.queue[player].alias = state.friends[friend].alias;
}

export const resetGameCustomization = async function () {
	state.game.speedLevel = 1; 
	state.game.timeLimit = 1; 
	state.game.mapLevel = 1; 
	state.game.powerUps = ""; 
}

export const resetGameObject = async function () {
	state.game.mode = "practice";
	resetGameCustomization();
}

export const sendRequest = async (url, method, body) => {
	const headers = method === "POST" ?  { "X-CSRFToken": getCookie("csrftoken") } : {};
	const options = {
		method,
		headers,
		body,
	};
	const response = await fetch(url, options);
	if (!response.ok)
		throw new Error(await response.text(), {cause: response});
	return response;
}

export const getUserInfo = async () => {
	delete state.user;
	try {
		const response = await sendRequest(USER_INFO_URL, "GET");
		const json = await response.json();
		const { User: username, Alias: alias, game_total: gamesPlayed, game_won: gamesWon, email: email, isTwoFactorEnabled: twoFactorAuth, friends: friends } = json;
		const gamesLost = gamesPlayed - gamesWon;
		state.user = { username, alias, gamesPlayed, gamesWon, gamesLost, email, twoFactorAuth, friends };
		console.log(state.user);
	}
	catch (error) {
		throw error;
	}
}

export const getOtherUsers = async () => {
	state.allUsers = undefined;
	try {
		const response = await sendRequest(ALL_USERS_URL, "GET");
		const json = await response.json();
		state.allUsers = json;
	}
	catch(error) {
		console.log(error.message);
	}
}

export const logOut = async () => {
	await sendRequest(LOGOUT_URL, "POST");
	resetGameObject();
}

export const logIn = async (data) => {
	const requestBody = { username: data.username, password: data.password };
	await sendRequest(LOGIN_URL, "POST", JSON.stringify(requestBody));
}

export const signUp = async (data) => {
	const requestBody = { username: data.username, password: data.password };
	await sendRequest(SIGNUP_URL, "POST", JSON.stringify(requestBody));
}

export const changeImage = async (image) => {
	const formData = new FormData();
	formData.append('Image', image);
	await sendRequest(EDIT_IMAGE_URL, "POST", formData);
}

export const changeAlias = async (alias) => {
	const requestBody = { Alias: alias };
	await sendRequest(EDIT_ALIAS_URL, "POST", JSON.stringify(requestBody));
}

export const changeEmail = async (email) => {
	const requestBody = { "email": email };
	await sendRequest(SAVE_EMAIL_URL, "POST", JSON.stringify(requestBody));
}

export const sendTwoFactorAuthEmail = async () => {
	await sendRequest(SEND_MAIL_URL, "GET");
}

export const submitTwoFactorAuthCode = async (code) => {
	const requestBody = { "code": code };
	await sendRequest(VERIFY_CODE_URL, "POST", JSON.stringify(requestBody));
}

export const disableTwoFactorAuth = async () => {
	await sendRequest(DISABLE_2FA_URL, "POST");
}

export const addFriend = async (username) => {
	const requestBody = { "username": username };
	await sendRequest(ADD_FRIEND_URL, "POST", JSON.stringify(requestBody));
}

export const removeFriend = async (username) => {
	const requestBody = { "username": username };
	await sendRequest(ADD_FRIEND_URL, "POST", JSON.stringify(requestBody));
}

const init = () => {
	state.chatSocket = new WebSocket(
		'wss://'
		+ window.location.hostname
		+ ':8001/wss/chat/1/'
	);
	state.chatSocket.onopen = function(e) {
		//alert("[open] Connessione stabilita");
		//alert("Invio al server");
		chatSocket.send(JSON.stringify({
			'message': 'connect',
			'user': 'fabio',
		}));
	};
	state.chatSocket.onmessage = function(e) {
		console.log(e.data)
		const data = JSON.parse(e.data);
		console.log(data)
	};
}

init();