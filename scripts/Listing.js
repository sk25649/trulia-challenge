import _ from 'lodash';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Listing.scss';

class Listing extends Component {
	render() {
		const addressParts = this.parseAddress(this.props.address);
		const built =
			!_.isEmpty(this.props.built) ?
				<span className="built">Build in {this.props.built}</span> : null;
		const sqft =
			!_.isEmpty(this.props.sqft) ?
				<li className="item">{this.props.sqft} sq ft</li> : null;
		const imgLink =
			!_.isEmpty(this.props.img) ? this.props.img : "../default.png";

		return (
			<div className="listing">
				<img src={imgLink} />
				<div className="descriptions">
					<span className="address texts">{addressParts[0]}</span>
					<span className="address texts">{addressParts[1]}</span>
					<span className="price texts">${Number(this.props.price).toLocaleString()}</span>
					<ul className="texts">
						<li>{this.props.beds} Beds</li>
						<li className="item">{this.props.baths} Baths</li>
						{sqft}
					</ul>
				</div>
				{built}
			</div>
		);
	}

	parseAddress = (address) => {
		const index = address.indexOf(','),
			  street = address.substring(0, index),
			  rest = address.substring(index + 1, address.length);
		return [street, rest];
	}
}

Listing.PropTypes = {
	address: PropTypes.string,
	price: PropTypes.string,
	beds: PropTypes.string,
	baths: PropTypes.string,
	sqft: PropTypes.string,
	img: PropTypes.string,
	url: PropTypes.string,
	built: PropTypes.string
};

export default Listing;
