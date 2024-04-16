import View from "./View.js";

class RoutingView extends View {

	constructor() {
		super();
	}

	addHandlerRouting(handler) {
		document.addEventListener("DOMContentLoaded", handler);
		window.addEventListener("popstate", handler);
		document.body.addEventListener("click", e => {
			const link = e.target.closest("[data-link]");
			if (!link)
				return ;
			e.preventDefault();
			history.pushState(null, null, link.href);
			handler();
		});
	}
};

export default new RoutingView();