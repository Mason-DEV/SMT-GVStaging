import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Game from "./Components/Game";
import Player from "./Components/Player";
import ModeSelector from "./Components/ModeSelector";

class App extends Component {
	constructor(props) {
		super(props);

		//Binds
		this.ModeSelected = this.ModeSelected.bind(this);

		this.state = {
			Mode: 1
		};
	}
	ModeSelected = mode => {
		this.setState({
			Mode: mode
		});
	};

	render() {
		console.log(this.state.Mode);
		return (
			<div style={{ background: "#343A40" }}>
				<React.Fragment>
					<Header mode={this.ModeSelected} selected={this.state.Mode} />
					<ModeSelector mode={this.ModeSelected} selected={this.state.Mode} />
					{this.state.Mode === 2 ? <Game /> : <Player />}
				</React.Fragment>
			</div>
		);
	}
}

export default App;
