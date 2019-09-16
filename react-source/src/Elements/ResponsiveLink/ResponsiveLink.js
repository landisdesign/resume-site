import React from "react";
import PropTypes from "prop-types";
import Link from "../Link/Link";

ResponsiveLink.propTypes = {
	block: PropTypes.string,
	elementBase: PropTypes.string.isRequired,
	modifier: PropTypes.string,
	iconClassName: PropTypes.string,
	iconText: PropTypes.string
}

ResponsiveLink.defaultProps = {
	block: "",
	modifier: "",
	iconClassName: "",
	iconText: ""
};

function ResponsiveLink({
	block = "",
	elementBase,
	modifier = "",
	iconClassName = "",
	iconText = "",
	children,
	...tagProps
}){

	let
		blockBase = block && block + "__",
		modifierBase = modifier && "--" + modifier,
		iconClass,
		textClass,
		linkElement
	;
	
	linkElement = elementBase + "-link";
	
	iconClass = blockBase + elementBase + "-icon" + modifierBase;
	if (iconClassName) {
		iconClass += " " + iconClassName;
	}
	
	textClass = blockBase + elementBase + "-text" + modifierBase;
	
	return <Link block={block} element={linkElement} modifier={modifier} {...tagProps}><span className={iconClass}>{iconText}</span><span className={textClass}>{children}</span></Link>
}

export default ResponsiveLink;