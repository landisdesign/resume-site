/*
	Note that all of the layout components simply pass their content through.
	They are used for implementing CSS layouts that wrap the enclosing content.
	The CSS is applied directly to the component's host element.
*/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColumnComponent } from './column.component';
import { ColumnsComponent } from './columns.component';
import { MainComponent } from './main.component';

@NgModule({
	declarations: [
		ColumnComponent,
		ColumnsComponent,
		MainComponent
	],
	exports: [
		ColumnComponent,
		ColumnsComponent,
		MainComponent
	],
	imports: [
		CommonModule
	],
	providers: [],
})
export class LayoutModule { }
