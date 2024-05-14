import View from "/static/js/views/View.js";

class MainPageView extends View {

	constructor() {
		super();
		this._practiceInnerHTML = undefined;
		this._versusInnerHTML = undefined;
	}

	_generateFriendListMarkup() {
		let html = "";
		this._data.friends?.forEach((friend, i) => {
			html += `
				<li role="button" class="list-group-item list-group-item-action d-flex align-items-center px-0 border-top-0" data-bs-dismiss="modal" data-friend="${i}">
					<div class="col">
						<img src="/static/media/profile_images/${friend.username}_profile_image.jpg?=${new Date().getTime()}" width="60" height="60" class="radio radio1x1 rounded-circle" alt="Avatar"/>
					</div>
					<span class="col">${friend.username}</span>
					<span class="col">${friend.alias === friend.username ? "/ /" : `${friend.alias}`}</span>
					<span class="col"></span>
				</li>
			`
		});
		return html;
	}

	_generateMarkup() {
		return `
			<div class="container-xxl pt-xl-5 pt-md-4 pt-3 d-flex flex-md-row flex-column column-gap-md-5 row-gap-4">
				<div class="col-md-3 col-12 mx-xl-3 mx-md-1">
					<section id="game-mode" class="d-flex flex-md-column flex-row align-items-center row-gap-4 column-gap-2 mb-2">
						<div class="d-flex flex-column w-100">
							<div class="changa-font text-center ${this._data.game.mode === "tournament" ? 'text-danger' : ''}">
								<h4 class="m-0 d-md-block d-none">
									tournament
								</h4>
								<small class="m-0 d-md-none d-block fw-semibold">
									tournament
								</small>
							</div>
							<input id="tournament" type="radio" name="mode" class="btn-check" ${this._data.user ? '' : 'disabled'} data-change="tournament" />
							<label for="tournament" role="button" class="custom-button col-md-7 col-12 w-100 position-relative d-flex justify-content-center align-content-center p-md-2 p-1">
								<div class="position-relative rounded-3 z-1 ${this._data.user ? (this._data.game.mode === "tournament" ? 'pressed' : 'released') : 'pressed'}">
									<div class="position-absolute w-100 h-100 d-flex justify-content-center align-items-center rounded-3 ${this._data.user ? 'd-none' : ''}" style="background-color: #2a2e35ac;">
										<img src="/static/images/padlock.svg" alt="mdo" width="40" height="40" class="img-fluid" style="filter: invert(100%);">
									</div>
									<img src="/static/images/tournament.png" class="img-fluid rounded-3" alt="tournament">
								</div>
							</label>
						</div>
						<div class="d-flex flex-column w-100">
							<div class="changa-font text-center ${this._data.game.mode === "versus" ? 'text-danger' : ''}">
								<h4 class="m-0 d-md-block d-none" style="white-space: nowrap;">
									1 versus 1
								</h4>
								<small class="m-0 d-md-none d-block fw-semibold" style="white-space: nowrap;">
									1 versus 1
								</small>
							</div>
							<input id="versus" type="radio" name="mode" class="btn-check" ${this._data.user ? '' : "disabled"} data-change="versus" />
							<label for="versus" role="button" class="custom-button col-md-7 col-12 w-100 position-relative d-flex justify-content-center align-content-center p-md-2 p-1">
								<div class="position-relative rounded-3 z-1 ${this._data.user ? (this._data.game.mode === "versus" ? 'pressed' : 'released') : 'pressed'}">
									<div class="position-absolute w-100 h-100 d-flex justify-content-center align-items-center rounded-3 ${this._data.user ? 'd-none' : ''}" style="background-color: #2a2e35ac;">
										<img src="/static/images/padlock.svg" alt="mdo" width="40" height="40" class="img-fluid" style="filter: invert(100%);">
									</div>
									<img src="/static/images/versus.png" class="img-fluid rounded-3" alt="versus">
								</div>
							</label>
						</div>
						<div class="d-flex flex-column w-100">
							<div class="changa-font text-center ${this._data.game.mode === "practice" ? 'text-danger' : ''}">
								<h4 class="changa-font m-0 d-md-block d-none">
									practice
								</h4>
								<small class="changa-font m-0 d-md-none d-block fw-semibold">
									practice
								</small>
							</div>
							<input id="practice" type="radio" name="mode" class="btn-check" data-change="practice" />
							<label for="practice" role="button" class="custom-button col-md-7 col-12 w-100 position-relative d-flex justify-content-center align-content-center p-md-2 p-1">
								<img src="/static/images/practice.png" class="position-relative img-fluid rounded-3 ${this._data.game.mode === "practice" ? 'pressed' : 'released'}" alt="practice">
							</label>
						</div>
					</section>
				</div>
				<div class="col mt-md-2">
					<div class="d-flex flex-column row-gap-xl-5 row-gap-md-3 row-gap-4">
						<section id="game-customization" class="d-flex flex-column row-gap-md-2 row-gap-1 pt-xl-5 pt-md-4 me-md-3 me-2">
							<div class="row align-items-lg-start align-items-md-center align-items-sm-start align-items-center column-gap-md-4 column-gap-0">
								<div class="col">
									<div class="d-flex flex-column align-items-center row-gap-xxl-4 row-gap-lg-3 row-gap-md-4 row-gap-sm-3 row-gap-2">
										<section id="game-speed-level" class="row justify-content-between align-items-center w-100">
											<div class="col-lg-3 col-md-4 col-sm-3 col-4 px-0 ps-1">
												<span class="mb-0 text-uppercase text-muted">
													<small>Speed</small>
												</span>
											</div>
											<div class="col-7 d-lg-block d-md-none d-sm-block d-none">
												<div class="d-flex justify-content-between align-items-center">
													<span>
														Choose speed level to customize game experience
													</span>
												</div>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-2 col-4">
												<div class="row justify-content-center">
													<button class="col border-1 border-end-0 p-lg-1 p-0 rounded-start-2" data-change="decrement">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-1 bi bi-dash" viewBox="0 0 16 16">
															<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
														</svg>
													</button>
													<input id="speed-input" type="number" value="${this._data.game.speedLevel}" class="col border-1 rounded-0 text-center p-lg-1 p-0" onkeydown="return false" style="cursor: default;"/>
													<button class="col border-1 border-start-0 p-lg-1 p-0 rounded-end-2" data-change="increment">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-1 bi bi-plus" viewBox="0 0 16 16">
															<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
														</svg>
													</button>
												</div>
											</div>
										</section>
										<section id="game-time-limit" class="row justify-content-between align-items-center w-100 mt-xxl-3 mt-xl-3 mt-lg-2 mt-sm-1 mt-0">
											<div class="col-lg-3 col-md-4 col-sm-3 col-4 px-0 ps-1">
												<span class="mb-2 mb-md-0 text-uppercase text-muted">
													<small>Time</small>
												</span>
											</div>
											<div class="col-7 d-lg-block d-md-none d-sm-block d-none">
												<div class="d-flex justify-content-between align-items-center">
													<span>
														Choose how many minutes to play to customize game experience
													</span>
												</div>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-2 col-4">
												<div class="row justify-content-center">
													<button class="col border-1 border-end-0 p-lg-1 p-0 rounded-start-2" data-change="decrement">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-1 bi bi-dash" viewBox="0 0 16 16">
															<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
														</svg>
													</button>
													<input id="time-input" type="number" value="${this._data.game.timeLimit}" class="col border-1 rounded-0 text-center p-lg-1 p-0" onkeydown="return false" style="cursor: default;" />
													<button class="col border-1 border-start-0 p-lg-1 p-0 rounded-end-2" data-change="increment">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mb-1 bi bi-plus" viewBox="0 0 16 16">
															<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
														</svg>
													</button>
												</div>
											</div>
										</section>
									</div>
								</div>
								<section id="game-map-level" class="col-4 carousel slide px-1">
									<div class="carousel-inner">
										<div id="map00" class="carousel-item ${this._data.game.mapLevel === 1 ? 'active' : ''}">
											<img src="/static/images/map00.png" class="d-block h-100 w-100 rounded-3" alt="map00">
										</div>
										<div id="map01" class="carousel-item ${this._data.game.mapLevel === 2 ? 'active' : ''}">
											<img src="/static/images/map01.png" class="d-block w-100 rounded-3" alt="map01">
										</div>
										<div id="map02" class="carousel-item ${this._data.game.mapLevel === 3 ? 'active' : ''}">
											<img src="/static/images/map02.png" class="d-block w-100 rounded-3" alt="map02">
										</div>
									</div>
									<button class="carousel-control-prev w-50 d-flex justify-content-start" data-bs-target="#game-map-level" style="opacity: 1; filter: invert(100%); cursor: default;" data-change="prev">
										<span role="button" class="carousel-control-prev-icon bg-secondary rounded-md-2 rounded-1" aria-hidden="true" style="height: 30%; width: 32%; margin-left: -5%;"></span>
										<span class="visually-hidden">Previous</span>
									</button>
									<button class="carousel-control-next w-50 d-flex justify-content-end" data-bs-target="#game-map-level" style="opacity: 1; filter: invert(100%); cursor: default;" data-change="next">
										<span role="button" class="carousel-control-next-icon bg-secondary rounded-md-2 rounded-1" aria-hidden="true" style="height: 30%; width: 32%; margin-right: -5%;"></span>
										<span class="visually-hidden">Next</span>
									</button>
								</section>
							</div>
							<div class="row align-items-center column-gap-md-4 column-gap-0">
								<div class="col">
									<div class="d-flex flex-column align-items-center">
										<section id="game-power-ups" class="row justify-content-between align-items-center w-100">
											<div class="col-lg-3 col-md-4 col-sm-3 col-7 px-0 ps-1">
												<span class="mb-0 text-uppercase text-muted">
													<small>Power ups</small>
												</span>
											</div>
											<div class="col-7 d-lg-block d-md-none d-sm-block d-none">
												<div class="d-flex justify-content-between align-items-center">
													<span>
														Choose to enhance game experience by adding power-ups into the map 
													</span>
												</div>
											</div>
											<div class="col-lg-2 col-md-3 col-sm-2 col-4">
												<div class="d-flex justify-content-center form-check form-switch">
													<input id="power-ups-switch" type="checkbox" role="switch" class="form-check-input border-dark" style="width: 3rem; height: 1.5rem; transition: background-position .15s ease-in-out;" ${this._data.game.powerUps} data-change="" />
												</div>
											</div>
										</section>
									</div>
								</div>
								<div class="col-4 px-1">
									<button class="btn btn-outline-primary w-100 roundend-2 py-sm-1 py-0 px-0" style="white-space: nowrap;" data-change="defaults">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise mb-1" viewBox="0 0 16 16">
											<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
											<path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
										</svg>
										<span>
											Defaults
										</span>
									</button>
								</div>
							</div>
						</section>
						<section id="game-queue" class="row justify-content-center column-gap-4 position-relative mt-md-2">
							<span class="changa-font text-danger position-absolute fs-4 top-50 w-auto py-1 text-center d-md-block d-none">vs</span>
							<div class="col-md-8 col">
								<div class="d-flex flex-md-column flex-row column-gap-md-0 column-gap-4 row-gap-xl-4 row-gap-lg-3">
									<div class="col row justify-content-md-evenly">
										<div class="col-lg-3 col-md-4 col-6">
											<div class="d-flex flex-column align-items-center text-end row-gap-1">
												<h5 class="changa-font d-md-block d-none mb-1" style="white-space: nowrap;">
													Player 1
												</h5>
												<small class="changa-font d-md-none d-block fw-semibold m-0" style="white-space: nowrap;">
													Player 1
												</small>
												<button class="border-0 p-0 m-0 rounded-circle col-md-7 col-12 w-100 position-relative d-flex justify-content-center align-content-center" disabled>
													<div class="ratio ratio-1x1 p-0 border-0 position-relative rounded-circle z-1">
														<img src=${this._data.user
															? `/static/media/profile_images/${this._data.user.username}_profile_image.jpg?=${new Date().getTime()}`
															: `/static/images/guest_image.png`
														} class="bg-dark img-fluid rounded-circle border border-dark border-4" alt="Avatar"/>
													</div>
												</button>
												<div class="d-flex flex-column align-items-center mt-md-2 mt-1">
													<span class="col mb-0 text-uppercase text-muted">
														Alias: 
													</span>
													<span class="col">
														${this._data.user
															? this._data.user.alias
															: "Guest"
														}
													</span>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-6">
											<div class="d-flex flex-column align-items-center text-end row-gap-1">
												<h5 class="changa-font d-md-block d-none mb-1" style="white-space: nowrap;">
													Player 2
												</h5>
												<small class="changa-font d-md-none d-block fw-semibold m-0" style="white-space: nowrap;">
													Player 2
												</small>
												<button class="col-md-7 col-12 w-100 border-0 rounded-circle p-0" data-bs-toggle="modal" data-bs-target="#search-other-users" ${this._data.game.mode !== "practice" ? '' : 'disabled'} data-change="player2">
													<div class="d-flex justify-content-center align-content-center">
														<div class="ratio ratio-1x1 rounded-circle border border-dark border-4">
															${this._data.game.mode === "practice"
																? 	'<img src="/static/images/ai_image.png" class="bg-dark img-fluid rounded-circle" alt=" " />'
																: (this._data.game.queue.player2?.username &&  this._data.game.queue.player2.username !== 'Ai'
																	?	`<img src="/static/media/profile_images/${this._data.game.queue.player2.username}_profile_image.jpg?=${new Date().getTime()}" class="rounded-circle img-fluid" alt="Avatar" />`
																	:	`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bg-light rounded-circle bi bi-plus-circle-dotted" viewBox="0 0 16 16">
																			<path d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
																		</svg>`
																)
															}
														</div>
													</div>
												</button>
												<div class="d-flex flex-column align-items-center mt-md-2 mt-1">
													<span class="col mb-0 text-uppercase text-muted">
														Alias: 
													</span>
													<span class="col text-start">
														${this._data.game.mode === "practice"
															? 'Ai'
															: (this._data.game.queue.player2?.username && this._data.game.queue.player2.username !== 'Ai'
																?	this._data.game.queue.player2.alias
																:	""
															)
														}
													</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col row justify-content-md-evenly">
										<div class="col-lg-3 col-md-4 col-6">
											<div class="d-flex flex-column align-items-center text-end row-gap-1">
												<h5 class="changa-font d-md-block d-none mb-1" style="white-space: nowrap;">
													Player 3
												</h5>
												<small class="changa-font d-md-none d-block fw-semibold m-0" style="white-space: nowrap;">
													Player 3
												</small>
												<button class="col-md-7 col-12 w-100 border-0 p-0 rounded-circle" data-bs-toggle="modal" data-bs-target="#search-other-users" ${this._data.game.mode === "tournament" ? '' : 'disabled'} data-change="player3">
													<div class="d-flex justify-content-center align-content-center">
														<div class="ratio ratio-1x1 rounded-circle border border-dark border-4">
															${this._data.game.mode === "tournament"
																? (this._data.game.queue.player3?.username
																	?	`<img src="/static/media/profile_images/${this._data.game.queue.player3.username}_profile_image.jpg?=${new Date().getTime()}" class="rounded-circle img-fluid" alt="Avatar" />`
																	:	`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bg-light rounded-circle bi bi-plus-circle-dotted" viewBox="0 0 16 16">
																			<path d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
																		</svg>`
																)	
																:	`<div class="position-absolute w-100 h-100 d-flex justify-content-center align-items-center rounded-circle z-4" style="background-color: #2a2e35ac;">
																		<img src="/static/images/padlock.svg" alt="mdo" width="40" height="40" class="img-fluid" style="filter: invert(100%);">
																	</div>`
															}
														</div>
													</div>
												</button>
												<div class="d-flex flex-column align-items-center mt-md-2 mt-1">
													<span class="col mb-0 text-uppercase text-muted">
														Alias: 
													</span>
													<span class="col text-start">
														${this._data.game.queue.player3?.username
															?	this._data.game.queue.player3.alias
															:	""
														}
													</span>
												</div>
											</div>
										</div>
										<div class="col-lg-3 col-md-4 col-6">
											<div class="d-flex flex-column align-items-center text-end row-gap-1">
												<h5 class="changa-font d-md-block d-none mb-1" style="white-space: nowrap;">
													Player 4
												</h5>
												<small class="changa-font d-md-none d-block fw-semibold m-0" style="white-space: nowrap;">
													Player 4
												</small>
												<button class="col-md-7 col-12 w-100 border-0 p-0 rounded-circle" data-bs-toggle="modal" data-bs-target="#search-other-users" ${this._data.game.mode === "tournament" ? '' : 'disabled'} data-change="player4">
													<div class="d-flex justify-content-center align-content-center">
														<div class="ratio ratio-1x1 rounded-circle border border-dark border-4">
															${this._data.game.mode === "tournament"
																? (this._data.game.queue.player4?.username
																	?	`<img src="/static/media/profile_images/${this._data.game.queue.player4.username}_profile_image.jpg?=${new Date().getTime()}" class="rounded-circle img-fluid" alt="Avatar" />`
																	:	`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bg-light rounded-circle bi bi-plus-circle-dotted" viewBox="0 0 16 16">
																			<path d="M8 0q-.264 0-.523.017l.064.998a7 7 0 0 1 .918 0l.064-.998A8 8 0 0 0 8 0M6.44.152q-.52.104-1.012.27l.321.948q.43-.147.884-.237L6.44.153zm4.132.271a8 8 0 0 0-1.011-.27l-.194.98q.453.09.884.237zm1.873.925a8 8 0 0 0-.906-.524l-.443.896q.413.205.793.459zM4.46.824q-.471.233-.905.524l.556.83a7 7 0 0 1 .793-.458zM2.725 1.985q-.394.346-.74.74l.752.66q.303-.345.648-.648zm11.29.74a8 8 0 0 0-.74-.74l-.66.752q.346.303.648.648zm1.161 1.735a8 8 0 0 0-.524-.905l-.83.556q.254.38.458.793l.896-.443zM1.348 3.555q-.292.433-.524.906l.896.443q.205-.413.459-.793zM.423 5.428a8 8 0 0 0-.27 1.011l.98.194q.09-.453.237-.884zM15.848 6.44a8 8 0 0 0-.27-1.012l-.948.321q.147.43.237.884zM.017 7.477a8 8 0 0 0 0 1.046l.998-.064a7 7 0 0 1 0-.918zM16 8a8 8 0 0 0-.017-.523l-.998.064a7 7 0 0 1 0 .918l.998.064A8 8 0 0 0 16 8M.152 9.56q.104.52.27 1.012l.948-.321a7 7 0 0 1-.237-.884l-.98.194zm15.425 1.012q.168-.493.27-1.011l-.98-.194q-.09.453-.237.884zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a7 7 0 0 1-.458-.793zm13.828.905q.292-.434.524-.906l-.896-.443q-.205.413-.459.793zm-12.667.83q.346.394.74.74l.66-.752a7 7 0 0 1-.648-.648zm11.29.74q.394-.346.74-.74l-.752-.66q-.302.346-.648.648zm-1.735 1.161q.471-.233.905-.524l-.556-.83a7 7 0 0 1-.793.458zm-7.985-.524q.434.292.906.524l.443-.896a7 7 0 0 1-.793-.459zm1.873.925q.493.168 1.011.27l.194-.98a7 7 0 0 1-.884-.237zm4.132.271a8 8 0 0 0 1.012-.27l-.321-.948a7 7 0 0 1-.884.237l.194.98zm-2.083.135a8 8 0 0 0 1.046 0l-.064-.998a7 7 0 0 1-.918 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
																		</svg>`
																)	
																:	`<div class="position-absolute w-100 h-100 d-flex justify-content-center align-items-center rounded-circle z-4" style="background-color: #2a2e35ac;">
																		<img src="/static/images/padlock.svg" alt="mdo" width="40" height="40" class="img-fluid" style="filter: invert(100%);">
																	</div>`
															}
														</div>
													</div>
												</button>
												<div class="d-flex flex-column align-items-center mt-md-2 mt-1">
													<span class="col mb-0 text-uppercase text-muted">
														Alias: 
													</span>
													<span class="col text-start">
														${this._data.game.queue.player4?.username
															?	this._data.game.queue.player4.alias
															:	""
														}
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						<div class="w-100 text-center mt-md-1 mt-3">
							<a href="/pong" id="start" data-link>
								<span class="changa-font fs-5 btn btn-outline-danger border-1 px-md-5 px-3">
									Start Game
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="modal fade" id="search-other-users" tabindex="-1" aria-labelledby="search-other-users" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5">
								Add player
							</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<ul class="mb-3 ps-4">
								<li class="mb-2">
									By clicking another user from your friend list, you are pushing a new player into the game queue
								</li>
								<li>
									Go to the <a href="/other-users" data-bs-dismiss="modal" data-link>other users</a> page to directly add new friends
								</li>
							</ul>
							<div class="d-flex bg-dark text-white text-uppercase fw-normal rounded-top-2 py-2 text-center">
								<span class="col mb-0">
									<small>Picture</small>
								</span>
								<span class="col mb-0">
									<small>Username</small>
								</span>
								<span class="col mb-0">
									<small>Alias</small>
								</span>
								<span class="col mb-0">
									<small>Status</small>
								</span>
							</div>
							<ul class="list-group text-center border border-1 rounded-bottom-2 rounded-top-0">
								${this._generateFriendListMarkup()}
							</ul>
						</div>
					</div>
				</div>
			</div>
		`;
	}

	async addHandlerPlayers() {
		return new Promise(resolve => {
			document.addEventListener("click", e => {
				const input = e.target.closest("[data-friend]");
				if (!input)
					return;
				e.stopPropagation();
				resolve(input.dataset.friend);
			});
		});
	}

	addHandlerCustomization(handler) {
		document.addEventListener("click", e => {
			const input = e.target.closest("[data-change]");
			if (!input)
				return ;
			e.stopPropagation();
			const section = input.closest("section").id;
			const action = input.dataset.change;
			handler(section, action);
		});
	}

	addHandlerStartGame(handler) {
		document.addEventListener("click", e => {
			const input = e.target.closest("[data-link]");
			if (!input)
				return ;
			e.preventDefault();
			handler();
		});
	}
};

export default new MainPageView();