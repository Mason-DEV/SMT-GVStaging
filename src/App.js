import React, { Component } from "react";
import "./App.css";
//import axios from "axios";

import  Header  from './Components/Header';
import Home from './Components/Home';
import { Container } from "semantic-ui-react";

class App extends Component {
	constructor() {
		super();
		//Binds
		this.toggle = this.toggle.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);

		//States
		this.state = {
			dropdownOpen: false,
			message: "",
			data: {},
			collapsed: true,
		};
	}

	//Functions
	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	toggleNavbar() {
		this.setState(prevState => ({
		  collapsed: !prevState.collapsed
		}));

	  }

	//Mount
	componentDidMount() {
		//axios.get("/api/testData").then(res => this.setState({ data: res.data }));
	}
	getDate(minusDays) {
		var today = new Date();
		today.setDate(today.getDate() - minusDays);

		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!

		var yyyy = today.getFullYear();
		if (dd < 10) {
			dd = "0" + dd;
		}
		if (mm < 10) {
			mm = "0" + mm;
		}
		var todayT = mm + "/" + dd + "/" + yyyy;

		return todayT;
	}

	render() {
		console.log(this.state);
		return (
			<div style={{background: "#343A40"}}>
			<React.Fragment >
				<Header/>
					<Container fluid>
						<Home/>

					</Container>

			
			</React.Fragment>
			</div>
		);
	}
}

export default App;
