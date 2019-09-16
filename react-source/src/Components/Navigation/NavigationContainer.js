import { connect } from 'react-redux';

import Navigation from './Navigation';

function mapStateToProps(state) {
	let props = {
		visible: state.navigation.visible,
	};

	if (state.navigation.Y !== false) {
		props.position = state.navigation.Y;
	}

	return props;
}

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;