import View from "./View.js";

class GameModesView extends View {

	constructor() {
		super();
	}

	_generateMarkup() {
		return `
			<div class="container-lg px-0 mt-1">
				<form class="d-flex flex-column  row-gap-2">
					<div class="d-flex flex-sm-row flex-column w-100 gap-sm-5">
						<div class="col d-flex flex-column align-items-center gap-3 bg-secondary">
							<section id="gameModes" class="w-100">
								<h4 class="text-uppercase text-center text-white fw-normal" style="cursor: context-menu;">game Modes</h4>
								<fieldset class="d-flex flex-sm-row gap-1">
									<div id="tournamentBanner" class="col d-flex flex-column position-relative bg-dark">
										<label role="button" for="tournament" class="position-relative">
											<div class="position-absolute w-100 d-flex justify-content-center align-items-center text-white ${this._data.isLogged ? 'd-none' : ''}" style="background-color: rgba(42, 46, 53, 0.674); top: 0; bottom: 0;">
												<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="svg-locket bi bi-lock-fill" viewBox="0 0 16 16">
													<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
												</svg>
											</div>
											<img src="/static/images/tournament.png" class="img-fluid" alt="tournament">
										</label>
										<div class="d-flex flex-row p-sm-2 p-0 ps-1">
											<input type="radio" id="tournament" name="mode" value="tournament" class="col-1" ${this._data.isLogged ? '' : "disabled"}/>
											<label role="button" for="tournament" class="changa-font col text-center text-white me-sm-3 ms-0">
												<small class="d-sm-none d-block">tournament</small>
												<span class="d-sm-block d-none">tournament</span>
											</label>
										</div>
									</div>
									<div id="versusBanner" class="col d-flex flex-column bg-dark">
										<label role="button" for="versus" class="position-relative">
											<div class="position-absolute w-100 d-flex justify-content-center align-items-center text-white ${this._data.isLogged ? 'd-none' : ''}" style="background-color: rgba(42, 46, 53, 0.674); top: 0; bottom: 0;">
												<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="svg-locket bi bi-lock-fill" viewBox="0 0 16 16">
													<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
												</svg>
											</div>
											<img src="/static/images/1v1.png" class="img-fluid" alt="versus">
										</label>
										<div class="d-flex flex-row p-sm-2 p-0 ps-1">
											<input type="radio" id="versus" name="mode" value="versus" class="col-1" ${this._data.isLogged ? '' : "disabled"}/>
											<label role="button" for="versus" class="changa-font col text-center text-white me-sm-3 ms-0">
												<small class="d-sm-none d-block">1 versus 1</small>
												<span class="d-sm-block d-none">1 versus 1</span>
											</label>
										</div>
									</div>
									<div id="practiceBannner" class="col d-flex flex-column bg-dark">
										<label role="button" for="practice">
											<img src="/static/images/practice.png" class="img-fluid" alt="practice">
										</label>
										<div class="d-flex flex-row p-sm-2 p-0 ps-1">
											<input type="radio" id="practice" name="mode" value="practice" class="col-1" checked/>
											<label role="button" for="practice" class="changa-font col text-center text-white me-sm-3 ms-0">
												<small class="d-sm-none d-block">practice</small>
												<span class="d-sm-block d-none">practice</span>
											</label>
										</div>
									</div>
								</fieldset>
							</section>
							<section id="customization" class="d-flex flex-column align-items-center gap-1">
								<h4 class="text-uppercase text-white fw-normal" style="cursor: context-menu;">Customization</h4>
								<fieldset class="d-flex flex-row gap-1">
									<div class="col d-flex flex-column align-items-center">
										<label role="button" for="map00">
											<canvas class="preview w-100 h-100 bg-black"></canvas>
										</label>
										<div class="d-flex flex-row w-100 p-sm-2 p-0 ps-1 bg-dark">
											<input type="radio" id="map00" name="map" value="map00" class="col-1" checked/>
											<label role="button" for="map00" class="changa-font col text-center text-white me-sm-3 ms-0">Map00</label>
										</div>
									</div>
									<div class="col d-flex flex-column align-items-center">
										<label role="button" for="map01">
											<canvas class="preview w-100 h-100 bg-black"></canvas>
										</label>
										<div class="d-flex flex-row w-100 p-sm-2 p-0 ps-1 bg-dark">
											<input type="radio" id="map01" name="map" value="map01" class="col-1"/>
											<label role="button" for="map01" class="changa-font col text-center text-white me-sm-3 ms-0">Map01</label>
										</div>
									</div>
									<div class="col d-flex flex-column align-items-center">
										<label role="button" for="map02">
											<canvas class="preview w-100 h-100 bg-black"></canvas>
										</label>
										<div class="d-flex flex-row w-100 p-sm-2 p-0 ps-1 bg-dark">
											<input type="radio" id="map02" name="map" value="map02" class="col-1"/>
											<label role="button" for="map02" class="changa-font col text-center text-white me-sm-3 ms-0">Map02</label>
										</div>
									</div>
								</fieldset>
								<div class="d-flex flex-row justify-content-between w-100 gap-1">
									<div class="col col d-flex flex-column align-items-center">
										<span class="text-white changa-font fs-6">Speed</span>
										<input id="speed" name="speed" type="range" min="1" max="4" value="1" class="col-sm-9 col-12" list="marks" data-range>
										<datalist id="marks">
											<option value="1"></option>
											<option value="2"></option>
											<option value="3"></option>
											<option value="4"></option>
										</datalist>
									</div>
									<div class="col col d-flex flex-sm-row flex-column justify-content-sm-center align-items-center">
										<label for="powerUps" class="text-white changa-font fs-6 me-sm-2 order-sm-1 order-2">Power-ups</label>
										<input type="checkbox" id="powerUps" name="power-ups" class="order-sm-2 order-1" style="width: 1rem; height: 1rem;"/>
									</div>
									<div class="col col d-flex flex-column align-items-center">
										<span class="text-white changa-font fs-6">Time</span>
										<input id="time" name="time" type="range" min="1" max="4" value="1" class="col-sm-9 col-12" list="marks" data-range>
										<datalist id="marks">
											<option value="1"></option>
											<option value="2"></option>
											<option value="3"></option>
											<option value="4"></option>
										</datalist>
									</div>
								</div>
								<button class="changa-font text-uppercase bg-white border rounded-2 px-3 mb-2" data-defaults>Defaults</button>
							</section>
						</div>
						<div class="col-md-4 d-flex flex-column align-items-center bg-secondary">
							<h4 class="invisible d-sm-block">Customization</h4>
							<section id="friendList" class="w-100 overflow-auto bg-white border border-dark" style="max-height: 15rem;">
								<fieldset>
									<div class="changa-font fs-5 text-white ps-2 bg-dark">
										Friend List
									</div>
									<div class="list-group w-100 rounded-0" style="cursor: context-menu;">
										<div class="list-group-item d-flex align-items-center">
											<label class="col-7">
												<input class="form-check-input me-1" type="checkbox" name="friend">
												arbutnar
											</label>
											<span class="col text-muted mt-1"><small>status :</small><span>
										</div>
										<div class="list-group-item d-flex align-items-center">
											<label class="col-7">
												<input class="form-check-input me-1" type="checkbox" name="friend">
												mabasset
											</label>
											<span class="col text-muted mt-1"><small>status :</small><span>
										</div>
									</div>
								</fieldset>
								<div class="${this._data.isLogged ? '' : 'd-none'}">
									<nav class="d-flex justify-content-center align-items-center">
										<a href="./other-users" class="pe-1 mb-1" data-link>
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
												<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"./>
											</svg>
										</a>
										<small>Other Users</small>
									</nav>
								</div>	
							</section>
							<section id="queue" class="w-100 mt-auto mb-2">
								<div>.</div>
							</section>
						</div>
					</div>
					<div class="d-flex justify-content-center bg-secondary">
						<button class="changa-font fs-5 text-uppercase fw-bold bg-white border rounded-2 px-5 py-2 my-2" data-start>Start Game</button>
					</div>
				</form>
			</div>
		`;
	}

	addHandlerSetDefault() {
		document.addEventListener("click", e => {
			const input = e.target;
			if (!input.hasAttribute("data-defaults"))
				return ;
			e.preventDefault();
			document.querySelector("#map00").checked = true;
			document.querySelector("#powerUps").checked = false;
			document.querySelector("#speed").value = 1;
			document.querySelector("#time").value = 1;
		});
	}

	addHandlerStartGame(handler) {
		document.addEventListener("click", e => {
			const input = e.target;
			if (!input.hasAttribute("data-start"))
				return ;
			e.preventDefault();
			const form = input.closest("form");
			const data = form ? Object.fromEntries(new FormData(form)) : {};
			(!form || form?.checkValidity()) && handler(data);
		});
	}
};

export default new GameModesView();