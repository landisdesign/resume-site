"use strict";

/*
	Some basic formatting conventions I use:
	
	* I'm a big fan of using "var" and the closing semicolon as block indent markers. It
	  lets me keep one variable per line, removes the syntax clutter surrounding the
	  actual declarations, and the indent highlights the entire block of variables. I
	  follow similar conventions when there is a long jQuery chain in the code.

	* I prefix my jQuery object variables with $, to clarify that these are jQuery objects
	  and the focus of DOM manipulation (versus, say, data  or data structures).

	* I'm pretty liberal with white space. When opening or closing parentheses are stacked
	  together, I find surrounding inner expressions with white space helps me focus on
	  one nested expression at a time.
*/

/*
 *	An Element with data-toggle-destination-id will toggle a "collapsed" class on both
 *	this element and the element with the destination ID. If this element also has a
 *	data-toggle-bounds-id attribute, the destination element will be moved to the top edge
 *	of the element that has the bounds ID.
 */
$("[data-toggle-destination-id]").on("click", function() {

	var
		$toggle = $(this),
		destinationID = $toggle.data("toggleDestinationId"),
		$menu = destinationID && $("#" + destinationID),
		boundsID = $toggle.data("toggleBoundsId"),
		$bounds = boundsID && $("#" + boundsID)
	;
	
	if ($menu && $menu.length) {
		if ( $toggle.hasClass("collapsed") ) {
			if ($bounds && $bounds.length) {
				var boundsTop = $bounds.offset().top;
				$menu.css("top", boundsTop + "px");
			}
			$menu.removeClass("collapsed");
		}
		else if ( !$menu.hasClass("collapsed") ) {
			$menu.addClass("collapsed");
		}
		$toggle.toggleClass("collapsed");
	}
	
	return false;
});

$("[data-point=current-year]").text((new Date()).getFullYear());