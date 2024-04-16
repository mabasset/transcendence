export default class {
	constructor() {
		this._x = 0;
		this._y = 0;
		this._sizeRatio = 0;
		this._speedRatio = 0;
		this._speed = 0;
		this._direction = { x: 0, y: 0 };
		this._color = undefined;
	}

	init(info) {
		this._speedRatio = info.speed;
		this._color = info.color;
		this._sizeRatio = info.size;
	}

	resize(canvas) {
		this._speed = canvas.width * this._speedRatio / 100;
	}

	move(delta) {
		this._x += this._direction.x * this._speed * delta;
		this._y += this._direction.y * this._speed * delta;
	}

	get x() {
		return this._x;
	}
	get y() {
		return this._y;
	}
	get sizeRatio() {
		return this._sizeRatio;
	}
	get speedRatio() {
		return this._speedRatio;
	}
	get speed() {
		return this._speed;
	}
	get direction() {
		return this._direction;
	}
	get color() {
		return this._color;
	}

	set x(value) {
		this._x = value;
	}
	set y(value) {
		this._y = value;
	}
	set sizeRatio(value) {
		this._sizeRatio = value;
	}
	set speedRatio(value) {
		this._speedRatio = value;
	}
	set speed(value) {
		this._speed = value;
	}
	set direction(value) {
		this._direction = value;
	}
	set color(value) {
		this._color = value;
	}
}