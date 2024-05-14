import NavView from "/static/js/views/NavView.js"
import View from "/static/js/views/View.js";

class DashboardView extends View {

	constructor() {
		super();
		this._navView = new NavView("Dashboard");
	}

	_generateMarkup() {
		return `
		<div class="container mt-3  pb-5">
			${this._navView._generateMarkup()}
				<div class="col-12 col-md-8 col-lg-9">
				</div>
			</div>
		</div>
		`;
	}
};

export default new DashboardView();