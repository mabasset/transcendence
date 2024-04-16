import NavView from "./NavView.js"
import View from "./View.js";

class OtherUsersView extends View {

	constructor() {
		super();
		this._navView = new NavView("otherUsers");
	}

	_generateMarkup() {
		return `
			<div class="container">
				${this._navView._generateMarkup()}
				<div class="col-12 col-md-9 mt-5 ps-3">
					<h2 class="text-primary-emphasis">Search Users</h2>
					<p class="fst-italic">This is your friend list. You may add a user to the list by entering his username.</p>
					<div class="row">
						<div class="col-12 col-md-6 mb-4">
							<form method="POST" action="/block-user">
								<div class="input-group">
									<input class="form-control shadow-none" type="text" name="username" placeholder="Username">
									<input type="submit" value="ADD" id="" class="btn btn-primary">
								</div>
							</form>
						</div>
						<div class="table-container col-12 col-md-6 border ps-0 overflow-y-auto">
							<form method="POST" action="">
								<table class="table table-sm align-middle">
									<thead class="table-dark">
										<tr>
											<th scope="col" colspan="2">Friend List</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>arbutnar</td>
											<td class="text-end">
												<button type="submit" class="btn btn-outline-primary">REMOVE</button>
											</td>
										</tr>
										<tr>
											<td>arbutnar</td>
											<td class="text-end">
												<button type="submit" class="btn btn-outline-primary">REMOVE</button>
											</td>
										</tr>
										<tr>
											<td>arbutnar</td>
											<td class="text-end">
												<button type="submit" class="btn btn-outline-primary">REMOVE</button>
											</td>
										</tr>
										<tr>
											<td>arbutnar</td>
											<td class="text-end">
												<button type="submit" class="btn btn-outline-primary">REMOVE</button>
											</td>
										</tr>
										<tr>
											<td>arbutnar</td>
											<td class="text-end">
												<button type="submit" class="btn btn-outline-primary">REMOVE</button>
											</td>
										</tr>
										<tr>
											<td>arbutnar</td>
											<td class="text-end">
												<button type="submit" class="btn btn-outline-primary">REMOVE</button>
											</td>
										</tr>
										<tr>
											<td>arbutnar</td>
											<td class="text-end">
												<button type="submit" class="btn btn-outline-primary">REMOVE</button>
											</td>
										</tr>
									</tbody>
								</table>
							</form>
						</div>
					</div>
					<h2 class="pt-3 text-primary-emphasis">Manage Blocked Users</h2>
					<p class="fst-italic">This is your blocked users. You may add a user to the list by entering his username.</p>
					<ul>
						<li>They can not play with you.
						</li><li>You cannot contact each other via Zong chat.
					</ul>
					<div class="row pb-2">
						<div class="col-12 col-md-6 mb-4">
							<form method="POST" action="/block-user">
								<div class="input-group">
									<input class="form-control shadow-none" type="text" name="username" placeholder="Username">
									<input type="submit" value="BLOCK" id="" class="btn btn-primary">
								</div>
							</form>
						</div>
						<div class="table-container col-12 col-md-6 border ps-0 overflow-y-auto">
							<form method="POST" action="unblock-user">
								<table class="table table-sm align-middle">
									<thead class="table-dark">
										<tr>
											<th scope="col" colspan="2">Blocked Users</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>mabasset</td>
											<td class="text-end">
												<button type="submit" class="btn btn-outline-primary">UNBLOCK</button>
											</td>
										</tr>
										<tr>
											<td>mabasset</td>
											<td class="text-end">
												<button type="submit" class="btn btn-outline-primary">UNBLOCK</button>
											</td>
										</tr>
										<tr>
											<td>mabasset</td>
											<td class="text-end">
												<button type="submit" class="btn btn-outline-primary">UNBLOCK</button>
											</td>
										</tr>
										<tr>
											<td>mabasset</td>
											<td class="text-end">
												<button type="submit" class="btn btn-outline-primary">UNBLOCK</button>
											</td>
										</tr>
									</tbody>
								</table>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		`;
	}
};

export default new OtherUsersView();