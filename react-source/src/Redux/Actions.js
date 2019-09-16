import ActionTypes from "./ActionTypes";

const Actions = {

	updateUser(userJSON) {
		return {
			type: ActionTypes.UPDATE_USER,
			userJSON: userJSON
		};
	},

	toggleNavigation() {
		return {
			type: ActionTypes.NAVIGATION_TOGGLE
		};
	},
	
	positionNavigation(pixels) {
		return {
			type: ActionTypes.NAVIGATION_POSITION,
			Y: pixels
		};
	},
	
	setNavigationAnchorId(id) {
		return {
			type: ActionTypes.NAVIGATION_SET_ANCHOR,
			anchorId: id
		};
	},
	
	setSearchQuery(text) {
		return {
			type: ActionTypes.SEARCH_SET_QUERY,
			query: text
		};
	},
	
	setImageResults(imageJson) {
		return {
			type: ActionTypes.SEARCH_SET_IMAGE_RESULTS,
			imageJson: imageJson
		};
	},
	
	setTextResults(textJson) {
		return {
			type: ActionTypes.SEARCH_SET_TEXT_RESULTS,
			textJson: textJson
		};
	},
};

export default Actions;