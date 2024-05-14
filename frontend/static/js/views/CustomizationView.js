import View from "/static/js/views/View.js";
import { DEFAULT_GAME_INFO } from ".static/js/views/config.js";

class CustomizationView extends View {

	constructor() {
		super();
		this.game = DEFAULT_GAME_INFO;
	}	

	_generateMarkup() {
		return `
			<div class="container d-flex flex-column align-items-center w-100 px-0">
				<h2 class="text-uppercase fw-normal mt-sm-4 mb-sm-2 my-1">Game Customization</h2>
				<form method="POST" action="" class="container row justify-content-center gap-3 w-100 px-0">
					<section class="col bg-secondary text-center">
						<h4 class="text-white my-4" style="font-family: 'Public Pixel', sans-serif;">Ball</h4>
						<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" class="bi bi-circle-fill" viewBox="0 0 16 16">
							<circle cx="8" cy="8" r="8"/>
						</svg>
						<div class="form-group text-white mt-5">
							Color :
							<div class="input-group justify-content-center">
								<input name="ballColor" type="range" min="1" max="4" value="1" list="colorBallMarkers" class="w-75">
								<datalist id="colorBallMarkers">
									<option value="1">white</option>
									<option value="2">DarkTurquoise</option>
									<option value="3">YellowGreen</option>
									<option value="4">LightCoral</option>
								</datalist>
							</div>
						</div>
						<div class="form-group text-white my-4">
							Size :
							<div class="input-group justify-content-center">
								<input name="ballSize" type="range" min="1" max="4" value="3" list="sizeBallMarkers" class="w-75"/>
								<datalist id="sizeBallMarkers">
									<option value="1">1</option>
									<option value="2">1.5</option>
									<option value="3">2</option>
									<option value="4">2.5</option>
								</datalist>
							</div>
						</div>
					</section>
					<section class="col bg-secondary text-center">
						<h4 class="text-white mt-4 mb-3" style="font-family: 'Public Pixel', sans-serif;">Board</h4>
						<div class="bg-black" style="height: 35%;">.</div>
						<div class="form-group text-white mt-5">
							Color :
							<div class="input-group justify-content-center">
								<input name="canvasColor" type="range" min="1" max="4" value="1" list="colorCanvasMarkers" class="w-75"/>
								<datalist id="colorCanvasMarkers">
									<option value="1">black</option>
									<option value="2">DarkSlateGrey</option>
									<option value="3">Maroon</option>
									<option value="4">RebeccaPurple</option>
								</datalist>
							</div>
						</div>
					</section>
					<section class="col bg-secondary text-center">
						<h4 class="text-white my-4" style="font-family: 'Public Pixel', sans-serif;">Paddles</h4>
						<div class="row justify-content-between px-4 text-white" style="height: 29%";>
							<div class="col-2 bg-white" style="width: 5%">.</div>
							<div class="col-2 bg-white" style="width: 5%">.</div>
						</div>
						<div class="form-group text-white mt-3">
							Color :
							<div class="input-group justify-content-center">
								<input name="paddlesColor" type="range" min="1" max="4" value="1" list="colorPaddlesMarkers" class="w-75">
								<datalist id="colorPaddlesMarkers">
									<option value="1">white</option>
									<option value="2">DarkTurquoise</option>
									<option value="3">YellowGreen</option>
									<option value="4">LightCoral</option>
								</datalist>
							</div>
						</div>
						<div class="form-group text-white my-4">
							Size :
							<div class="input-group justify-content-center">
								<input name="paddlesSize" type="range" min="1" max="4" value="3" list="sizePaddlesMarkers" class="w-75"/>
								<datalist id="sizePaddlesMarkers">
									<option value="1">5</option>
									<option value="2">7</option>
									<option value="3">10</option>
									<option value="4">12</option>
								</datalist>
							</div>
						</div>
					</section>
					<section class="col d-flex flex-column justify-content-between bg-secondary text-center">
						<h4 class="text-white my-4" style="font-family: 'Public Pixel', sans-serif;">Level</h4>
						<div class="form-group text-white my-4">
							<div class="input-group justify-content-center">
								<input name="level" type="range" min="1" max="4" value="3" list="levelMarkers" class="w-75"/>
								<datalist id="levelMarkers">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</datalist>
							</div>
						</div>
						<h4 class="text-white my-4" style="font-family: 'Public Pixel', sans-serif;">Time</h4>
						<div class="form-group text-white my-4">
							<div class="input-group justify-content-center">
								<input name="time" type="range" min="1" max="4" value="3" list="timeMarkers" class="w-75"/>
								<datalist id="timeMarkers">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</datalist>
							</div>
						</div>
					</section>
					<section id="reset-defaults" class="col-12 text-center">
						<input type="button" value="Reset to Defaults" title="Click to Pong default Configurations" class="btn btn-outline-primary text-uppercase" data-reset>
					</section>
					<section id="submit-game" class="col-12 text-center">
						<input type="submit" value="Start Playing" title="Click to start the Game" class="btn btn-outline-primary text-uppercase" data-start style="font-family: 'Public Pixel', sans-serif;">
					</section>
				</form>
			</div>
		`;
	}

	assembleGame(data) {
		const selectedBallColor = document.querySelector(`#colorBallMarkers option[value="${data.ballColor}"]`);
		const selectedBallSize = document.querySelector(`#sizeBallMarkers option[value="${data.ballSize}"]`);
		const selectedCanvasSize = document.querySelector(`#colorCanvasMarkers option[value="${data.canvasColor}"]`);
		const selectedPaddlesColor = document.querySelector(`#colorPaddlesMarkers option[value="${data.paddlesColor}"]`);
		const selectedPaddlesSize = document.querySelector(`#sizePaddlesMarkers option[value="${data.paddlesSize}"]`);
		this.game.ball.color = selectedBallColor.innerHTML;
		this.game.ball.size = selectedBallSize.innerHTML;
		this.game.canvas.color = selectedCanvasSize.innerHTML;
		this.game.player1.color = this.game.player2.color = selectedPaddlesColor.innerHTML;
		this.game.player1.size = this.game.player2.size = selectedPaddlesSize.innerHTML;

	}
	
	addHandlerStartGame(handler) {
		document.addEventListener('click', e => {
			const input = e.target;
			if (!input.hasAttribute("data-start"))
				return ;
			e.preventDefault();
			const form = input.closest("form");
			const data = form ? Object.fromEntries(new FormData(form)) : {};
			this.assembleGame(data);
			handler(this.game);
		});
	}
	
	addHandlerResetGame(handler) {
		document.addEventListener('click', e => {
			const input = e.target;
			if (!input.hasAttribute("data-reset"))
				return ;
			e.preventDefault();
			this.game = DEFAULT_GAME_INFO;
			handler();
		});
	}
};

export default new CustomizationView();
