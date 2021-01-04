import React from "react";
import {ListItem} from "../list-item";

const List = ({itemsData}) => {
	const elements = itemsData.map((item) => {
		const {id, ...restItemData} = item;
		return (
			<ListItem
				{...restItemData}
				key={id}
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



