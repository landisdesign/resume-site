import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs'; // found this from https://rxjs-dev.firebaseapp.com/api/index/class/Observable docs
import { catchError, map } from 'rxjs/operators';

const
	googleURL = 'https://www.googleapis.com/customsearch/v1',
	googleParams = {
		cx: '011383622957179664522:-yorextt_ze',
		key: 'AIzaSyBIUzYlw0WltElQwz1ox6QbdLWju0A5cic',
		num: '10',
		safe: 'active',
	}
;

enum SearchType {
	TEXT = 'text',
	IMAGE = 'image'
};

interface GoogleResultsItem {
	htmlTitle:string,
	htmlSnippet:string,
	link:string,
	snippet: string,
	image?: { // only present in image searches
		contextLink:string,
		thumbnailLink:string
	}
}

interface GoogleResults {
	searchInformation: {
		formattedTotalResults:string
	},
	items: GoogleResultsItem[]
}

class SearchResultsItem {

	linkText:string;
	linkURL:string;
	content:string;
	altText:string;
	errorSRC:string;

	constructor(googleResult:GoogleResultsItem, searchType:SearchType) {
		this.linkText = googleResult.htmlTitle;
		this.linkURL = searchType === SearchType.TEXT ? googleResult.link : googleResult.image.contextLink;
		this.content = searchType === SearchType.TEXT ? googleResult.htmlSnippet : googleResult.link;

		if (searchType === SearchType.IMAGE) {
			this.altText = googleResult.snippet;
			this.errorSRC = googleResult.image.thumbnailLink;
		}
	}
}

class SearchResults {
	success:boolean;
	total:string;
	type:SearchResults;
	items:SearchResultsItem[];

	constructor(success:boolean, type?:SearchResults, total?:string){
		this.success = success;
		if (type !== undefined) {
			this.type = type;
		}
		if (total !== undefined) {
			this.total = total;
		}
	}
}

function resultsConverter(json:GoogleResults, resultsType):SearchResults {
	let result = new SearchResults(true, resultsType, json.searchInformation.formattedTotalResults);
	result.items = json.items.map( (item:GoogleResultsItem) => {
		return new SearchResultsItem(item, resultsType);
	} );
	return result;
}

const textResultsConverter = (json:GoogleResults, index:number) => resultsConverter(json, SearchType.TEXT);
const mapTextResults = map(textResultsConverter);

const imageResultsConverter = (json:GoogleResults, index:number) => resultsConverter(json, SearchType.IMAGE);
const mapImageResults = map(imageResultsConverter);

@Injectable({
	providedIn: 'root',
})
class GoogleService {
	constructor(private http:HttpClient){}

	getTextResults<SearchResults>(term:string) {
		return mapTextResults(this.http.get<GoogleResults>(googleURL, {params: {q: term, ...googleParams}}))
			.pipe(catchError(this.handleError));
	}

	getImageResults<SearchResults>(term:string) {
		return mapImageResults(this.http.get<GoogleResults>(googleURL, {params: {q: term, searchType: 'image', ...googleParams}}))
			.pipe(catchError(this.handleError));
	}

	private handleError<SearchResults>(error: HttpErrorResponse) {
		return throwError(new SearchResults(false));
	}
}

export { SearchType, SearchResults, SearchResultsItem, GoogleService };