import React from "react";
import PropTypes from 'prop-types';
import UtilityMethods from "../../common.js";

import "./Navigation.css";

// The following could come from a back-end CMS, inserted similarly to the personal data in HeaderContainer.

const navigationData = [
	{
		text: "About this site",
		href: "../",
		current: false
	},
	{
		text: "What I offer",
		href: "../offer",
		current: false
	},
	{
		text: "Java experience and philosophy",
		href: "../java",
		current: false
	},
	{
		text: "Resume",
		href: "../resume",
		current: false
	},
	{
		text: "React example",
		href: "../react",
		current: true
	},
	{
		text: "Angular Example",
		href: "../angular",
		current: false
	}
];

const
	block = "c-navigation",
	elementList = "list",
	elementListItem = "list-item",
	elementLink = "link",
	modifierCurrent = "current"
;

Navigation.propTypes = {
	position: PropTypes.number,
	visible: PropTypes.bool,
};

function Navigation({position, visible}) {

	// This was getting a bit much for an expression.
	function buildLink(item, index) {
		let
			className = UtilityMethods.bemClass(block, elementLink, item.current ? modifierCurrent : ""),
			link = item.current ? <strong className={className}>{item.text}</strong> : <a href={item.href} className={className}>{item.text}</a>
		;

		return <li className={ UtilityMethods.bemClass(block, elementListItem) } key={index}>{link}</li>;
	}
	
	let styles = {};
	
	if (position !== false) {
		styles.top = position + "px";
	}

	return (
		<nav className={ visible ? block : UtilityMethods.appendClass("collapsed", block) } style={styles}>
			<ul className={ UtilityMethods.bemClass(block, elementList) }>
				{ navigationData.map( buildLink ) }
			</ul>
		</nav>
	);
}

export default Navigation;