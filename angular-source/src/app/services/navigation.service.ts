import { Injectable } from '@angular/core';

import { Observable, Observer, of } from 'rxjs'; // found this from https://rxjs-dev.firebaseapp.com/api/index/class/Observable docs

class Navigation {
	current:boolean;

	constructor(public text:string, public link:string) {
		this.current = link === null;
	}
}

@Injectable({
	providedIn: 'root',
})
class NavigationService {
	constructor(){}

	/* Navigation retrieval */

	private navigation:Navigation[] = [
		new Navigation('About this site', '../'),
		new Navigation('What I offer', '../offer'),
		new Navigation('Java experience and philosophy', '../java'),
		new Navigation('Resume', '../resume'),
		new Navigation('React example', '../react'),
		new Navigation('React example 2', '../react2'),
		new Navigation('Angular example', null)
	];

	getNavigation<Navigation>() {
		return of(this.navigation);
	}

	/* Navigation anchor provision. Used in navigation-toggle to find anchor for positioning menu */

	navigationAnchorId:string;

	/* Position retrieval */

	private position:number;
	private positionObservers:Observer<number>[] = [];

	setPosition(newPosition:number) {
		this.position = newPosition;
		for (let observer of this.positionObservers) {
			observer.next(this.position);
		}
	}

	getPosition() {
		return Observable.create(this.positionSubscriptionCreation);
	}

	positionSubscriptionCreation = (observer:Observer<number>) => {
		this.positionObservers.push(observer);

		if (this.position !== undefined) {
			observer.next(this.position);
		}

		return function unsubscribe() {
			let i = this.positionObservers.indexOf(observer);
			if (i !== -1) {
				this.positionObservers.splice(i, 1);
			}
		}
	};

	/* Visibility retrieval */

	private visible:boolean = false; // Navigation always starts closed
	private visibilityObservers:Observer<boolean>[] = [];

	toggleVisibility() {
		this.visible = !this.visible;
		for (let observer of this.visibilityObservers) {
			observer.next(this.visible);
		}
	}

	getVisibility() {
		return Observable.create(this.visibilitySubscriptionCreation);
	}

	visibilitySubscriptionCreation = (observer:Observer<boolean>) => {
		this.visibilityObservers.push(observer);

		observer.next(this.visible);

		return function unsubscribe() {
			let i = this.visibilityObservers.indexOf(observer);
			if (i !== -1) {
				this.visibilityObservers.splice(i, 1);
			}
		}
	};
}

export { NavigationService, Navigation };