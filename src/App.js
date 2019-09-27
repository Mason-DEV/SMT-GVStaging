import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
	constructor() {
		super();
		this.state = {
			message: "",
			data: {}
		};
	}

	componentDidMount() {
		axios.get("/api/testData").then(res => this.setState({ data: res.data }));
	}

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					{/* <h2>{this.state.message}</h2> */}
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
