import React, { Component } from 'react';

import Listing from './Listing.js';
import batman from './batmanRealty.json';
import superman from './supermanRealty.json';
import SortRule from './SortRule.js';
import SortButtons from './SortButtons.js'
import SortDirection from './SortDirection.js';

import styles from './App.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortRule: SortRule.PRICE,
			direction: SortDirection.DESC,
			listings: null
		};
	}

	componentWillMount = () => {
		const listings = _.assign(this.parseBatman(batman), this.parseSuperman(superman.items));
		const sorted = _.sortBy(_.values(listings), [this.state.sortRule.name.toLowerCase()]);
		this.setState({
			listings: sorted.reverse()
		});
	}

	render = () => {
		let listingComps = [];
		for(let key in this.state.listings) {
			listingComps.push(<Listing key={key} {...this.state.listings[key]} />);
		}

		return (
			<div className="widget-container">
				<h3>Awesome Listing Widget </h3>
				<SortButtons onClick={this.onClick} />
				<div className="listing-container">
					{listingComps}
				</div>
			</div>
		);
	}

	parseBatman = (listings) => {
		for(const key in listings) {
			listings[key].price = listings[key].cost.replace("," , "");
			listings[key].address = key;
			listings[key].sqft = listings[key].sq_ft;
			listings[key].built = null;
			delete listings[key].cost
			delete listings[key].sq_ft;
		}
		return listings;
	}

	parseSuperman = (listings) => {
		let properties = {};
		listings.forEach(listing => {
			properties[listing.address] = {
				address: listing.address,
				price: listing.price,
				beds: listing.beds,
				baths: listing.baths,
				sqft: listing.sqft,
				img: listing.thumb,
				url: listing.url,
				built: listing.built
			}

		});
		return properties;
	}

	onClick = (sortRule, direction) => {
		const listings = _.sortBy(_.values(this.state.listings), [sortRule.name.toLowerCase()]);
		if(_.isEqual(direction, SortDirection.DESC)) {
			listings.reverse();
		}
		this.setState({
			sortRule,
			direction,
			listings
		});
	}
}

export default App;
