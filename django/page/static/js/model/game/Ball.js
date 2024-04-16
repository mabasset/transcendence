import GameObj from "./GameObj.js";

export default class extends GameObj {
	constructor() {
		super();
		this._radius = 0;
	}

	init(canvas, info) {
		super.init(info);
		this.resize(canvas);
		this.reset(canvas);
	}

	resize(canvas) {
		super.resize(canvas);
		this._radius = canvas.width * this._sizeRatio / 100;
		if (this._x + this._radius > canvas.width)
			this._x = canvas.width - this._radius;
		if (this._y + this._radius > canvas.height)
			this._y = canvas.height - this._radius;
	}

	reset(canvas) {
		this._x = canvas.width / 2;
		this._y = canvas.height / 2;
		this._direction.y = 0;
		this._direction.x = Math.random() < 0.5 ? 1 : -1;
	}
	

	get radius() {
		return this._radius;
	}

	set radius(value) {
		this._radius = value;
	}
}