import { Component, Input } from '@angular/core';

import { GoogleService, SearchResults, SearchType } from '../services/google.service';
import { BemClassPipe } from '../shared/bemClass.pipe';

@Component({
	selector: 'res-google',
	templateUrl: './google.component.html',
	styleUrls: ['./google.component.css']
})
export class GoogleComponent {

	searchTerm:string;

	textSearchResults:SearchResults;
	imageSearchResults:SearchResults;

	constructor(private service:GoogleService){}

	private showTextResults(results:SearchResults) {
		this.textSearchResults = results;
	}

	private showImageResults(results:SearchResults) {
		this.imageSearchResults = results;
	}

	updateSearch(searchTerm:string) {
		this.searchTerm = searchTerm;
		this.textSearchResults = null;
		this.imageSearchResults = null;

		const textSetter = results => {this.textSearchResults = results;};
		const imageSetter = results => {this.imageSearchResults = results;};

		this.service.getTextResults(searchTerm).subscribe(textSetter, textSetter);
		this.service.getImageResults(searchTerm).subscribe(imageSetter, imageSetter);
	}
}
