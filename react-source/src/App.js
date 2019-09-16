import React, { Component } from 'react';
import HeaderContainer from './Components/Header/HeaderContainer';
import {LayoutColumns, Column} from './Components/LayoutColumns/LayoutColumns';
import NavigationAnchor from './Components/Navigation/NavigationAnchor';
import NavigationContainer from './Components/Navigation/NavigationContainer';
import MainContent from './Components/MainContent/MainContent';
import GoogleContainer from './Components/Google/GoogleContainer';
import Footer from './Components/Footer/Footer';

import './App.css';

class App extends Component {

	/*
		While the navigation location makes sense from an accessibility perspective (last
		in source) it makes the navigation cross several components, which sucks. The
		toggle is in HeaderContainer, the navigation is in Navigation, LayoutColumns
		defines an ID associated with a value in HeaderContainer, and HeaderContainer
		defines an ID associated with Navigation.

		A mess.

		The cleanest alternative is to move the navigation to the first column, above the
		main content. This would all the navigation to show and hide in the right place
		simply based on its location in the rendering tree, but is a pretty significant
		accessibility cost. I'd want to check with UX before suggesting it.
	*/	   
	   
	render() {
		return (
			<div>
				<HeaderContainer />
				<NavigationAnchor id="nav-anchor"/>
				<LayoutColumns kind="25-75">
					<Column order="2">
						<MainContent>
							<GoogleContainer/>
						</MainContent>
					</Column>
					<Column order="1">
						<NavigationContainer/>
					</Column>
				</LayoutColumns>
				<Footer/>
			</div>
		);
	}
}

export default App;