import React from "react";
import {Header} from "../header";
import {Search} from "../search";
import {List} from "../list";
import {Statistics} from "../statistics";
import {AddItem} from "../add-item";
import {Filter} from "../filter";

export default class App extends React.Component {
	id = 0;
	state = {
		itemsData: [
			this.createTaskItem('Drink Coffee'),
			this.createTaskItem('Drink Milk'),
			this.createTaskItem('Drink Tea'),
		],
		text: '',
		filter: 'all'
	};

	createTaskItem(label) {
		return {
			id: this.id++,
			label: label,
			important: false,
			done: false
		};
	}

	deleteItem = (id) => {
		this.setState(({itemsData}) => {
			const index = itemsData.findIndex((item) => item.id === id);
			return {
				itemsData: [
					...itemsData.slice(0, index),
					...itemsData.slice(index + 1)
				]
			};
		});
	}

	addItem = (text) => {
		this.setState(({itemsData}) => {
			const tempArray = [...itemsData, this.createTaskItem(text)];
			return {
				itemsData: tempArray,
			}
		})
	};

	toggleProperty(arr, id, prop) {
		const index = arr.findIndex((item) => item.id === id);
		const oldItem = arr.find((item) => item.id === id);
		const newItem = {...oldItem, [prop]: !oldItem[prop]};
		return [
			...arr.slice(0, index),
			newItem,
			...arr.slice(index + 1)
		];
	}

	onToggleDone = (id) => {
		this.setState(({itemsData}) => {
			return {
				itemsData: this.toggleProperty(itemsData, id, 'done')
			};
		});
	};

	onToggleImportant = (id) => {
		this.setState(({itemsData}) => {
			return {
				itemsData: this.toggleProperty(itemsData, id, 'important')
			};
		});
	};

	onSearchChange = (text) => {
		this.setState({
			text: text
		});
	}

	searchItems = (itemsData, text) => {
		if (text) {
			return itemsData.filter((item) => item.label.toLowerCase().includes(text.toLowerCase()));
		}
		return itemsData;
	}

	filterItems = (itemsData, filter) => {
		switch (filter) {
			case 'all':
				return itemsData;
			case 'active':
				return itemsData.filter((item) => !item.done);
			case 'done':
				return itemsData.filter((item) => item.done);
			default:
				return itemsData;
		}
	}

	onChangeFilter = (filter) => {
		this.setState({
			filter: filter
		});
	}

	render() {
		const {itemsData, text, filter} = this.state;
		const visibleItems = this.filterItems(this.searchItems(itemsData, text), filter);

		return (
			<div className="container">
				<div className="header">
					<Header/>
					<Filter onChangeFilter={this.onChangeFilter} filter={filter}/>
				</div>
				<Statistics
					itemsData={itemsData}
				/>
				<Search
					onSearchChange={this.onSearchChange}
				/>
				<List
					itemsData={visibleItems}
					onDeleted={this.deleteItem}
					onToggleDone={this.onToggleDone}
					onToggleImportant={this.onToggleImportant}
				/>
				<AddItem
					onItemAdded={this.addItem}
				/>
			</div>
		);
	}
}


