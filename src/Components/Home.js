import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import {
	Button,
	Dropdown,
	Container,
	Accordion,
	Form,
	Menu,
	Tab,
	Grid,
	Segment
} from "semantic-ui-react";

import { Player, ControlBar, PlaybackRateMenuButton, ReplayControl  } from "video-react";

import pitch1B from "../Video/pitcher-1b.mp4";
import pitch3B from "../Video/pitcher-3b.mp4";
import batter1B from "../Video/batter-1b.mp4";
import batter3B from "../Video/batter-3b.mp4";
import highHome from "../Video/high-home.mp4";
import centerField from "../Video/centerfield.mp4";

import videoSpash from "../Images/Video_Splash.png";

const playerOptions = [
	{ key: "p1", value: "p1", text: "Player Name 1" },
	{ key: "p2", value: "p2", text: "Player Name 2" },
	{ key: "p3", value: "p3", text: "Player Name 3" },
	{ key: "p4", value: "p4", text: "Player Name 4" },
	{ key: "p5", value: "p5", text: "Player Name 5" },
	{ key: "p6", value: "p6", text: "Player Name 6" },
	{ key: "p7", value: "p7", text: "Player Name 7" },
	{ key: "p8", value: "p8", text: "Player Name 8" },
	{ key: "p9", value: "p9", text: "Player Name 9" },
	{ key: "p10", value: "p10", text: "Player Name 10" }
];

const panes = [
	{ menuItem: "Pitches", render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
	{ menuItem: "Pitch Data", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> }
	// { menuItem: '', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
];

const panes2 = [
	{
		menuItem: "1B Batter",
		render: () => (
			<Tab.Pane style={{ backgroundColor: "#3D444B" }}>
				<Player poster={videoSpash} src={batter1B} startTime={0}>
					<ControlBar>
						<PlaybackRateMenuButton rates={[2, 1, 0.5, 0.1]} />
					</ControlBar>
				</Player>
			</Tab.Pane>
		)
	},
	{
		menuItem: "1B Pitcher",
		render: () => (
			<Tab.Pane style={{ backgroundColor: "#3D444B" }}>
				<Player poster={videoSpash} src={pitch1B} startTime={0}>
					<ControlBar>
						<PlaybackRateMenuButton rates={[2, 1, 0.5, 0.1]} />
					</ControlBar>
				</Player>
			</Tab.Pane>
		)
	},
	{
		menuItem: "High Home",
		render: () => (
			<Tab.Pane style={{ backgroundColor: "#3D444B" }}>
				<Player poster={videoSpash} src={highHome} startTime={0}>
					<ControlBar>
						<PlaybackRateMenuButton rates={[2, 1, 0.5, 0.1]} />
					</ControlBar>
				</Player>
			</Tab.Pane>
		)
	},
	{
		menuItem: "3B Pitch",
		render: () => (
			<Tab.Pane style={{ backgroundColor: "#3D444B" }}>
				<Player poster={videoSpash} src={pitch3B} startTime={0}>
					<ControlBar>
						<PlaybackRateMenuButton rates={[2, 1, 0.5, 0.1]} />
					</ControlBar>
				</Player>
			</Tab.Pane>
		)
	},
	{
		menuItem: "3B Batter",
		render: () => (
			<Tab.Pane style={{ backgroundColor: "#3D444B" }}>
				<Player poster={videoSpash} src={batter3B} startTime={0}>
					<ControlBar>
						<PlaybackRateMenuButton rates={[2, 1, 0.5, 0.1]} />
					</ControlBar>
				</Player>
			</Tab.Pane>
		)
	},
	{
		menuItem: "Centerfield",
		render: () => (
			<Tab.Pane style={{ backgroundColor: "#3D444B" }}>
				<Player poster={videoSpash} src={centerField} startTime={0}>
					<ControlBar>
						<PlaybackRateMenuButton rates={[2, 1, 0.5, 0.1]} />
					</ControlBar>
				</Player>
			</Tab.Pane>
		)
	}
];

const colors = [
	"red",
	"orange",
	"yellow",
	"olive",
	"green",
	"teal",
	"blue",
	"violet",
	"purple",
	"pink",
	"brown",
	"grey"
];

class Home extends Component {
	constructor() {
		super();
		//Binds
		// this.toggle = this.toggle.bind(this);
		// this.toggleNavbar = this.toggleNavbar.bind(this);

		//States
		this.state = {
			activeIndex: 0,
			color: colors[0]
			// dropdownOpen: false,
			// message: "",
			// data: {},
			// collapsed: true,
		};
	}

	handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	};

	// //Functions
	// toggle() {
	// 	this.setState(prevState => ({
	// 		dropdownOpen: !prevState.dropdownOpen
	// 	}));
	// }

	// toggleNavbar() {
	// 	this.setState(prevState => ({
	// 	  collapsed: !prevState.collapsed
	// 	}));

	//   }

	//Mount
	componentDidMount() {}

	render() {
		const { activeIndex } = this.state.activeIndex;
		const { _Color } = this.state.color;

		return (
			<div>
				<Grid columns="equal">
					<Grid.Column>{/* <Segment>1</Segment> */}</Grid.Column>
					<Grid.Column width={8}>
						<h1 style={{ textAlign: "center", color: "white" }}>
							GameView On Demand
						</h1>
					</Grid.Column>
					<Grid.Column>{/* <Segment>3</Segment> */}</Grid.Column>
				</Grid>
				<Grid columns="equal">
					<Grid.Column>
						<Dropdown
							placeholder="Select Player"
							search
							selection
							defaultValue={"p1"}
							options={playerOptions}
						/>

						<Button
							style={{
								marginLeft: "10px",
								color: "white",
								backgroundColor: "#62AA58"
							}}
						>
							Show Player Game Data
						</Button>
					</Grid.Column>
				</Grid>
				<Grid columns="equal">
					<Grid.Column>
						<Tab
							menu={{ _Color, inverted: true, attached: false, tabular: false }}
							panes={panes}
							defaultActiveIndex={0}
						/>
					</Grid.Column>
					<Grid.Column width={10}>
						<Tab panes={panes2} renderActiveOnly={true} />
					</Grid.Column>
					<Grid.Column>
						<Tab panes={panes} defaultActiveIndex={0} />
					</Grid.Column>
				</Grid>

				{/* <h1 style={{ textAlign: "center" }}>GameView On Demand</h1>
				{}	
							<Dropdown
								placeholder="Select Player"
								search
								selection
								defaultValue={"p1"}
								options={playerOptions}/>
					
							<Button color="green">Show Player Game Data</Button>
				
							<Tab panes={panes} defaultActiveIndex={0} />
				 */}
			</div>
		);
	}
}

export default Home;
