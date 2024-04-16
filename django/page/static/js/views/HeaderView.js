import View from "./View.js";
import Modal from '/static/bootstrap-5.3.3/js/src/modal.js';

class HeaderView extends View {

	constructor() {
		super();
		this._parentElement = document.querySelector("header");
	}

	_generateMarkup() {
		return `
			<nav class="container-fluid flex-nowrap px-4" aria-label="Main navigation">
				<div class="pe-4">
					<a id="home" href="/" tabindex="1" role="button" class="nav-item fs-3 link-body-emphasis text-decoration-none" data-link data-offcanvas-toggler>ZONG</a>
				</div>
				<div class="d-flex align-items-center">
					<div class="d-none ${this._data.isLogged ? "" : "d-lg-flex"} align-items-center pe-2">
						<form class="d-flex align-items-center pe-2">
							<div class="pe-2 position-relative">
								<input type="text" name="username" placeholder="Username" tabindex="2" title="Insert your username" class="form-control" autocomplete="off" required>
								<div class="invalid-tooltip">
									Please type a valid username.
								</div>
							</div>
							<div class="pe-2 position-relative">
								<input type="password" name="password" placeholder="Password" tabindex="3" title="Insert your password" class="form-control" required>
								<div class="invalid-tooltip">
									Please type a valid password.
								</div>
							</div>
							<input type="submit" value="Log In" title="Click to log in" tabindex="4" class="btn btn-outline-primary" data-auth="login">
							<input type="submit" value="Sign Up" title="Click to sign up" tabindex="5" class="btn btn-outline-primary" data-auth="signup">
						</form>
						<div>
							<button tabindex="6" title="Click to use 42API" class="btn btn-primary" data-auth="auth42">Auth.42</button>
						</div>
					</div>
					<button tabindex="7" class="navbar-toggler" type="button" data-offcanvas-toggler aria-controls="offcanvasNavbar" aria-label="Toggle Navbar">
						<span class="navbar-toggler-icon"></span>
					</button>
				</div>
			</nav>
			<div id="offcanvasNavbar" class="offcanvas offcanvas-end fs-3 px-3" style="top: 4rem; transition: all 0.2s ease-in-out; z-index:0">
				<div id="auths-offcanvas" class="${this._data.isLogged ? "d-none" : ""} d-lg-none">
					<form action="" class="auth-form mt-3 mb-2">
						<section class="form-group mb-3">
							<div class="input-group">
								<span class="input-group-text px-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
										<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
									</svg>
								</span>
								<input type="text" name="username" placeholder="Username" tabindex="1" title="Insert your Username" class="form-control" autocomplete="off" required>
								<div class="invalid-feedback">
									Please type a valid username.
								</div>
							</div>
						</section>
						<section class="form-group mb-3">
							<div class="input-group">
								<span class="input-group-text px-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
										<path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
									</svg>
								</span>
								<input type="password" name="password" placeholder="Password" tabindex="2" title="Insert your Password" class="form-control" required>
								<div class="invalid-feedback">
									Please type a valid password.
								</div>
							</div>
						</section>
						<input type="submit" value="Sign Up" title="Click to sign up" tabindex="3" class="btn btn-outline-primary w-100" data-auth="signup">
						<input type="submit" value="Log In" title="Click to log in" tabindex="4" class="btn btn-outline-primary w-100" data-auth="login">
						</form>
					<button tabindex="4" title="Click to use 42API" class="btn btn-primary w-100" data-auth="auth42">Auth.42</button>
					<hr>
				</div>
				<ul id="navlist-views" class="${this._data.isLogged ? "" : "d-none"} navbar-nav navbar-list text-uppercase text-center">
					<li class="nav-item">
						<a href="./account" data-link data-offcanvas-toggler class="nav-link fs-5">Account</a>
					</li>
					<li class="nav-item border-top">
						<a href="/dashboard" data-link data-offcanvas-toggler class="nav-link fs-5">Dashboard</a>
					</li>
					<li class="nav-item border-top">
						<a href="./other-users" data-link data-offcanvas-toggler class="nav-link fs-5">Other Users</a>
					</li>
					<li class="nav-item border-top">
						<a href="./messages" data-link data-offcanvas-toggler class="nav-link fs-5">Messages</a>
					</li>
					</li>
					<li class="nav-item border-top">
						<a href="/security" data-link data-offcanvas-toggler class="nav-link fs-5">Security</a>
					</li>
					<li class="nav-item border-top border-bottom">
						<a href="/" class="nav-link fs-5" data-offcanvas-toggler data-auth="logout">Log out</a>
					</li>
				</ul>
				<div class="dropdown text-center">
					<a href="#" data-bs-toggle="dropdown" role="button" class="nav-link dropdown-toggle text-nowrap text-uppercase fs-5">
						<img src="./static/images/united-kingdom.svg" alt="mdo" width="16" height="16" class="me-2">
						<span>English</span>
					</a>
					<ul class="dropdown-menu w-100 text-center">
						<li><h6 class="d-none d-lg-block dropdown-header dropdown-item">Choose a language</h6></li>
						<li>
							<a href="/de/Magic" title="Italiano" rel="nofollow" class="dropdown-item text-uppercase hvr-sweep-to-right">
								<img src="./static/images/italy.svg" alt="mdo" width="16" height="16" class="me-2">
								<span>Italiano</span>
							</a>
						</li>
						<li>
							<a href="/fr/Magic" title="Français" rel="nofollow" class="dropdown-item text-uppercase hvr-sweep-to-right">
								<img src="./static/images/france.svg" alt="mdo" width="16" height="16" class="me-2">
								<span>Français</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		`;
	}

	toggleModal(error) {
		document.querySelector(".modal-body").innerHTML = error;
		var myModal = new Modal(document.querySelector("#errorModal"));
		myModal.show();
	}

	addHandlerRender(handler) {
		document.addEventListener("DOMContentLoaded", handler, { once: true });
		document.addEventListener('click', e => {
			const button = e.target.closest("[data-offcanvas-toggler]");
			const backdrop = document.querySelector(".offcanvas-backdrop");
			const offcanvas = document.querySelector("#offcanvasNavbar");
			if (!button || button.id === "home" && !offcanvas.classList.contains("show"))
				return ;
			backdrop.classList.toggle('d-none');
			offcanvas.classList.toggle('show');
		});
	}

	addHandlerAuth(handler) {
		document.addEventListener('click', e => {
			const input = e.target;
			if (!input.hasAttribute("data-auth"))
				return ;
			e.preventDefault();
			const form = input.closest("form");
			const data = form ? Object.fromEntries(new FormData(form)) : {};
			form?.classList.add('was-validated');
			data.action = input.dataset.auth;
			console.log(data);
			(!form || form?.checkValidity()) && handler(data);
		});
	}
};

export default new HeaderView();