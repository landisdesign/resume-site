import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../Redux/Actions';
import UtilityMethods from '../../common';

const elementNavigationLink = "navigation-link";

function mapStateToProps(state, ownProps) {
	return {
		className: UtilityMethods.bemClass(ownProps.block, elementNavigationLink) + ' fas fa-bars',
		...state.navigation
	};
}

function render({dispatch, className, visible, Y, anchorId}) {
	return (
		<span className={ className } onClick={e => {
			if (Y === false && anchorId) {
				let anchorElement = document.getElementById(anchorId);
				if (anchorElement !== null) {
					let menuPosition = UtilityMethods.offset(anchorElement);
					dispatch( Actions.positionNavigation(menuPosition.top) );
				}
			}
			dispatch( Actions.toggleNavigation() );
		}}></span>
	);
}

const NavigationToggle = connect(mapStateToProps)(render);

export default NavigationToggle;