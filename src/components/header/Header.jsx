import React from "react";
import {Filter} from "../filter";

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<h1>Reminder App</h1>
				<Filter/>
			</div>
		);
	}
}

