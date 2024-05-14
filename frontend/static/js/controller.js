import * as model from "/static/js/model/model.js";

import { routes, API_42 } from "/static/js/config.js";

import headerView from "/static/js/views/HeaderView.js";
import footerView from "/static/js/views/FooterView.js";
import accountView from "/static/js/views/AccountView.js";
import mainPageView from "/static/js/views/MainPageView.js";
import securityView from "/static/js/views/SecurityView.js";
import twoFactorAuthView from "/static/js/views/TwoFactorAuthView.js";
import alertView from "/static/js/views/AlertView.js";
import otherUsersView from "./views/OtherUsersView.js";

const controlGameCustomization = async (section, action) => {
	switch (section) {
		case "game-mode":
			model.setGameMode(action);
			break;
		case "game-speed-level":
			model.setGameSpeedLevel(action);
			break;
		case "game-time-limit":
			model.setGameTimeLimit(action);
			break;
		case "game-map-level":
			model.setGameMapLevel(action);
			break;
		case "game-power-ups":
			model.setGamePowerUps();
			break;
		case "game-queue":
			const friend = await mainPageView.addHandlerPlayers();
			model.setGameQueue(action, friend);
			break;
		case "game-customization":
			model.resetGameCustomization();
			break;
		default:
			break;
	}
	mainPageView.render(model.state);
}

const controlAccoutCustomization = async (action, data) => {
	try {
		switch (action) {
			case "save-img":
				await model.changeImage(data);
				break;
			case "save-alias":
				await model.changeAlias(data);
				break;
			case "save-email":
				await model.changeEmail(data);
				break;
			default:
				break;
		}
	}
	catch (error) {
		alertView.render({ message: error.message, type: "danger" });
	}
	renderView();
}

const renderView = async () => {
	try {
		await model.getUserInfo();
		model.state.user && await model.getOtherUsers();
	}
	catch (error) {
		console.log(error.message);
		if (error.cause.status !== 401)
			alertView.render({ message: error.message, type: "danger" });
		if (error.cause.status === 401 && error.message !== "Unauthorized")
		{
			twoFactorAuthView.render(model.state);
			model.sendTwoFactorAuthEmail();
			return ;
		}
	}
	let route = routes[location.pathname] || routes[404];
	if (route.requiresAuth && !model.state.user)
		route = routes[401];
	headerView.render(model.state);
	route.view.render(model.state);
	footerView.render();
};

const handleLinkClick = (e) => {
	const link = e.target.closest("[data-link]");
	if (!link) return;
	e.preventDefault();
	history.pushState(null, null, link.href);
	renderView();
};

const controlAuth = async (action, data) => {
	try {
		switch (action) {
			case "auth42":
				window.location.replace(API_42);
				return ;
			case "logout":
				await model.logOut();
				break ;
			case "signup":
				await model.signUp(data);
				break ;
			case "login":
				await model.logIn(data);
				break ;
			default:
				break ;
		}
		history.pushState(null, null, "/");
		renderView();
	}
	catch (error) {
		alertView.render({ message: error.message, type: "danger" });
	}
}

const controlTwoFactorAuth = async (action, data) => {
	try {
		switch (action) {
			case "send-code":
				await model.sendTwoFactorAuthEmail();
				alertView.render({ message: "The code as been successfully sent", type: "success" });
				break ;
			case "disable":
				await model.disableTwoFactorAuth();
				renderView();
				break ;
			case "submit":
				await model.submitTwoFactorAuthCode(data);
				renderView();
				break ;
			default:
				break ;
		}
	}
	catch (error) {
		alertView.render({ message: error.message, type: "danger" });
	}
}

const controlStartGame = async () => {

}

const controlOtherUsers = async (action, data) => {
	try {
		switch (action) {
			case "add":
				await model.addFriend(data);
				break ;
			case "remove":
				await model.removeFriend(data);
				break ;
			default:
				break ;
		}
	}
	catch (error) {
		alertView.render({ message: error.message, type: "danger" });
	}
	renderView();
}

const init = () => {
	document.addEventListener("DOMContentLoaded", renderView);
	window.addEventListener("popstate", renderView);
	document.addEventListener("click", handleLinkClick);

	headerView.addHandlerAuth(controlAuth);
	mainPageView.addHandlerCustomization(controlGameCustomization);
	mainPageView.addHandlerStartGame(controlStartGame);
	accountView.addHandlerCustomization(controlAccoutCustomization);
	securityView.addHandlerTwoFactorAuth(controlTwoFactorAuth);
	otherUsersView.addHandler(controlOtherUsers);
};

init();
