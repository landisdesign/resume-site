import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Actions from '../../Redux/Actions';

function renderNavigationAnchor({id, dispatch}) {
	dispatch(Actions.setNavigationAnchorId(id));
	return <div id={id}></div>;
}

const NavigationAnchor = connect()(renderNavigationAnchor);

NavigationAnchor.propTypes = {
	id: PropTypes.string.isRequired
};

export default NavigationAnchor;