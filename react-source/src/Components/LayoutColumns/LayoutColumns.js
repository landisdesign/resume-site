import React from "react";
import PropTypes from "prop-types";

import "./LayoutColumns.css";

LayoutColumns.propTypes = {
	kind: PropTypes.oneOf(["25-75"]).isRequired,
	children: PropTypes.arrayOf(PropTypes.element).isRequired,
	className: PropTypes.string
	// other properties will be passed through
}

// Used to error-check number of Column/ children
const columnProps = {
	"25-75": {
		columns: 2
	}
};

const
	blockClass = "l-columns",
	columnElement = "__column--"
;

const appendClass = (class1, class2) => ((class1 || "") + " " + (class2 || "")).trim(); // || "" makes falsy arguments empty strings.

function LayoutColumns({kind, children, className, ...tagProps}) {

	if (children.length !== columnProps[kind].columns) { // It should be elements from PropTypes check. Let it burn if it isn't.
		throw new Error("LayoutColumns needs " + columnProps[kind].columns + " columns; " + children.length + " found");
	}

	className = appendClass(blockClass, className);
	return (
		<div className={ className } {...tagProps}>
		{
			React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					baseClassName: blockClass + columnElement + kind
				});
			})
		}
		</div>
	);
}

Column.propTypes = {
	order: PropTypes.string,
};

function Column({children, order, className, baseClassName, ...tagProps}) {
	className = appendClass(className, baseClassName + "-" + order);
	
	return <div className={ className } {...tagProps}>{ children }</div>;
}

export {LayoutColumns, Column};