import React from "react";

export default class Statistics extends React.Component {
	render() {
		const {itemsData} = this.props;
		const countDone = itemsData.filter((item) => item.done).length;
		const countToDo = itemsData.length - countDone;
		return (
			<div id="statistics">
				Count of to do: {countToDo}, count of done: {countDone}
			</div>
		);
	}
}

