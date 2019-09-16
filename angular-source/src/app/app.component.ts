import { Component } from '@angular/core';

import { GoogleComponent } from './google/google.component';


import { ColumnComponent } from './layout/column.component';
import { ColumnsComponent } from './layout/columns.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './layout/main.component';

import { NavAnchorComponent } from './navigation/nav-anchor.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Michael Landis, Web Developer and Technical Translator';
}
