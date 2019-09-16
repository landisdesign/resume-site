import React from 'react';
import { connect } from 'react-redux';
import UtilityMethods from '../../common';

import './Footer.css';

const block = 'c-footer';

function mapStateToProps(state) {
	return {
		name: state.user.name
	};
}

function render({name}) {
	let now = (new Date()).getFullYear();
	return (
		<footer className={block}>
			<div className={ UtilityMethods.bemClass(block, 'padding') }></div>
			<p className={ UtilityMethods.bemClass(block, 'copyright') }>Copyright &copy;{ now } {name}</p>
		</footer>
	);
}

export default connect(mapStateToProps)(render);