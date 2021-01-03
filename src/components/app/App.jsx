import React from "react";
import {Header} from "../header";
import {Search} from "../search";
import {List} from "../list";
import {Statistics} from "../statistics";
import {AddItem} from "../add-item";

export default class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header/>
				<Statistics/>
				<Search/>
				<List/>
				<AddItem/>
			</div>
		);
	}
}

