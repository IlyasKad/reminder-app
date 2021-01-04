import React from "react";
import {ListItem} from "../list-item";

const List = ({itemsData, onDeleted, onToggleDone, onToggleImportant}) => {
	const elements = itemsData.map((item) => {
		const {id, ...restItemData} = item;
		return (
			<ListItem
				{...restItemData}
				key={id}
				onDeleted={() => onDeleted(id)}
				onToggleDone={() => onToggleDone(id)}
				onToggleImportant={() => onToggleImportant(id)}
			/>
		);
	});

	return (
		<div className="list">
			{elements}
		</div>
	);
}

export default List;



