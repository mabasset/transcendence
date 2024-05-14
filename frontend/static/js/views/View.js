export default class {

	constructor() {
		this._parentElement = document.getElementById("mainViewPlaceholder");
		this._data = undefined;
	}

	_generateMarkup() {
		return ``;
	}

	async render(data) {
		this._data = data;
		const markup = this._generateMarkup();
		this._parentElement.innerHTML = '';
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	update(data) {
		this._data = data;
		const newMarkup = this._generateMarkup();
		const newDom = document.createRange().createContextualFragment(newMarkup);
		const newElements = Array.from(newDom.querySelectorAll('*'));
		const currElements = Array.from(this._parentElement.querySelectorAll('*'));

		for (let i = 0; i < newElements.length && i < currElements.length; i++) {
			const newEl = newElements[i];
			const currEl = currElements[i];
			if (currEl && !newEl.isEqualNode(currEl))
				currEl.innerHTML = newEl.innerHTML;
		}
	}
};
