import React from 'react';
import UtilityMethods from '../../common';

import Query from './Query';
import Results from './Results';

import './Google.css';

const
	block = 'c-google',
	resultsElementBase = 'results',
	columnClass = UtilityMethods.bemClass(block, resultsElementBase + '-column')
;

function Google({query, imageJson, textJson, queryDispatch}) {

	return (
		<div className={ UtilityMethods.bemClass(block, null, (query ? null : 'initial') ) }>
			<h1 className={ UtilityMethods.bemClass(block, 'title') }>Search via Google APIs Using React</h1>
			<p className={ UtilityMethods.bemClass(block, 'description') }>This page is built using React and Redux to retrieve the first 10 search and image results from Google. The source files are accessible <a href="../react-source" className={UtilityMethods.bemClass(block, 'link')}>here</a>.</p>
			<Query block={block} query={query} queryDispatch={queryDispatch}/>
			{
				query && (
					<div className={ UtilityMethods.bemClass(block, resultsElementBase) }>
						<h2 className={ UtilityMethods.bemClass(block, resultsElementBase + '-title') }>Results for “{query}”</h2>
						<div className={columnClass}><Results block={block} elementBase={resultsElementBase} type='text' json={textJson}/></div>
						<div className={columnClass}><Results block={block} elementBase={resultsElementBase} type='image' json={imageJson}/></div>
					</div>
				)
			}
		</div>
	);
}

export default Google;