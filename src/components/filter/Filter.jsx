import React from "react";

export default class Filter extends React.Component {
	render() {
		return (
			<div className="filter">
				<button id="filter__btn" className="ui secondary basic button">All</button>
				<button id="filter__btn" className="ui secondary basic button">Active</button>
				<button id="filter__btn" className="ui secondary basic button">Done</button>
			</div>
		);
	}
}

