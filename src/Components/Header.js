import React, { Component } from "react";
import navLogo from "../Images/SMT_logo.png";
import "../App.css";
import {
	
	Button,
	Collapse,
	Input,
	InputGroup,
	InputGroupAddon,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,

    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from "reactstrap";

import {
	Dropdown,

} from "semantic-ui-react";
import { MdSettings } from "react-icons/md";



class Header extends Component {
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
            gameOptions: [ 
                    { key: "g1", value: "g1", text: this.getDate(0) +"- Sports Media Technology @ Sports MediaTechnology" },
                    { key: "g2", value: "g2", text:  this.getDate(1) +"- Sports Media Technology @ Sports MediaTechnology" },
                    { key: "g3", value: "g3", text:  this.getDate(2) +"- Sports Media Technology @ Sports MediaTechnology" },
                    { key: "g4", value: "g4", text:  this.getDate(3) +"- Sports Media Technology @ Sports MediaTechnology" },
                    { key: "g5", value: "g5", text:  this.getDate(4) +"- Sports Media Technology @ Sports MediaTechnology" },
                    { key: "g6", value: "g6", text:  this.getDate(5) +"- Sports Media Technology @ Sports MediaTechnology" },
                    { key: "g7", value: "g7", text:  this.getDate(6) +"- Sports Media Technology @ Sports MediaTechnology" },
                    { key: "g8", value: "g8", text:  this.getDate(7) +"- Sports Media Technology @ Sports MediaTechnology" },
                    { key: "g9", value: "g9", text:  this.getDate(8) +"- Sports Media Technology @ Sports MediaTechnology" },
                    { key: "g10", value: "g10", text:  this.getDate(9) +"- Sports Media Technology @ Sports MediaTechnology" }
            ],
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
		var today = mm + "/" + dd + "/" + yyyy;

		return today;
	}

	render() {
        console.log("HeaderState",this.state)
		return (
			<div style={{backgroundColor: "#62AA58", paddingBottom: "4px"}}>
				<Navbar color="dark" light expand="lg" style={{height: "55px"}}>
					<NavbarBrand>
						<img src={navLogo}></img>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-5"style={{color: "white",backgroundColor: "#62AA58"}}/>
					<Collapse isOpen={!this.state.collapsed} navbar  >
						 <Nav navbar className="ml-auto">
                         <Dropdown
                                placeholder="Select Player"
								search
								selection
								defaultValue={"g1"}
								options={this.state.gameOptions}/>
					</Nav>
					<Nav navbar className="ml-auto">
						<InputGroup>
							<Input placeholder="Search..." />
							<InputGroupAddon addonType="append">
								<Button style={{backgroundColor: "#62AA58"}}>Search</Button>
							</InputGroupAddon>
						</InputGroup>
					</Nav>
					<Nav className="ml-auto" navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret style={{ color: "white" }}>
								<MdSettings /> Settings
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>Thing 1</DropdownItem>
								<DropdownItem>Thing 2</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>Logout</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav> 
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Header

