import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { BemClassPipe } from '../shared/bemClass.pipe';

@Component({
	selector: 'res-query',
	templateUrl: './query.component.html',
	styleUrls: ['./query.component.css']
})
export class QueryComponent {

	constructor() {
		this.setClasses();
	}

	queryForm:FormGroup = new FormGroup({
		query: new FormControl('')
	});

	get query():FormControl {
		return <FormControl>this.queryForm.get('query');
	}

	submitted:boolean = false;
	transitted:boolean = false;
	@Output() search:EventEmitter<string> = new EventEmitter<string>();
	queryBoxClass:{};

	setClasses() {
		this.queryBoxClass = {
			'container': this.submitted,
			'container--initial': !this.submitted,
			'transitted': this.transitted
		};
	}

	submitForm(e) {
		if (this.query.valid) {
			this.search.emit( (<string>this.query.value).substring(0, 2000) );
			this.submitted = true;
			this.setClasses();
			setTimeout(()=>{this.transitted = true; this.setClasses()}, 1500);
		}
	}
}
