import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavAnchorComponent } from './nav-anchor.component';
import { NavToggleComponent } from './nav-toggle.component';
import { NavigationComponent } from './navigation.component';

@NgModule({
	declarations: [
		NavAnchorComponent,
		NavToggleComponent,
		NavigationComponent
	],
	exports: [
		NavAnchorComponent,
		NavToggleComponent,
		NavigationComponent
	],
	imports: [
		CommonModule
	],
	providers: [],
})
export class NavigationModule { }
