import NavView from "./NavView.js"
import View from "./View.js";

class SecurityView extends View {

	constructor() {
		super();
		this._navView = new NavView("security");
	}

	_generateMarkup() {
		return `
			${this._navView._generateMarkup()}
			<div class="col-12 col-md-9 mt-5 ps-3">
				<h2 class="text-primary-emphasis">Two-Factor Authentication</h2>
				<p class="lead fst-italic">Two-Factor Authentication (2FA) provides an additional layer of security to help protect user accounts. With 2FA, the user passes through two layers of security when performing certain actions on the website, which you can customize. First the user logs in using their username and password, and then, they input a code provided through email, SMS, or an app on their phone. This additional level of security is nearly impossible to break through and, as a result, we highly recommend that all Cardmarket users enable 2FA.</p>
			</div>
		</div>`;
	}
};

export default new SecurityView();