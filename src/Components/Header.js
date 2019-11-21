import React, { Component } from "react";
import navLogo from "../Images/SMT_logo.png";
import "../App.css";
import {
  Collapse,
  Navbar,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  Nav
} from "reactstrap";
import { Button } from "semantic-ui-react";

class Header extends Component {
  constructor() {
    super();
    //Binds
    this.toggle = this.toggle.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.switchMode = this.switchMode.bind(this);

    //States
    this.state = {
      dropdownOpen: false,
      message: "",
      data: {},
      collapsed: true,
      gameOptions: [
        {
          key: "g1",
          value: "g1",
          text: this.getDate(0) + " - SMT Away Team @ SMT Home Team"
        },
        {
          key: "g2",
          value: "g2",
          text: this.getDate(1) + " - SMT Away Team @ SMT Home Team"
        },
        {
          key: "g3",
          value: "g3",
          text: this.getDate(2) + " - SMT Away Team @ SMT Home Team"
        },
        {
          key: "g4",
          value: "g4",
          text: this.getDate(3) + " - SMT Away Team @ SMT Home Team"
        },
        {
          key: "g5",
          value: "g5",
          text: this.getDate(4) + " - SMT Away Team @ SMT Home Team"
        },
        {
          key: "g6",
          value: "g6",
          text: this.getDate(5) + " - SMT Away Team @ SMT Home Team"
        },
        {
          key: "g7",
          value: "g7",
          text: this.getDate(6) + " - SMT Away Team @ SMT Home Team"
        },
        {
          key: "g8",
          value: "g8",
          text: this.getDate(7) + " - SMT Away Team @ SMT Home Team"
        },
        {
          key: "g9",
          value: "g9",
          text: this.getDate(8) + " - SMT Away Team @ SMT Home Team"
        },
        {
          key: "g10",
          value: "g10",
          text: this.getDate(9) + " - SMT Away Team @ SMT Home Team"
        }
      ]
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

  switchMode = mode => {
    this.props.mode(mode);
    this.setState({
      mode
    });
  };

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
    return (
      <Navbar color="dark" light expand="md">
        <NavbarBrand>
          <img src={navLogo} alt="navLogo"></img>
        </NavbarBrand>
        <NavbarToggler
          onClick={this.toggleNavbar}
          className="mr-5"
          style={{ color: "white", backgroundColor: "#62AA58" }}
        />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav
            navbar
            style={{ justifyContent: "center", textAlign: "center" }}
            className="ml-auto"
          >
            <Button
              style={
                this.props.selected === 1
                  ? { background: "#62AA58" }
                  : { background: "" }
              }
              onClick={e => this.switchMode(1)}
            >
              {" "}
              Player Mode
            </Button>
            <Button
              style={
                this.props.selected === 2
                  ? { background: "#62AA58" }
                  : { background: "" }
              }
              onClick={e => this.switchMode(2)}
            >
              {" "}
              Game Mode
            </Button>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem style={{ color: "white" }}>Logout</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
