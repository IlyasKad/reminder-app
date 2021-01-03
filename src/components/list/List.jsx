import React from "react";
import {ListItem} from "../list-item";

export default class List extends React.Component {
	render() {
		return (
			<div className="list">
				<ListItem/>
				<ListItem/>
				<ListItem/>
				<ListItem/>
			</div>
		);
	}
}