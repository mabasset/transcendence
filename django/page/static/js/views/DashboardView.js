import NavView from "./NavView.js"
import View from "./View.js";

class DashboardView extends View {

	constructor() {
		super();
		this._navView = new NavView("dashboard");
	}

	_generateMarkup() {
		return `
			${this._navView._generateMarkup()}
			<div class="col-12 col-md-9 mt-5 ps-3">
				<h2 class="pt-2 text-primary-emphasis">User summary</h2>
				<p class="fst-italic">Personal statistics, game sessions and performance metrics.</p>
				<section class="d-flex flex-column align-items-center w-100 mt-5 border-bottom pb-4">
					<div class="container row align-items-baseline">
						<h3 class="col-4 text-end text-uppercase mb-0">level :</h3>
						<span class="col-1"></span>
						<span id="level" class="col-1 text-center fs-3 border border-3 border-primary rounded-pill">42</span>
						<h6 class="col-3 text-end text-uppercase mb-0"> with a with rate of</h6>
						<span id="win-rate" class="col-1 fs-3 border border-3 border-primary rounded-pill">24%</span>
					</div>
				</section>
				<h5 class="pt-2 text-primary-emphasis pt-3 text-center">Overview</h5>
				<p class="fst-italic text-center">subscription date: <span>02/11/2024</span>.</p>
			</div>
		</div>`;
	}
};

export default new DashboardView();