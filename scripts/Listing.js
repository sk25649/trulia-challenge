import _ from 'lodash';
import React, { Component } from 'react';

import styles from './Listing.scss';

export default class Listing extends Component {
	render() {
		const addressParts = this.parseAddress(this.props.address);
		let built = null;
		if(!_.isEmpty(this.props.built)) {
			built = <span className="built">Build in {this.props.built}</span>
		}

		let sqft = null;
		if(!_.isEmpty(this.props.sqft)) {
			sqft = <li className="item">{this.props.sqft} sq ft</li>;
		}

		return (
			<div className="listing">
				<img src={this.props.img} />
				<div className="descriptions">
					<span className="address">{addressParts[0]}</span>
					<span className="address">{addressParts[1]}</span>
					<span className="price">${Number(this.props.price).toLocaleString()}</span>
					<ul>
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
