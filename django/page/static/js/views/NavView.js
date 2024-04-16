import View from "./View.js";

export default class extends View {

	constructor(outerView) {
		super();
		this._outerView = outerView;
	}
	
	_generateMarkup() {
		return `
			<nav class="d-none d-md-block" aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<a href="/" data-link>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill mb-1" viewBox="0 0 16 16">
								<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
					  		</svg>
						</a>
					</li>
					<li class="breadcrumb-item active" aria-current="page">
						Account
					</li>
				</ol>
			</nav>
			<div class="d-flex border-bottom mb-4">
				<h1 class="mb-0">${this._outerView}</h1>
			</div>
			<div class="row">
				<div class="d-none col-md-4 col-lg-3 d-md-flex">
					<nav class="nav border-end flex-column w-100">
						<a href="./account" class="nav-link text-dark w-100 border-start border-3 ${this._outerView === "Account" ? "border-primary": "border-white"}" data-link>
							<div class="d-flex align-items-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
									<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"./>
								</svg>
								<div class="ms-2 fs-5 fw-medium">
									<span>Account</span>
								</div>
							</div>
						</a>
						<a href="./dashboard" class="nav-link text-dark w-100 border-start border-3 ${this._outerView === "Dashboard" ? "border-primary": "border-white"}" data-link>
							<div class="d-flex align-items-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"./>
								</svg>
								<div class="ms-2 fs-5 fw-medium">
									<span>Dashboard</span>
								</div>
							</div>
						</a>
						<hr class="border">
						<a href="./other-users" class="nav-link text-dark w-100 border-start border-3 ${this._outerView === "Other users" ? "border-primary": "border-white"}" data-link>
							<div class="d-flex align-items-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
									<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"./>
								</svg>
								<div class="ms-2 fs-5 fw-medium">
									<span>Other Users</span>
								</div>
							</div>
						</a>
						<a href="./messages" class="nav-link text-dark w-100 border-start border-3 ${this._outerView === "Messages" ? "border-primary": "border-white"}" data-link>
							<div class="d-flex align-items-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
									<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"./>
								</svg>
								<div class="ms-2 fs-5 fw-medium">
									<span>Messages</span>
								</div>
							</div>
						</a>
						<hr class="border">
						<a href="./security" class="nav-link text-dark w-100 border-start border-3 ${this._outerView === "Security" ? "border-primary": "border-white"}" data-link>
							<div class="d-flex align-items-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
									<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"./>
								</svg>
								<div class="ms-2 fs-5 fw-medium">
									<span>Security</span>
								</div>
							</div>
						</a>
					</nav>
				</div>
			`;
	}
};
