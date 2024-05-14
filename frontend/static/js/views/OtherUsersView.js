import NavView from "/static/js/views/NavView.js"
import View from "/static/js/views/View.js";

class OtherUsersView extends View {

	constructor() {
		super();
		this._navView = new NavView("Other users");
	}

	_generateFriendList() {
		if (this._data.user.friends.length === 0) return ;
		let html = `
			<thead class="table-dark">
				<tr>
					<th scope="col" class="text-center">
						<span class="fw-medium">Friend List</span>
					</th>
					<th>
					</th>
				</tr>
			</thead>
		`;
		html += "<tbody>";
		this._data.user.friends.forEach(friend => {
			html += `
				<tr>
					<td class="text-start ps-2 align-middle">
						${friend}
					</td>
					<td class="text-end pe-2">
						<button type="submit" name="" value="${friend}" class="btn btn-outline-dark">
							<span class="fw-medium text-uppercase">Remove</span>
						</button>
					</td>
				</tr>
			`
		});
		html += "</tbody>";
		return html;
	}

	_generateMarkup() {
		const html = `
			<div class="container mt-3 pb-5">
				${this._navView._generateMarkup()}
					<div class="col-12 col-md-8 col-lg-9">
						<h2>Manage Your Friend List</h2>
						<div class="row">
							<div class="col-12 col-lg-6 mb-4">
								<form id="add-friend-form">
									<div class="input-group">
										<input type="text" name="username" placeholder="Username" aria-label="Username" autocomplete="off" class="form-control" required>
										<button type="submit" class="btn btn-dark">
											<span class="fw-medium text-uppercase">Add</span>
										</button>
									</div>
								</form>
							</div>
							<div class="col-12 col-lg-6">
								<form id="add-friend-form">
									<table class="table">
										${this._generateFriendList()}
						  			</table>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		`
		return html;
	}

/*	_generateOtherUsersList() {
		let html = "";
		this._data.allUsers.forEach( user => {
			html += `
				<li id="user-template" class="list-group-item border border-start-0 border-top-0 px-0 border-end-0">
					<div class="d-flex align-items-center text-center">
						<div class="col">
							<img src="/static/media/profile_images/${user.username}_profile_image.jpg?=${new Date().getTime()}" width="50" height="50" class="rounded-circle" />
						</div>
						<div class="col">${user.username}</div>
						<div class="col">${user.alias === user.username ? "/ /" : `${user.alias}`}</div>
					</div>
				</li>
			`
		});
		return html;
	}

	_generateFriendListMarkup() {
		let html = "";
		this._data.friends.forEach( friend => {
			html += `
				<tr style="vertical-align: middle;">
					<td style="background-color: transparent;">
						<img src="/static/media/profile_images/${friend.username}_profile_image.jpg?=${new Date().getTime()}" width="50" height="50" class="rounded-circle" alt="Avatar"/>
					</td>
					<td style="background-color: transparent;">${friend.username}</td>
					<td style="background-color: transparent;">${friend.alias === friend.username ? "/ /" : `${friend.alias}`}</td>
					<td style="background-color: transparent;">${friend.status}</td>
					<td style="background-color: transparent;">
						<button class="btn btn-dark rounded-pill">Remove</button>
					</td>
				</tr>
			`
		});
		return html;
	}

	_generateMarkup() {
		return `
			<div class="container mt-3  pb-5">
				${this._navView._generateMarkup()}
					<div class="col-lg-9 col-md-8 col-12 mt-md-4">
						<div class="d-flex flex-column row-gap-3">
							<section class="list-group row-gap-3">
								<a role="button" class="list-group-item px-md-2 px-0 border-0" data-bs-toggle="modal" data-bs-target="#search-other-users" style="background-color: transparent;" data-search>
									<div class="d-flex flex-md-row flex-column">
										<div class="col-xl-3 col-md-4 col-12 mb-2 mb-md-0">
											<span class="mb-2 mb-md-0 text-uppercase text-muted">
												<small>Search</small>
											</span>
										</div>
										<div class="col-xl-9 col-md-8 col-12">
											<div class="d-flex justify-content-between align-items-center">
												<span class="col-xl-8">
													Manage your friend list by adding or removing other users
												</span>
												<span class="ps-3">
													<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
														<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
													</svg>
												</span>
											</div>
										</div>
									</div>
								</a>
							</section>
							<section>
								<div class="border border-1 rounded-2 w-100 overflow-auto" style="max-height: 25rem;">
									<table class="table table-responsive table-hover border-1 m-0">
										<thead class="text-center">
											<tr class="">
												<th class="bg-transparent fw-normal">
													<span class="mb-0 text-uppercase text-muted">
														<small>
															<small>Picture</small>
														</small>
													</span>
												</th>
												<th class="bg-transparent fw-normal">
													<span class="mb-0 text-uppercase text-muted">
														<small>
															<small>Username</small>
														</small>
													</span>
												</th>
												<th class="bg-transparent fw-normal">
													<span class="mb-0 text-uppercase text-muted">
														<small>
															<small>Alias</small>
														</small>
													</span>
												</th>
												<th class="bg-transparent fw-normal">
													<span class="mb-0 text-uppercase text-muted">
														<small>
															<small>Status</small>
														</small>
													</span>
												</th>
												<th class="bg-transparent fw-normal"></th>
											</tr>
										</thead>
										<tbody class="text-center">
											${this._generateFriendListMarkup()}
										</tbody>
									</table>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
			<div class="modal fade" id="search-other-users" tabindex="-1" aria-labelledby="search-other-users" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5">Search</h1>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<div class="mb-3">
								Look at other users, manage your friend list by adding or removing them, and view their aliases and online status
							</div>
							<div class="d-flex bg-dark text-white text-uppercase fw-normal rounded-top-2 p-2 text-center">
								<span class="col mb-0">
									<small>Picture</small>
								</span>
								<span class="col mb-0">
									<small>Username</small>
								</span>
								<span class="col mb-0">
									<small>Alias</small>
								</span>
							</div>
							<ul class="list-group text-center border border-1 rounded-bottom-2 rounded-top-0">
								${this._generateOtherUsersList()}
							</ul>
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

<div class="col-4">
	<div class="d-flex justify-content-center w-100">
		<div class="w-100">
			<div class="d-flex">
				<span class="input-group-text rounded-end-0 rounded-bottom-0">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
					</svg>
				</span>
				<input id="search-bar" type="search" placeholder="search via username" class="form-control w-100 border-1 rounded-2 rounded-start-0 rounded-bottom-0" name="search-bar" style="box-shadow: none; border: 1px solid lightgrey" />
			</div>
			<ul id="users-list" class="list-group overflow-auto border border-1 rounded-top-0 w-100 p-0 pt-3" style="max-height: 400px;">
				<template id="user-template" class="list-group-item pe-1 d-none">
					<div class="d-flex align-items-center border border-bottom-1 border-start-0 border-top-0 border-end-0 py-1">
						<div class="col text-center pe-1" data-user-image>
							<img width="60" height="60" class="rounded-circle" />
						</div>
						<div class="col" data-user-username></div>
						<div class="col text-center" data-user-is-friend>
							<button class="btn btn-primary border rounded-pill px-3"></button>
						</div>
					</div>
				</template>
			</ul>
		</div>
	</div>
</div> */
	
