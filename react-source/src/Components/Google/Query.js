import React from 'react';
import PropTypes from 'prop-types';
import UtilityMethods from '../../common';

export default class Query extends React.Component {

	static propTypes = {
		query: PropTypes.string,
		queryDispatch: PropTypes.func.isRequired,
		block: PropTypes.string.isRequired
	};

	static defaultProps = {
		query: ''
	};

	queryInput;
	queryButton;

	setQueryButton = (input) => {
		this.queryButton = input;
	};

	setQueryInput = (input) => {
		this.queryInput = input;
	};

	toggleButton = () => {
		if ( this.queryInput.value.length ) {
			this.queryButton.removeAttribute('disabled');
		}
		else {
			this.queryButton.setAttribute('disabled', true);
		}
	};

	submitQuery = (e) => {
		e.preventDefault();
		let value = this.queryInput.value;
		if (value === '') {
			alert('Please enter a query before submitting.');
			return;
		}
		if (value.length > 2048) {
			value.length = 2048; // sensible truncation
		}
		this.props.queryDispatch(value);
	};

	render() {
		const
			query = this.props.query,
			block = this.props.block,

			queryElementBase = 'query',
			anchorElement = queryElementBase + '-anchor',
			labelElement = queryElementBase + '-label',
			inputElement = queryElementBase + '-input',
			buttonElement = queryElementBase + '-button',
			labelModifier = query ? null : 'initial'
		;

		if (query) {
			setTimeout( () => {
				this.queryButton.className += ' transitted';
			}, 1500); // remove transition property from button to permit instant disabled presentation
		}

		return (
			<div className={ UtilityMethods.bemClass(block, anchorElement, labelModifier) }>
				<div className={ UtilityMethods.bemClass(block, queryElementBase, labelModifier) }>
					<form action="#" onSubmit={ this.submitQuery }>
						<label className={ UtilityMethods.bemClass(block, labelElement, labelModifier) } htmlFor="query-input">Enter search term:</label>
						<input className={ UtilityMethods.bemClass(block, inputElement, labelModifier) } id="query-input" defaultValue={ query } ref={ this.setQueryInput } onChange={ this.toggleButton }/>
						<input className={ UtilityMethods.bemClass(block, buttonElement, labelModifier) } disabled type='submit' value='Search' ref={ this.setQueryButton } />
					</form>
				</div>
			</div>
		);
	}
}
