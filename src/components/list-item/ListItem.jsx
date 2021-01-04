import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

const ListItem = ({label, done, important, onDeleted, onToggleDone, onToggleImportant}) => {
	let classNames = "";
	if (done) {
		classNames += " line-through";
	}

	if (important) {
		classNames += " line-bold";
	}

	return (
		<div id="list__item" className="ui message">
			<p id="list__item-text" className={classNames}
			   onClick={onToggleDone}
			>
				{label}
			</p>
			<div id="list__item-icons">
				<i id="list__item-icon">
					<LabelImportantIcon
						onClick={onToggleImportant}
					/>
				</i>
				<i id="list__item-icon">
					<DeleteIcon
						onClick={onDeleted}
					/>
				</i>
			</div>
		</div>
	);
}

export default ListItem;


