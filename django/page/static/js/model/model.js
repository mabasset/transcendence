import Board from "./game/Board.js";
import Ball from "./game/Ball.js";
import Paddle from "./game/Paddle.js";
import { GAME_URL, ONLINE_URL, IMAGE_URL, ALIAS_URL, LOGIN_URL, LOGOUT_URL, SIGNUP_URL, TOKEN_URL, USER_INFO_URL } from "../config.js"

export const state = {
	sessionToken: undefined,
	user: {
		isLogged: false,
		username: undefined,
		alias: undefined,
		totalGames: undefined,
		wonGames: undefined, 
	},
	game: {
		board: new Board(),
		ball: new Ball(),
		player1: new Paddle("left"),
		player2: new Paddle("right"),
	},
};

export const initGame = function(info) {
	state.game.board.init(info.board);
	state.game.ball.init(state.game.board, info.ball);
	state.game.player1.init(state.game.board, info.player1);
	state.game.player2.init(state.game.board, info.player2);
}

export const resizeGame = function() {
	state.game.board.resize();
	state.game.ball.resize(state.game.board);
	state.game.player1.resize(state.game.board);
	state.game.player2.resize(state.game.board);
}

const resetGame = function() {
	state.game.ball.reset(state.game.board);
	state.game.player1.reset(state.game.board);
	state.game.player2.reset(state.game.board);
}

const isCollision = function(ball, paddle) {
	if (paddle.side === "left")
	{
		if (ball.x - ball.radius <= paddle.x + paddle.width &&
			(ball.y - (ball.radius / 2) <= paddle.y + paddle.height && ball.y + (ball.radius / 2) >= paddle.y))
			return true;
	}
	else
	{
		if (ball.x + ball.radius >= paddle.x &&
			(ball.y - (ball.radius / 2) <= paddle.y + paddle.height && ball.y + (ball.radius / 2) >= paddle.y))
			return true;
	}
	return false;
}

export const updateGame = function(delta) {
	const board = state.game.board;
	const ball = state.game.ball;
	const paddle1 = state.game.player1;
	const paddle2 = state.game.player2;
	
	if (ball.y - ball.radius <= 0)
	{
		ball.y = ball.radius;
		ball.direction.y *= -1;
	}
	if (ball.y + ball.radius >= board.height)
	{
		ball.y = board.height - ball.radius;
		ball.direction.y *= -1;
	}
	if (isCollision(ball, paddle1))
	{
		let calc = ball.y - paddle1.y;
		if (calc < 0)
			calc = 0;
		if (calc > paddle1.heigh)
			calc = paddle1.heigh;
		console.log(calc);
		console.log(paddle1.height / 2);
		const heading = calc < paddle1.height / 2 ? (1.6 + 0.4 * calc / (paddle1.height / 2)) * Math.PI :
			(0.4 * ((calc - paddle1.height / 2) / (paddle1.height / 2))) * Math.PI;
		ball.direction = {x: Math.cos(heading), y: Math.sin(heading)};
	}
	if (isCollision(ball, paddle2))
	{
		let calc = ball.y - paddle2.y;
		if (calc < 0)
			calc = 0;
		if (calc > paddle2.heigh)
			calc = paddle2.heigh;
		const heading = calc < paddle2.height / 2 ? (1.4 - 0.4 * calc / (paddle2.height / 2)) * Math.PI :
			(1 - (0.4 * ((calc - paddle2.height / 2) / (paddle1.height / 2)))) * Math.PI;
		ball.direction = {x: Math.cos(heading), y: Math.sin(heading)};
	}

	const winner = ball.x - ball.radius <= 0 ? paddle2 :
		ball.x + ball.radius >= board.width ? paddle1 : undefined;
	if (winner)
	{
		winner.score.value += 1;
		resetGame();
	}

	if (paddle1.y <= 0 && paddle1.direction.y === -1)
		paddle1.direction.y = 0;
	if (paddle1.y + paddle1.height >= board.height && paddle1.direction.y === 1)
		paddle1.direction.y = 0;
	if (paddle2.y <= 0 && paddle2.direction.y === -1)
		paddle2.direction.y = 0;
	if (paddle2.y + paddle2.height >= board.height && paddle2.direction.y === 1)
		paddle2.direction.y = 0;

	ball.move(delta);
	paddle1.move(delta);
	paddle2.move(delta);
}

export const redirectGamePaddle = function(code) {
	if (code === "KeyW")
		state.game.player1.direction.y = -1;
	else if (code === "KeyS")
		state.game.player1.direction.y = 1;
	else if (code === "ArrowUp")
		state.game.player2.direction.y = -1;
	else if (code === "ArrowDown")
		state.game.player2.direction.y = 1;
}

export const stopGamePaddle = function(code) {
	const p1direction = state.game.player1.direction.y
	const p2direction = state.game.player2.direction.y

	if (code === "KeyW" && p1direction === -1)
		state.game.player1.direction.y = 0;
	else if (code === "KeyS" && p1direction === 1)
		state.game.player1.direction.y = 0;
	else if (code === "ArrowUp" && p2direction === -1)
		state.game.player2.direction.y = 0;
	else if (code === "ArrowDown" && p2direction === 1)
		state.game.player2.direction.y = 0;
}

