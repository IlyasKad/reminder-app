import React from "react";

export default class Search extends React.Component {
	state = {
		text: ''
	};

	onChange = (event) => {
		const e = event.target.value;
		this.setState({text: e});
		this.props.onSearchChange(e);
	}

	render() {
		return (
			<div id="search" className="ui input">
				<div id="search__input" className="ui input">
					<input
						type="text"
						placeholder="Search task..."
						onChange={this.onChange}
						value={this.state.text}
					/>
				</div>
			</div>
		);
	}
}

