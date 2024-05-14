import View from "/static/js/views/View.js";
import { alertIcons } from "/static/js/config.js";

class AlertView extends View {

	constructor() {
		super();
		this._parentElement = document.getElementById("alertPlaceholder");
	}

	_generateMarkup() {
		const icon = alertIcons[this._data.type];
		const html = `
			<div class="alert alert-${this._data.type} d-flex align-items-center alert-dismissible" role="alert">
				<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="bi flex-shrink-0 me-3" viewBox="0 0 16 16">
					${icon}
				</svg>
				<span class="fw-bold">
					${this._data.message}
				</span>
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
		`
		return html;
	}
}

export default new AlertView();