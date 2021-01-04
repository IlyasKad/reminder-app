import React from "react";
import {Header} from "../header";
import {Search} from "../search";
import {List} from "../list";
import {Statistics} from "../statistics";
import {AddItem} from "../add-item";

export default function App() {
	const itemsData = [
		{id: 1, label: 'Drink Coffee', important: false, done: false},
		{id: 2, label: 'Drink Tea', important: true, done: false},
		{id: 3, label: 'Drink Milk', important: false, done: false},
	];

	return (
		<div className="container">
			<Header/>
			<Statistics/>
			<Search/>
			<List
				itemsData={itemsData}
			/>
			<AddItem/>
		</div>
	);
}


