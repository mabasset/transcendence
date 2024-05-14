import NavView from "/static/js/views/NavView.js"
import View from "/static/js/views/View.js";

class MessagesView extends View {

	constructor() {
		super();
		this._navView = new NavView("Messages");
	}

	_generateFormattedDateMarkup(date) {
		const html = `
			<span>
				${date.toLocaleDateString(undefined, { dateStyle: "short" })}
			</span>
			<span class="d-none d-sm-inline ms-1">
				${date.toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric" })}
			</span>
		`;
		return html;
	}

	_generateChatsListMarkup() {
		let html = "";
		this._data.chats.forEach(chat => {
			html += `
				<a href="/${chat.user}" class="list-group-item list-group-item-action d-flex py-3">
					<div class="d-flex flex-column flex-grow-1 pe-3" style="min-width:0">
						<div class="d-flex justify-content-between">
							<span class="d-flex align-items-center fw-bold">
								${chat.user}
							</span>
							<span class="text-muted ms-2 fw-normal">
								${this._generateFormattedDateMarkup(chat.messages[chat.messages.length - 1].date)}
							</span>
						</div>
						<div class="d-flex justify-content-between">
							<span class="text-muted text-truncate me-2">
								${chat.messages[chat.messages.length - 1].text}
							</span>
						</div>
					</div>
					<div class="d-flex justify-content-end align-items-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
						</svg>
					</div>
				</a>
			`
		});
		return html;
	}

	_generateMarkup() {
		const html = `
			<div class="container mt-3  pb-5">
				${this._navView._generateMarkup()}
					<div class="col-12 col-md-8 col-lg-9">
						<form class="d-flex align-items-center mb-4 flex-wrap">
							<label for="username" class="me-4">New message</label>
							<div>
								<div class="input-group">
									<input id="username" type="text" name="username" class="form-control" placeholder="Username" autocomplete="off" required>
									<button type="button" class="btn btn-dark text-uppercase">Contact</button>
								</div>
							</div>
						</form>
						<div class="list-group mb-4">
							${this._generateChatsListMarkup()}
						</div>
					</div>
				</div>
			</div>
		`;
		return html;
	}
};

export default new MessagesView();