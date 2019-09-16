import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { GoogleService } from './google.service';
import { NavigationService, Navigation } from './navigation.service';
import { UserService } from './user.service';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule
	],
	providers: [],
})
export class ServicesModule { }
