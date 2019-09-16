import { Pipe, PipeTransform } from '@angular/core';

function isValidTerm(term):boolean {
	return (term !== null) && (term !== undefined) && (term !== '');
}

@Pipe({name: "bemClass"})
export class BemClassPipe implements PipeTransform {

	transform(block: string, element: string, modifier: string) {
		let className = block;
		if (isValidTerm(element)) {
			className += '__' + element;
		}
		if (isValidTerm(modifier)) {
			className += '--' + modifier;
		}
		return className;
	}

}