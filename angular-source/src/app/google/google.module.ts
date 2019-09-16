import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { GoogleComponent } from './google.component';
import { QueryComponent } from './query.component';
import { ResultsComponent } from './results.component';

@NgModule({
	declarations: [
		GoogleComponent,
		QueryComponent,
		ResultsComponent
	],
	exports: [
		GoogleComponent,
		QueryComponent,
		ResultsComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SharedModule
	],
	providers: [],
})
export class GoogleModule { }