export const getSessionInfo = async function() {
	let response = await fetch(TOKEN_URL);
	let json = await response.json();
	state.sessionToken = json.tokencsrf;
	if (!json.IsLogged)
		return ;
	const request = {
		method: "POST",
		body: JSON.stringify({
			Caller: 'ZONGFRONTEND',
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"X-CSRFToken": state.sessionToken,
		}
	};
	response = await fetch(USER_INFO_URL, request);
	json = await response.json();
	state.user.isLogged = true;
	state.user.username = json.User;
	state.user.alias = json.Alias;
	state.user.totalGames = json.game_total;
	state.user.wonGames = json.game_won;
}

const _clearSession = function() {
	state.user.isLogged = false;
	state.user.username = undefined;
	state.user.alias = undefined;
	state.user.totalGames = undefined;
	state.user.wonGames = undefined; 
};

export const logOut = async function() {
	const request = {
		method: "POST",
		body: JSON.stringify({
			Caller: 'ZONGFRONTEND',
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"X-CSRFToken": state.sessionToken,
		}
	};
	await fetch(LOGOUT_URL, request);
	_clearSession();
}

export const signUp = async function(data) {
	let request = {
		method: "POST",
		body: JSON.stringify({
			Caller: 'ZONGFRONTEND',
			username: data.username,
			password: data.password,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"X-CSRFToken": state.sessionToken,
		}
	};
	let response = await fetch(SIGNUP_URL, request);
	let json = await response.json();
	if (json.Error !== "NoError")
		throw new Error(json.Error);
	response = await fetch(TOKEN_URL);
	json = await response.json();
	state.sessionToken = json.tokencsrf;
	const request2 = {
		method: "POST",
		body: JSON.stringify({
			Caller: 'ZONGFRONTEND',
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"X-CSRFToken": state.sessionToken,
		}
	};
	response = await fetch(USER_INFO_URL, request2);
	json = await response.json();
	state.user.isLogged = true;
	state.user.username = json.User;
	state.user.alias = json.Alias;
	state.user.totalGames = json.game_total;
	state.user.wonGames = json.game_won;
}

export const logIn = async function(data) {
	const request = {
		method: "POST",
		body: JSON.stringify({
			Caller: 'ZONGFRONTEND',
			username: data.username,
			password: data.password,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"X-CSRFToken": state.sessionToken,
		}
	};
	let response = await fetch(LOGIN_URL, request);
	let json = await response.json();
	console.log(json.Error);
	if (json.Error !== "NoError")
		throw new Error(json.Error);
	response = await fetch(TOKEN_URL);
	json = await response.json();
	state.sessionToken = json.tokencsrf;
	const request2 = {
		method: "POST",
		body: JSON.stringify({
			Caller: 'ZONGFRONTEND',
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"X-CSRFToken": state.sessionToken,
		}
	};
	response = await fetch(USER_INFO_URL, request2);
	json = await response.json();
	state.user.isLogged = true;
	state.user.username = json.User;
	state.user.alias = json.Alias;
	state.user.totalGames = json.game_total;
	state.user.wonGames = json.game_won;
}

export const changeAlias = async function(alias) {
	const request = {
		method: "POST",
		body: JSON.stringify({
			Caller: 'ZONGFRONTEND',
			Alias: alias,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"X-CSRFToken": state.sessionToken,
		}
	};
	const response = await fetch(ALIAS_URL, request);
	const json = await response.json();
	if (json.Error === "NoError")
		state.user.alias = json.newAlias;
}

export const changeImage = async function(image) {

	const formData = new FormData();
	formData.append('Caller', 'ZONGFRONTEND');
	formData.append('Image', image); // imageFile dovrebbe essere il file che desideri aggiungere

	const request = {
    	method: "POST",
    	body: formData,
    	headers: {
        "X-CSRFToken": state.sessionToken, // Se necessario, puoi mantenere l'header CSRFToken
    	}
	};
	const response = await fetch(IMAGE_URL, request);
	const json = await response.json();
	if (json.Error !== "NoError")
		throw new Error(json.error);
}

export const getOnlinePlayers = async function() {
	const request = {
		method: "GET",
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"X-CSRFToken": state.sessionToken,
		}
	};
	const response = await fetch(ONLINE_URL, request);
	const json = await response.json();
	console.log(json);
}

export const sendMatchInfo = async function(data) {
	const request = {
		method: "POST",
		body: JSON.stringify({
			Caller: 'ZONGFRONTEND',
			winner: data.winner.username,
			loser: data.loser.username,
			swinner: data.winner.score,
			sloser: data.loser.score,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"X-CSRFToken": state.sessionToken,
		}
	};
	const response = await fetch(GAME_URL, request);
	const json = await response.json();
	console.log(json);
}


//const init = function() {
//	// state.user ??= JSON.parse(localStorage.getItem('user'));
//	getSessionInfo();
//}
//
//init();