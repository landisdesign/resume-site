import React from 'react';
import { connect } from 'react-redux';

import Actions from '../../Redux/Actions';
import Header from './Header';

const jsonUrl = './person.json'; // should be accessed in the directory as the app

function loadError(errorHeader, errorMessage) {
	return {
		name: '',
		titles: [
			errorHeader,
			errorMessage
		]
	}
}

function mapStateToProps(state) {
	return Object.assign({}, state.user);
}

function mapDispatchToProps(dispatch) {
	return {
		dispatchUserJSON: userJSON => dispatch(Actions.updateUser(userJSON))
	};
}

class HeaderContainer extends React.Component {
	
	componentDidMount() {
		let
			container = this,
			xhr = new XMLHttpRequest();
		;
		xhr.responseType = 'text';
		xhr.onload = function(){

			let data;

			if (this.status === 200) {
				try {
					data = JSON.parse(this.responseText);
				}
				catch (e) {
					data = loadError('Error parsing data:', this.responseText);
				}
			}
			else { // whatever is graceful according to business
				data = loadError('Error loading data:', this.responseText);
			}
			
			container.props.dispatchUserJSON(data);
		};
		
		xhr.onerror = function() {
			container.props.dispatchUserJSON(
				loadError('Error connecting:', this.responseText)
			);
		}
		
		xhr.open('GET', jsonUrl, true);
		xhr.send();
	}
	
	render() {
		return <Header name={this.props.name} titles={this.props.titles} addresses={this.props.addresses} />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);