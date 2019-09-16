import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchResults, SearchType } from '../services/google.service';
import { BemClassPipe } from '../shared/bemClass.pipe';

@Component({
	selector: 'res-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnChanges {
	_results:SearchResults;
	@Input() type:SearchType;
	@Input() results:SearchResults;

	title:string;

	listClass:string = 'list--waiting';

	ngOnInit() {
		this.title = this.type == SearchType.TEXT ? 'Text' : 'Image';
	}

	ngOnChanges(changes: SimpleChanges) {
		let results:SearchResults = changes.results.currentValue;
		if (results !== changes.results.previousValue) {
			this.listClass = (results === null || results === undefined ? 'list--waiting' : 'list');
		}
	}

	loadAlternate(event, alternateURL) {
		let img = event.target;
		if (img.src != alternateURL) { // intentionally taking advantage of character equality vs reference identity
			img.src = alternateURL;
		}
	}
}
