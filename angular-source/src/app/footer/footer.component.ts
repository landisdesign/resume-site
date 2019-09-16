import { Component, OnInit } from '@angular/core';

import { User, UserService } from '../services/user.service';

@Component({
	selector: 'res-footer',
	template: `
		<footer class="footer">
			<div class="padding"></div>
			<p class="copyright">Copyright &copy;2018 {{ name }}</p>
		</footer>
	`,
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	// data
	name:string;

	service:UserService;

	constructor(service:UserService) {
		this.service = service;
	}

	ngOnInit() {
		const userSetter = (userData:User) => this.name = userData.name;
		this.service.getUser().subscribe(userSetter, userSetter);
	}
}
