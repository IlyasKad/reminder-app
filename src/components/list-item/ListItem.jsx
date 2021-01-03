import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

export default class ListItem extends React.Component {
	render() {
		return (
			<div id="list__item" className="ui message">
				<p id="list__item-text">
					Hello world
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
}

