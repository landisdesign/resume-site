import { Component, OnInit } from '@angular/core';

import { NavToggleComponent } from '../navigation/nav-toggle.component';
import { User, UserService } from '../services/user.service';

@Component({
	selector: 'res-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	// BEM classes
	headerClass:string = 'c-header';
	headerUserClass:string = this.headerClass + '__user';
	headerNameClass:string = this.headerClass + '__name';
	headerTitleClass:string = this.headerClass + '__title';
	headerContactClass:string = this.headerClass + '__contact';
	headerNavigationClass:string = this.headerClass + '__navigation';
	headerNavigationLinkClass:string = this.headerNavigationClass + '-link';
	headerAddressClass:string = this.headerClass + '__address';
	headerAddressLinkClass:string = this.headerAddressClass + '-link';
	headerAddressTextClass:string = this.headerAddressClass + '-text';
	headerAddressIconClass:string = this.headerAddressClass + '-icon';

	// data
	name:string;
	titles:string[] = [];
	addresses:{}[] = [];

	service:UserService;

	constructor(service:UserService) {
		this.service = service;
	}

	ngOnInit() {
		const userSetter = (userData:User) => Object.assign(this, { ...userData });
		this.service.getUser().subscribe(userSetter, userSetter);
	}
}
