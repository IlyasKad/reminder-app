import React from "react";

export default class Filter extends React.Component {

	buttons = [
		{name: 'all', label: 'All'},
		{name: 'active', label: 'Active'},
		{name: 'done', label: 'Done'},
	];

	render() {
		const {onChangeFilter, filter} = this.props;
		const className = "ui secondary basic button";
		const buttons = this.buttons.map((button) => {
			return (
				<button
					id="filter__btn"
					className={filter !== button.name ? className : className + " active"}
					onClick={() => onChangeFilter(button.name)}
					key={button.name}>
					{button.label}
				</button>
			);
		});

		return (
			<div className="filter">
				{buttons}
			</div>
		);
	}
}

