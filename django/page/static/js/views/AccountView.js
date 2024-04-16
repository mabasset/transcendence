import NavView from "./NavView.js"
import View from "./View.js";

class AccountView extends View {
	
	constructor() {
		super();
		this._navView = new NavView("Account");
	}

	_generateMarkup() {
		return `
			<div class="container mt-3">
				${this._navView._generateMarkup()}
					<div class="col-12 col-md-8 col-lg-9">
						<h2>${this._data.username}</h2>
						<ul class="list-group list-group-flush">
							<a role="button" class="list-group-item list-group-item-action px-0" data-bs-toggle="modal" data-bs-target="#imgEditModal">
								<div class="row align-items-center">
									<div class="col-12 col-md-4 col-xl-3 mb-2 mb-md-0">
										<span class="mb-2 mb-md-0 text-uppercase text-muted">
											<small>Profile picture</small>
										</span>
									</div>
									<div class="col-12 col-md-8 col-xl-9">
										<div class="d-flex justify-content-between align-items-center">
											<span>
												A profile picture helps personalize your account
											</span>
											<span class="position-relative ps-3">
												<img src="/static/media/profile_images/${this._data.username}_profile_image.jpg?=${new Date().getTime()}" width="60" height="60" class="rounded-circle" alt="Avatar">
												<div class="position-absolute bg-white bg-opacity-25 start-0 end-0 bottom-0 text-center">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgba(255, 255, 255, 0.75)" class="bi bi-camera-fill mb-1 ms-3" viewBox="0 0 16 16">
														<path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
														<path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
													</svg>
												</div>
											</span>
										</div>
									</div>
								</div>
							</a>
							<a role="button" class="list-group-item list-group-item-action px-0" data-bs-toggle="modal" data-bs-target="#aliasEditModal">
								<div class="row align-items-center">
									<div class="col-12 col-md-4 col-xl-3 mb-2 mb-md-0">
										<span class="mb-2 mb-md-0 text-uppercase text-muted">
											<small>Alias</small>
										</span>
									</div>
									<div class="col-12 col-md-8 col-xl-9">
										<div class="d-flex justify-content-between align-items-center">
											<span>
												${this._data.alias}
											</span>
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill mb-1" viewBox="0 0 16 16">
													<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
												</svg>
											</span>
										</div>
									</div>
								</div>
							</a>
						</ul>
					</div>
				</div>
			</div>
			<div class="modal fade" id="imgEditModal" tabindex="-1" aria-labelledby="imgEditModal" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5">Profile picture</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<div class="mb-4">
								A picture helps people recognize you and lets you know when you're signed in to your account
							</div>
							<label for="change-img" role="button" class="d-flex justify-content-center mx-auto ratio ratio-1x1" style="max-width: 288px">
								<img id="profile-picture" src="/static/media/profile_images/${this._data.username}_profile_image.jpg?=${new Date().getTime()}" width="100%" height="100%" class="rounded-circle" alt="Avatar">
							</label>
						</div>
						<div class="modal-footer">
							<div class="row w-100">
								<div class="col-6 ps-0 pe-1">
									<label class="btn btn-outline-primary w-100">
										<input id="change-img" type="file" class="d-none" accept="image/png, image/jpeg, image/jpg">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil mb-1 me-1" viewBox="0 0 16 16">
											<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
										</svg>
										<span>
											Change
										</span>
									</label>
								</div>
								<div class="col-6 ps-1 pe-0">
									<button id="save-img" type="button" class="btn btn-outline-primary w-100" data-bs-dismiss="modal" aria-label="Close">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload mb-1 me-1" viewBox="0 0 16 16">
											<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
											<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
						  				</svg>
										<span>
											Save
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="modal fade" id="aliasEditModal" tabindex="-1" aria-labelledby="aliasEditModal" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5">Alias</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body mb-3">
							<div class="mb-3">
								A unique display name is required to play the tournaments
							</div>
							<div>
								<input id="input-alias" type="text" class="form-control w-100" placeholder="Alias" value="${this._data.alias}" required aria-label="Alias" aria-describedby="unique display name for tournaments">
								<div class="invalid-tooltip">
									Please choose a unique and valid alias
							  	</div>
							</div>
						</div>
						<div class="modal-footer">
							<div class="row w-100">
								<div class="col-6 ps-0 pe-1">
									<button id="reset-alias" type="button" class="btn btn-outline-primary w-100">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise mb-1" viewBox="0 0 16 16">
											<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
											<path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
								  		</svg>
										<span>
											Reset
										</span>
									</button>
								</div>
								<div class="col-6 ps-1 pe-0">
									<button id="save-alias" type="button" class="btn btn-outline-primary w-100" data-bs-dismiss="modal" aria-label="Close">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload mb-1 me-1" viewBox="0 0 16 16">
											<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
											<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
										</svg>
										<span>
											Save
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;
	}

	addHandlerCustomization(handler) {
		document.addEventListener("change", e => {
			const input = e.target;
			if (input.id !== "change-img")
				return ;
			e.stopPropagation();
			let img = document.querySelector("#profile-picture");
			img.src = URL.createObjectURL(input.files[0]);
		});
		document.addEventListener("click", e => {
			const button = e.target.closest("#save-img");
			if (!button)
				return ;
			e.stopPropagation();
			const img = document.querySelector("#change-img").files[0];
			if (!img)
				return ;
			handler(img);
		});
		document.addEventListener("click", e => {
			const button = e.target.closest("#save-alias");
			if (!button)
				return ;
			e.stopPropagation();
			const alias = document.querySelector("#input-alias").value;
		});
		document.addEventListener("click", e => {
			const button = e.target.closest("#reset-alias");
			if (!button)
				return ;
			e.stopPropagation();
			document.querySelector("#input-alias").value = this._data.username;
		});
	}
};

export default new AccountView();