	// renderOtherUsersList(users) {
	// 	const userItemTemplate = document.querySelector("#user-template");
	// 	const list = document.querySelector("#users-list");
	// 	[...list.children].forEach(child => {
	// 		if (child !== userItemTemplate) {
	// 			list.removeChild(child);
	// 		}
	// 	});
	// 	const listItems = users.map(user => {
	// 		const listItem = userItemTemplate.content.cloneNode(true).children[0];
	// 		const username = listItem.querySelector("[data-user-username]");
	// 		const profileImage = listItem.querySelector("[data-user-image]");
	// 		username.textContent = user.username;
	// 		profileImage.firstElementChild.src = `/static/media/profile_images/${username.textContent}_profile_image.jpg?=${new Date().getTime()}`;
	// 		list.append(listItem);
	// 		return { username: user.username, element: listItem };
	// 	});
	// 	document.addEventListener("input", e => {
	// 		const input = e.target.closest("#search-bar");
	// 		if (!input)
	// 			return ;
	// 		const value = input.value;
	// 		listItems.forEach(item => {
	// 			item.element.classList.toggle("d-none", !item.username.includes(value));
	// 		});
	// 	});
	// }

	// addHandlerSearchOtherUsers(handler) {
	// 	document.addEventListener("click", e => {
	// 		const input = e.target.closest("#search-bar");
	// 		if (!input)
	// 			return ;
	// 		const value = input.value;
	// 		listItems.forEach(item => {
	// 			item.element.classList.toggle("d-none", !item.username.includes(value));
	// 		});
	// 	});
	// }

	addHandler(handler) {
		document.addEventListener("submit", e => {
			const form = e.target;
			if (form.id !== "add-friend-form") return ;
			e.stopPropagation();
			e.preventDefault();
			const formData = new FormData(form);
			handler(formData.get("username"));
		});
	}
};

export default new OtherUsersView();