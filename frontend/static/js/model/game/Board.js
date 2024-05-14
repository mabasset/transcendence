export default class {
	constructor() {
		this._color = undefined;
		this._domElement = undefined;
		this._width = undefined;
		this._height = undefined;
		this._stroke = {
			color: undefined,
			size: 0,
			radius: 0,
		};
	}

	init(info) {
		this._domElement = info.domElement;
		this._color = info.color;
		this._stroke.color = info.stroke.color;
		this.resize();
	}

	resize() {
		const rect = this._domElement.getBoundingClientRect();
		this._domElement.width = rect.width;
		this._domElement.height = rect.height;
		this._width = this._domElement.width;
		this._height = this._domElement.height;	
		this._stroke.size = rect.width / 100;
		this._stroke.radius = rect.width * 10 / 100;
	}


	get color() {
		return this._color;
	}
	get domElement() {
		return this._domElement;
	}
	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}
	get stroke() {
		return this._stroke;
	}
	
	set color(value) {
		this._color = value;
	}
	set domElement(value) {
		this._domElement = value;
	}
	set width(value) {
		this._width = value;
	}
	set height(value) {
		this._height = value;
	}
	set stroke(value) {
		this._stroke = value;
	}
}