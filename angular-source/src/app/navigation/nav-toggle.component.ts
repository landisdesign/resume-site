import { Component } from '@angular/core';

import { NavigationService } from '../services/navigation.service';

@Component({
	selector: 'res-nav-toggle',
	template: '<span class="link fas fa-bars" (click)="toggleNavigation()"></span>',
	styleUrls: ['./nav-toggle.component.css']
})
export class NavToggleComponent {

	constructor(private service:NavigationService) {}

	toggleNavigation() {
		// I'd rather grab an element ID than transfer an element reference cross-component and create a leak.
		const id = this.service.navigationAnchorId;
		if (id) {
			const anchor = document.getElementById(id);
			if (anchor) {
				this.service.setPosition(this.getPageTop(anchor));
			}
		}
		this.service.toggleVisibility();
	}

	private getPageTop(element:HTMLElement) {
		let top = 0;
		while (element !== null) {
			top += element.offsetTop;
			element = element.offsetParent as HTMLElement;
		}
		return top;
	}
}
