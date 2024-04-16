import * as model from './model/model.js';

import { GAME_PREVIEWS } from './config.js';
import { API_42 } from './config.js';

import headerView from './views/HeaderView.js';
import routingView from './views/RoutingView.js';
import mainPageView from './views/MainPageView.js';
import gameView from './views/GameView.js';
import accountView from './views/AccountView.js';
import messagesView from './views/MessagesView.js';
import otherUsersView from './views/OtherUsersView.js';
import dashboardView from './views/DashboardView.js';
import securityView from './views/SecurityView.js';
import notFoundView from './views/NotFoundView.js';

const routes = [
	{ path: 404, view: notFoundView },
	{ path: "/", view: mainPageView },
	{ path: "/account", view: accountView },
	{ path: "/messages", view: messagesView },
	{ path: "/other-users", view: otherUsersView },
	{ path: "/dashboard", view: dashboardView },
	{ path: "/security", view: securityView },
];

const controlHeader = async function() {
	if (!model.state.sessionToken)
		await model.getSessionInfo();
	headerView.render(model.state.user);
}

const controlRouting = async function() {
	!model.state.sessionToken && await model.getSessionInfo();
	let view = routes.find(route => route.path === location.pathname)?.view;
	if (!view || (!model.state.user.isLogged && view !== mainPageView))
		view = notFoundView;
	view.render(model.state.user);
	if (view === mainPageView)
	{
		mainPageView.addHandlerSetDefault();
		mainPageView.addHandlerStartGame(controlStartGame);
	}
}

const controlStartGame = function(data) {
	console.log(data);
}

const startAnimation = function(game) {
	let lastTime = 0;
	let delta;

	const controlGame = function(event) {
		event.type === "keydown" && model.redirectGamePaddle(event.code);
		event.type === "keyup" && model.stopGamePaddle(event.code);
		event.type === "resize" && model.resizeGame();
	}

	const animation = function(time) {
		if (location.pathname !== "/practice" && location.pathname !== "/versus")
			return ;
		if (lastTime)
		{
			gameView.draw(model.state.game);
			delta = time - lastTime;
			model.updateGame(delta);
		}
		lastTime = time;
		requestAnimationFrame(animation);
	};
	gameView.addHandlerView(controlGame);
	gameView.render(model.state.game);
	game.canvas.domElement = document.querySelector("canvas");
	model.initGame(game);
	requestAnimationFrame(animation);
}

const controlAuth = async function(data) {
	try {
		data.action === "auth42" &&	window.location.replace(API_42);
		data.action === "logout" && await model.logOut();
		data.action === "signup" && await model.signUp(data);
		data.action === "login" && await model.logIn(data);

		history.pushState(null, null, "/");
		headerView.render(model.state.user);
		mainPageView.render(model.state.user);
	}
	catch (error) {
		console.log(error);
		headerView.toggleModal(error);
	}
}

const controlAccoutCustomization = async function(data) {
	console.log(data);
	try {
		await model.changeImage(data);
		accountView.render(model.state.user);
	}
	catch (error) {
		console.log(error);
		headerView.toggleModal(error);
	}
}

const init = function() {
	routingView.addHandlerRouting(controlRouting);
	headerView.addHandlerRender(controlHeader);
	headerView.addHandlerAuth(controlAuth);
	accountView.addHandlerCustomization(controlAccoutCustomization);
}

init();