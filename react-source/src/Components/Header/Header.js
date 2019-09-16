import React from 'react';
import PropTypes from 'prop-types';
import AddressLine from '../../Elements/AddressLine/AddressLine';
import NavigationToggle from '../Navigation/NavigationToggle';
import UtilityMethods from '../../common.js';

import './Header.css';

const
	block = 'c-header',
	elementTitle = 'title',
	elementUser = 'user',
	elementName = 'name',
	elementContact = 'contact',
	elementNavigation = 'navigation'
;

const Header = ({name, titles, addresses}) => {
	
	function loadUser(name, titles) {

		let titleOutput = titles.map( (title, i) =>
			<p className={ UtilityMethods.bemClass(block, elementTitle) } key={ 'title' + i }>{title}</p>
		);
		
		return (
			<div className={ UtilityMethods.bemClass(block, elementUser) }>
				<h1 className={ UtilityMethods.bemClass(block, elementName) }>{name}</h1>
				{ titleOutput }
			</div>
		);
	}

	function loadNavToggleAndAddresses(addresses) {

		let addressOutput = [];
		
		addresses.forEach( (address, i) => {
			if (address && address.type && address.address) {
				addressOutput.push(
					<AddressLine block={block} type={address.type} key={ 'address' + i }>{address.address}</AddressLine>
				);
			}
		});
		
		return (
			<div className={ UtilityMethods.bemClass(block, elementContact) }>
				<p className={ UtilityMethods.bemClass(block, elementNavigation) }><NavigationToggle block={block}/></p>
				{ addressOutput }
			</div>
		);
	}

	return (
		<header className={block}>
			{ loadUser( name, titles ) }
			{ loadNavToggleAndAddresses( addresses ) }
		</header>
	);
}

Header.propTypes = {
	name: PropTypes.string,
	titles: PropTypes.arrayOf(PropTypes.string),
	addresses: PropTypes.arrayOf(PropTypes.shape({
		type: AddressLine.propTypes.type,
		address: AddressLine.propTypes.address
	}))
};

Header.defaultProps = {
	name: '',
	titles: [],
	addresses: []
};

export default Header;