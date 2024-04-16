import GameObj from "./GameObj.js";

export default class extends GameObj {
	constructor(side) {
		super();
		this._width = 0;
		this._height = 0;
		this._ai = false;
		this._side = side;
		this._score = {
			x: 0,
			y: 0,
			size: 0,
			value: 0,
			font: undefined,
		}
	}

	init(canvas, info) {
		super.init(info);
		this._sizeRatio = info.size;
		this._ai = info?.ai ?? this._ai;
		this._score.font = "Courier New";
		this.resizeScore(canvas);
		this.resize(canvas);
		this.reset(canvas);
	}

	resizeScore(canvas) {
		const sizeRatio = 10;
		this.score.size = canvas.height * sizeRatio / 100;
		this._score.y = canvas.height * 2 / 100 + this.score.size;
		const x = canvas.width / 3;
		this._score.x = this._side === "left" ? x : x * 2;
	}

	resize(canvas) {
		super.resize(canvas);
		this._height = canvas.width * this._sizeRatio / 100;
		this._width = canvas.width / 100;
		const x = canvas.width * 2 / 100;
		this._x = this._side === "left" ? x : canvas.width - this._width - x;
		if (this._y + this._height > canvas.height)
			this._y = canvas.height - this._height;
	}

	reset(canvas) {
		this._y = canvas.height / 2 - this._height / 2;
		this._direction = { x: 0, y: 0 };
	}
	

	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}
	get side() {
		return this._side;
	}
	get ai() {
		return this._ai;
	}
	get score() {
		return this._score;
	}

	set width(value) {
		this._width = value;
	}
	set height(value) {
		this._height = value;
	}
	set side(value) {
		this._side = value;
	}
	set ai(value) {
		this._ai = value;
	}
	set score(value) {
		this._score = value;
	}
}