import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FooterModule } from './footer/footer.module';
import { GoogleModule } from './google/google.module';
import { HeaderModule } from './header/header.module';
import { LayoutModule } from './layout/layout.module';
import { NavigationModule } from './navigation/navigation.module';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FooterModule,
		GoogleModule,
		HeaderModule,
		HttpClientModule,
		LayoutModule,
		NavigationModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
