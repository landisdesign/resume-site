import { Component, Input } from '@angular/core';

/*
	While ColumnsComponent defines the container as a flex container, this
	component does all the work. It simply takes the order and width input
	attributes and makes CSS based upon their values. Thank goodness for SASS.
*/

@Component({
	selector: 'res-column',
	template: "<ng-content></ng-content>",
	styleUrls: ['./column.component.css']
})
export class ColumnComponent {
	@Input() order:string;
	@Input() width:string;
}
