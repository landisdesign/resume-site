import { Component, Input } from '@angular/core';

import { Address, AddressType } from '../services/user.service';

class AddressTypeAttribute {
	constructor(public icon:string, public protocol:string){}
}

const AddressTypeAttributes = {
	[AddressType.EMAIL]: new AddressTypeAttribute('✉️', 'mailto:'),
	[AddressType.PHONE]: new AddressTypeAttribute('📞️', 'tel:')
};

@Component({
	selector: 'res-address-line',
	template: `
		<p class="address">
			<a class="link" [href]="link"><span class="icon" [innerHtml]="icon"></span><span class="text" [innerHtml]="text"></span></a>
		</p>
	`,
	styleUrls: ['./address-line.component.css']
})
export class AddressLineComponent {

	@Input() set address(address:Address) {
		if (address.type) {
			let attributes = AddressTypeAttributes[address.type];
			this.icon = attributes.icon;
			this.text = address.address;
			this.link = address.addressLink || (attributes.protocol + this.text);
		}
	}

	icon:string;
	text:string;
	link:string;
}
