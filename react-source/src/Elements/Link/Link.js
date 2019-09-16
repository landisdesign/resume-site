import React from "react";
import PropTypes from "prop-types";
import UtilityMethods from "../../common.js";

const Link = ({
	block = "",
	element = "link",
	modifier = "",
	className = "",
	children,
	...tagProps
}) => {

	let bemClassName = UtilityMethods.bemClass(block, element, modifier);

	tagProps.className = UtilityMethods.appendClass(bemClassName, className);
	
	return <a {...tagProps}>{children}</a>
}

Link.propTypes = {
	block: PropTypes.string,
	element: PropTypes.string,
	modifier: PropTypes.string,
	className: PropTypes.string
}

export default Link;