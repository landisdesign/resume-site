import { Component, OnInit, Input } from '@angular/core';

import { Navigation, NavigationService } from '../services/navigation.service';

@Component({
	selector: 'res-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

	@Input() position:number;
	@Input() visible:boolean;
	navigation:Navigation[];

	constructor(private service:NavigationService) {}

	ngOnInit() {
		this.service.getNavigation().subscribe((navData) => this.navigation = navData);
		this.service.getPosition().subscribe((top) => this.position = top);
		this.service.getVisibility().subscribe((visible) => this.visible = visible);
	}
}
