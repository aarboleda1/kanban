import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
	static propTypes = {
		
	}
	render(){
		return (
			<div className="header">
				<span>
					<h4>{'Dashboard'}</h4>
				</span>
			</div>
		)
	}
}