import { Component } from '@angular/core';

/*
	Using flexbox layout is extremely frustrating with Angular, because of the
	intervening host/shadow elements between the flex container and the intended
	flex columns. Applying classes programmatically to the columns is impossible
	so there's no way to translate component inputs to classes.

	The alternative I've chosen is to use attribute selectors to grab the
	component inputs and forgo internal divs altogether. This requires each
	column to self-identify their widths, which I would have preferred doing
	as a 'layout type' input on this component. But oh well.

	The ColumnsComponent CSS is limited to defining this component as having
	flex layout. Most of the heavy work is in ColumnComponent.
*/
@Component({
	selector: 'res-columns',
	template: "<ng-content></ng-content>",
	styleUrls: ['./columns.component.css']
})
export class ColumnsComponent {}
