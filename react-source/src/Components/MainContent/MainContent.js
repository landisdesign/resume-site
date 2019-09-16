import React from 'react';

import './MainContent.css';

function MainContent({children, ...props}) {

	props.className = 'c-main-content ' + (props.className || '');

	return (
		<div {...props}>{children}</div>
	);
}

export default MainContent;