import React from "react";

export default class AddItem extends React.Component {
	render() {
		return (
			<div id="item-adding">
				<div id="item-adding__input" className="ui input">
					<input type="text"/>
				</div>
				<button className="ui secondary basic button">Add</button>
			</div>
		);
	}
}