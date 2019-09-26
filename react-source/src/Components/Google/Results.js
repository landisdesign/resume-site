import React from 'react';
import PropTypes from 'prop-types';
import UtilityMethods from '../../common';


function resultsList(block, elementBase, type, json) {

	const elementItemBase = elementBase + '-item';

	let output;
	
	if (json) {
		if (json.success) {
			output = (<React.Fragment>{
				json.items.map((item, index) => (
					<div className={ UtilityMethods.bemClass(block, elementItemBase) } key={ index }>
						<h4 className={ UtilityMethods.bemClass(block, elementItemBase + '-title') }>
							<a className={ UtilityMethods.bemClass(block, elementItemBase + '-link') } href={ item.linkUrl } target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={ {__html: item.linkText} } />
						</h4>
						{
							type === 'text' ? (
								<p className={ UtilityMethods.bemClass(block, elementItemBase + '-text') } dangerouslySetInnerHTML={ { __html: item.content } } />
							)
							: (
								<img className={ UtilityMethods.bemClass(block, elementItemBase + '-image') } src={ item.content } alt={ item.snippet } ref={img => {if (img) img.errorSrc = item.errorSrc;}} onError={e => {e.target.src = e.target.errorSrc;}}/>
							)
						}
					</div>
				))
			}</React.Fragment>);
		}
		else {
			output = <div className={ UtilityMethods.bemClass(block, elementBase + '-error') }>Error: Results couldn’t be provided.</div>;
		}
	}
	// output will be empty if no JSON is available yet.

	return output;
}
	
function Results({block, elementBase, type, json}) {

	return (
		<div className={ UtilityMethods.bemClass(block, elementBase + '-list', (json === null) ? 'waiting' : null ) }>
			<h3 className={ UtilityMethods.bemClass(block, elementBase + '-list-title') }>{ type === 'text' ? 'Text' : 'Image'} results</h3>
			{ resultsList(block, elementBase, type, json) }
		</div>
	);
}

Results.propTypes = {
	block: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'image']).isRequired,
	json: PropTypes.object
};

Results.defaultProps = {
	json: null
}

export default Results;