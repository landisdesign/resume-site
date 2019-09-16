import { Component, Input } from '@angular/core';

import { NavigationService } from '../services/navigation.service';

@Component({
	selector: 'res-nav-anchor',
	template: '<div id="{{ id }}"></div>'
})
export class NavAnchorComponent {
	@Input()	id:string = 'nav-anchor';

	constructor(private service:NavigationService) {
		service.navigationAnchorId = this.id;
	}
}
