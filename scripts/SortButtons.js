import _ from 'lodash';

import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

import SortRule from './SortRule.js';
import SortDirection from './SortDirection.js';

const LABLES = ["Price", "Beds", "Sq. ft."];

class SortButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: SortRule.PRICE,
			sortDirection: SortDirection.DESC
		};
	}

	render = () => {
		const chevronClassName =
			_.isEqual(this.state.sortDirection, SortDirection.ASC) ?
				"fa fa-chevron-up" : "fa fa-chevron-down";

		let buttonComps = [];
		for(const rule of SortRule.enumValues) {
			if(_.isEqual(this.state.selected, rule)) {
				buttonComps.push(
					<Button
						key={rule.name}
						value={rule.name}
						bsSize="large"
						active
					>
						{LABLES[rule.ordinal]}
						<i className={chevronClassName} aria-hidden="true" />
					</Button>
				);
			} else {
				buttonComps.push(
					<Button
						key={rule.name}
						value={rule.name}
						bsSize="large"
					>
						{LABLES[rule.ordinal]}
					</Button>
				);
			}
		}

		return (
			<ButtonGroup onClick={this.onChange}>
				{buttonComps}
			</ButtonGroup>
		);
	}

	onChange = (event) => {
		const newRule = SortRule[event.target.value];
		if(_.isEqual(newRule, this.state.selected)) {
			if(_.isEqual(this.state.sortDirection, SortDirection.DESC)) {
				// change sort direction
				this.props.onClick(newRule, SortDirection.ASC);
				this.setState({selected: newRule, sortDirection: SortDirection.ASC});
			} else {
				this.props.onClick(newRule, SortDirection.DESC);
				this.setState({selected: newRule, sortDirection: SortDirection.DESC});
			}
		} else {
			this.props.onClick(newRule, SortDirection.DESC);
			this.setState({selected: newRule, sortDirection: SortDirection.DESC});
		}
	}

}

SortButtons.PropTypes = {
	onClick: PropTypes.func
}

export default SortButtons;
