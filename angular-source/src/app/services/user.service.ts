import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { of, throwError } from 'rxjs'; // found this from https://rxjs-dev.firebaseapp.com/api/index/class/Observable docs
import { catchError } from 'rxjs/operators';

const userURL = 'assets/person.json';

enum AddressType {
	EMAIL = 'email',
	PHONE = 'phone'
}

interface Address {
	type:AddressType,
	address:string,
	addressLink?:string
}

interface User {
	name?:string,
	titles?:string[],
	addresses?:Address[]
}

@Injectable({
	providedIn: 'root',
})
class UserService {
	constructor(private http:HttpClient){}
	private savedUser:User;

	private isUserCached():boolean {
		if (this.savedUser === null || this.savedUser === undefined) {
			return false;
		}
		if (this.savedUser.name === null || this.savedUser.name === undefined || this.savedUser.name == '') {
			return false;
		}
		return true;
	}

	getUser<User>() {
		if (this.isUserCached()) {
			return of(this.savedUser);
		}
		else {
			return this.http.get(userURL).pipe(catchError(this.handleError));
		}
	}

	private handleError<SearchResults>(error: HttpErrorResponse) {
		return throwError({
			name:'',
			titles:[],
			addresses:[]
		} as User);
	}
}

export { Address, AddressType, User, UserService };