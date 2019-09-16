import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BemClassPipe } from './bemClass.pipe';

@NgModule({
	declarations: [
		BemClassPipe
	],
	exports: [
		BemClassPipe
	],
	imports: [
		CommonModule
	],
	providers: [],
})
export class SharedModule { }
