import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationModule } from '../navigation/navigation.module';

import { AddressLineComponent } from './address-line.component';
import { HeaderComponent } from './header.component';

@NgModule({
	declarations: [
		AddressLineComponent,
		HeaderComponent
	],
	exports: [
		AddressLineComponent,
		HeaderComponent
	],
	imports: [
		CommonModule,
		NavigationModule
	],
	providers: [],
})
export class HeaderModule { }
