import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

const ListItem = ({label, important = false}) => {
	const itemStyle = {
		color: important ? 'tomato' : 'black',
	};

	return (
		<div id="list__item" className="ui message">
			<p id="list__item-text" style={itemStyle}>
				{label}
			</p>
			<div id="list__item-icons">
				<i id="list__item-icon">
					<LabelImportantIcon/>
				</i>
				<i id="list__item-icon">
					<DeleteIcon/>
				</i>
			</div>
		</div>
	);
}

export default ListItem;

