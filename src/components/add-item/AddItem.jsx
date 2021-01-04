import React from "react";

export default class AddItem extends React.Component {
	state = {
		text: '',
	}

	onLabelChange = (event) => {
		this.setState({
			text: event.target.value,
		});
	}

	onSubmit = (event) => {
		const {text} = this.state;
		event.preventDefault();
		if (text) {
			this.props.onItemAdded(text);
			this.setState({
				text: ''
			});
		}
	}

	render() {
		const {text} = this.state;
		return (
			<form
				id="item-adding"
				className="ui input"
				onSubmit={this.onSubmit}
			>
				<div id="item-adding__input" className="ui input">
					<input
						type="text"
						placeholder="Add task..."
						onChange={this.onLabelChange}
						value={text}
					/>
				</div>
				<button
					className="ui secondary basic button"
				>Add
				</button>
			</form>
		);
	}
}