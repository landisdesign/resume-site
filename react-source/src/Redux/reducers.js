import ActionTypes from './ActionTypes';

const initialState = {
	navigation: {
		visible: false,
		Y: false,
		anchorId: "",
	},
	search: {},
	user: {
		name: '',
		titles: [],
		addresses: []
	}
}

export function user(state = initialState.user, action) {
	switch (action.type) {
		case ActionTypes.UPDATE_USER:
			return Object.assign({}, state, action.userJSON);
		default:
			return state;
	}
}

export function navigation(state = initialState.navigation, action) {
	switch (action.type) {
		case ActionTypes.NAVIGATION_TOGGLE:
			return Object.assign({}, state, {visible: !state.visible});
		case ActionTypes.NAVIGATION_POSITION:
			return Object.assign({}, state, {Y: action.Y});
		case ActionTypes.NAVIGATION_SET_ANCHOR:
			return Object.assign({}, state, {anchorId: action.anchorId});
		default:
			return state;
	}
}

export function search(state = initialState.search, action) {
	switch (action.type) {
		case ActionTypes.SEARCH_SET_QUERY:
			return Object.assign({}, state, {query: action.query});
		case ActionTypes.SEARCH_SET_IMAGE_RESULTS:
			return Object.assign({}, state, {imageJson: action.imageJson});
		case ActionTypes.SEARCH_SET_TEXT_RESULTS:
			return Object.assign({}, state, {textJson: action.textJson});
		default:
			return state;
	}
}