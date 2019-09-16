import React from "react";
import PropTypes from "prop-types";
import ResponsiveLink from "../ResponsiveLink/ResponsiveLink";

AddressLine.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
	address: PropTypes.string,
	type: PropTypes.oneOf(["email", "phone"]).isRequired,
	block: PropTypes.string,
	modifier: PropTypes.string
};

AddressLine.defaultProps = {
	block: "",
	modifier: ""
};

const addressTypeData = {
	email: {
		protocol: "mailto",
		iconText: "✉️"
	},
	phone: {
		protocol: "tel",
		iconText: "📞️"
	}
};

function AddressLine({
	address,
	type,
	block,
	modifier,
	children
}){
	const addressElement = "address";
	
	let
		iconText = addressTypeData[type].iconText,
		addressHref = addressTypeData[type].protocol + ":" + (address || children),
		blockPrefix = block && block + "__",
		modifierSuffix = modifier && "--" + modifier,
		paragraphClass = blockPrefix + addressElement + modifierSuffix
	;
	
	return <p className={paragraphClass}><ResponsiveLink block={block} elementBase={addressElement} modifier={modifier} href={addressHref} iconText={iconText}>{children}</ResponsiveLink></p>
}

export default AddressLine;