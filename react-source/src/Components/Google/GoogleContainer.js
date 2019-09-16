import { connect } from 'react-redux'
import Actions from '../../Redux/Actions';
import Google from './Google';

const
	googleSearchKey = '011383622957179664522:-yorextt_ze',
	googleAPIKey = 'AIzaSyBIUzYlw0WltElQwz1ox6QbdLWju0A5cic',
	googleURLBase = 'https://www.googleapis.com/customsearch/v1?'
;

function createQueryParams(query, type) {
	let params = ({
		q: query,
		cx: googleSearchKey,
		key: googleAPIKey,
		num: 10,
		safe: 'active',
	});
	
	if (type === 'image') {
		params.searchType = 'image';
	}
	
	return Object.keys(params).map(key => key + '=' + encodeURIComponent(params[key]) ).join('&');
}

function mapJSON(jsonText, resultsType) {
	const json = JSON.parse(jsonText);
	
	return {
		success: true,
		total: json.searchInformation.formattedTotalResults,
		items: json.items.map(item => {
			let mappedItem = {
				linkText: item.htmlTitle,
				linkUrl: resultsType === 'text' ? item.link : item.image.contextLink,
				content: resultsType === 'text' ? item.htmlSnippet : item.link
			};
			if (resultsType === 'image') {
				mappedItem.altText = item.snippet;
				mappedItem.errorSrc = item.image.thumbnailLink;
			}
			return mappedItem;
		})
	};
}

function sendXhr(value, type, dispatch) {

	const action = type === 'text' ? Actions.setTextResults : Actions.setImageResults;

	let xhr = new XMLHttpRequest();
	
	xhr.onload = function() {
		if (this.status === 200) {
			dispatch( action( mapJSON(this.responseText, type)));
		}
		else {
			this.onerror();
		}
	};
	xhr.onerror = function() {
		dispatch(action({
			success: false
		}));
	};
	
	xhr.open('GET', googleURLBase + createQueryParams(value, type) );
	xhr.send();
}

function mapStateToProps(state) {
	return Object.assign({}, state.search);
}

function mapDispatchToProps(dispatch) {
	return {
		queryDispatch: value => {
			dispatch(Actions.setSearchQuery(value));
			dispatch(Actions.setTextResults(null));
			dispatch(Actions.setImageResults(null));
			sendXhr(value, 'text', dispatch);
			sendXhr(value, 'image', dispatch);
		}
	}
}

const GoogleContainer = connect(mapStateToProps, mapDispatchToProps)(Google);

export default GoogleContainer;