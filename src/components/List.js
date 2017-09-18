import React, { Component } from 'react';
// import './stylesheets/main.css';

export default class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: [
				'apply to jobs',
				'workout',
				'code'
			]
		}
	}
  render() {
		const items = this.state.items.map((item, index) => {
			return <li key={index}>{item}</li>
		})
    return (
      <div className="o-layout">
			  <ul>
					{items}
				</ul>
      </div>
    );
  }
}

