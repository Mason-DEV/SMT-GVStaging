import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import {
	Card,
	Image,
	Button,
	Dropdown,
	Header,
	List,
	Table,
	Label,
	Container,
	Accordion,
	Form,
	Menu,
	Tab,
	Grid,
	Segment
} from "semantic-ui-react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import {
	Player,
	ControlBar,
	PlaybackRateMenuButton,
	ReplayControl
} from "video-react";
import { FaRegCopyright } from "react-icons/fa";

//Vids
import pitch1B from "../Video/pitcher-1b.mp4";
import pitch3B from "../Video/pitcher-3b.mp4";
import batter1B from "../Video/batter-1b.mp4";
import batter3B from "../Video/batter-3b.mp4";
import highHome from "../Video/high-home.mp4";
import centerField from "../Video/centerfield.mp4";

//Images
import videoSpash from "../Images/Video_Splash.png";
import kZoneP from "../Images/KZone_Temp.png";
import kZoneH from "../Images/KZone_Temp_Hitter.png";
import hitDiamond from "../Images/Hit_Trajectory_Diamond.png";
import hitSide from "../Images/Hit_Trajectory_Side.png";

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

const p1Contents = (
	<div>
		<p>Type</p>
		<p>Speed</p>
	</div>
);

const ab1Pitches = [
	{ key: "panel-1a", title: "Pitch 1", content: { content: p1Contents } },
	{ key: "panel-ba", title: "Pitch 2", content: { content: p1Contents } }
];

const ab1Contents = (
	<React.Fragment>
		<Card centered color="green">
			<Card.Content>
				<Image
					floated="right"
					size="mini"
					src="https://icon-library.net/images/generic-profile-icon/generic-profile-icon-2.jpg"
				/>
				<Card.Header>Batter 1 Name</Card.Header>
				<Card.Meta>0-0, .000 AVG, .000 OPS</Card.Meta>
			</Card.Content>
		</Card>
		<List divided selection relaxed>
			<List.Item>
				<List.Icon
					name="baseball ball"
					color="red"
					size="large"
					verticalAlign="middle"
				/>
				<List.Content as="a">
					<List.Header>Called Strike</List.Header>
					<List.Description>0-1</List.Description>
				</List.Content>
			</List.Item>
			<List.Item>
				<List.Icon
					name="baseball ball"
					color="yellow"
					size="large"
					verticalAlign="middle"
				/>
				<List.Content as="a">
					<List.Header>Foul Ball</List.Header>
					<List.Description>0-2</List.Description>
				</List.Content>
			</List.Item>
			<List.Item>
				<List.Icon
					name="baseball ball"
					color="green"
					size="large"
					verticalAlign="middle"
				/>
				<List.Content as="a">
					<List.Header>Ball</List.Header>
					<List.Description>1-2</List.Description>
				</List.Content>
			</List.Item>
			<List.Item>
				<List.Icon
					name="baseball ball"
					color="blue"
					size="large"
					verticalAlign="middle"
				/>
				<List.Content as="a">
					<List.Header >In Play, Out(s)</List.Header>
					<List.Description >1-2</List.Description>
				</List.Content>
			</List.Item>
		</List>
	</React.Fragment>
);
const ab2Contents = (
	<React.Fragment>
		<Card centered color="green">
			<Card.Content>
				<Image
					floated="right"
					size="mini"
					src="https://icon-library.net/images/generic-profile-icon/generic-profile-icon-2.jpg"
				/>
				<Card.Header>Batter 2 Name</Card.Header>
				<Card.Meta>0-0, .000 AVG, .000 OPS</Card.Meta>
			</Card.Content>
		</Card>
		<List divided selection relaxed>
			<List.Item>
				<List.Icon
					name="baseball ball"
					color="red"
					size="large"
					verticalAlign="middle"
				/>
				<List.Content as="a">
					<List.Header >Called Strike</List.Header>
					<List.Description >0-1</List.Description>
				</List.Content>
			</List.Item>
			<List.Item>
				<List.Icon
					name="baseball ball"
					color="yellow"
					size="large"
					verticalAlign="middle"
				/>
				<List.Content as="a">
					<List.Header >Foul Ball</List.Header>
					<List.Description >0-2</List.Description>
				</List.Content>
			</List.Item>
			<List.Item>
				<List.Icon
					name="baseball ball"
					color="green"
					size="large"
					verticalAlign="middle"
				/>
				<List.Content as="a">
					<List.Header >Ball</List.Header>
					<List.Description >1-2</List.Description>
				</List.Content>
			</List.Item>
			<List.Item>
				<List.Icon
					name="baseball ball"
					color="red"
					size="large"
					verticalAlign="middle"
				/>
				<List.Content as="a">
					<List.Header>Swinging Strike</List.Header>
					<List.Description>1-3</List.Description>
				</List.Content>
			</List.Item>
		</List>
	</React.Fragment>
);

const ab3Contents = (
	<React.Fragment>
		<Card  centered color="green">
			<Card.Content>
				<Image
					floated="right"
					size="mini"
					src="https://icon-library.net/images/generic-profile-icon/generic-profile-icon-2.jpg"
				/>
				<Card.Header>Batter 3 Name</Card.Header>
				<Card.Meta>0-0, .000 AVG, .000 OPS</Card.Meta>
			</Card.Content>
		</Card>
		<List divided  selection relaxed>
			<List.Item>
				<List.Icon
					name="baseball ball"
					color="red"
					size="large"
					verticalAlign="middle"
				/>
				<List.Content as="a">
					<List.Header>Called Strike</List.Header>
					<List.Description>0-1</List.Description>
				</List.Content>
			</List.Item>
			<List.Item>
				<List.Icon
					name="baseball ball"
					color="yellow"
					size="large"
					verticalAlign="middle"
				/>
				<List.Content as="a">
					<List.Header>Foul Ball</List.Header>
					<List.Description>0-2</List.Description>
				</List.Content>
			</List.Item>
			<List.Item>
				<List.Icon
					name="baseball ball"
					color="green"
					size="large"
					verticalAlign="middle"
				/>
				<List.Content as="a">
					<List.Header>Ball</List.Header>
					<List.Description>1-2</List.Description>
				</List.Content>
			</List.Item>
			<List.Item>
				<List.Icon
					name="baseball ball"
					color="red"
					size="large"
					verticalAlign="middle"
				/>
				<List.Content as="a">
					<List.Header >Swinging Strike</List.Header>
					<List.Description>1-3</List.Description>
				</List.Content>
			</List.Item>
		</List>
	</React.Fragment>
);
const level2Panels = [
	{ key: "panel-2a", title: "Level 2A", content: "Level 2A Contents" },
	{ key: "panel-2b", title: "Level 2B", content: "Level 2B Contents" }
];

const Level2Content = (
	<div>
		Welcome to level 2
		<Accordion.Accordion panels={level2Panels} />
	</div>
);

const allABPanels = [
	{ key: "panel-1", title: "At Bat 1", content: { content: ab1Contents } },
	{ key: "panel-2", title: "At Bat 2", content: { content: ab2Contents } },
	{ key: "panel-3", title: "At Bat 3", content: { content: ab3Contents } }
];

const panes = [
	{ menuItem: "Pitch", render: () => <Tab.Pane>
		<Card centered color="blue">
		<Card.Content>
		<Card.Header style={{ textAlign: "center" }}>
			Pitch Number: 1 <br/>
			Pitch Speed: 98.8 MPH
			</Card.Header>
		<img src={kZoneP}></img>
		</Card.Content>
		</Card>
		
	</Tab.Pane> },
	{ menuItem: "Hit", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> }
	// { menuItem: '', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
];
const gameDataPane = [];

const panes2 = [
	{
		menuItem: "1B Batter",
		render: () => (
			<Tab.Pane>
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
			<Tab.Pane>
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
			<Tab.Pane>
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
			<Tab.Pane>
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
			<Tab.Pane>
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
			<Tab.Pane>
				<Player poster={videoSpash} src={centerField} startTime={0}>
					<ControlBar>
						<PlaybackRateMenuButton rates={[2, 1, 0.5, 0.1]} />
					</ControlBar>
				</Player>
			</Tab.Pane>
		)
	}
];

class Home extends Component {
	constructor() {
		super();
		//Binds
		// this.toggle = this.toggle.bind(this);
		// this.toggleNavbar = this.toggleNavbar.bind(this);
		this.inningChange = this.inningChange.bind(this);
		this.halfChange = this.halfChange.bind(this);

		//States
		this.state = {
			activeIndex: 0,
			selectedInning: "1st",
			halfInning: "Top",
		};
	}

	//Functions
	handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	};
	//Handles the changing of Inning
	inningChange(e, Props) {
		const inning  = Props.children;
		var suffix = '';
		console.info(inning)
		if(inning == 1)
			suffix = 'st'
		else if(inning == 2)
			suffix = 'nd'
		else if(inning == 2)
			suffix = 'rd'
		else suffix = "th"
		var selected = inning + suffix;
		this.setState({ selectedInning: selected, halfInning: "Top"});
	}

	//Handles the change of Top/Bottom
	halfChange(e, Props) {
		const half = Props.children;
		console.log(half);
		this.setState({ halfInning: half});
	}

	
	//Mount
	componentDidMount() {}

	render() {
		const { activeIndex } = this.state.activeIndex;

		return (
			<div>
				<Grid columns="equal">
					<Grid.Column width={4}>
						<h3>Game Data</h3>
						<Tab
							menu={{ color: "green", inverted: true, pointing: true }}
							panes={[
								{
									menuItem: "Play By Play",
									render: () => (
										<Tab.Pane>
											<Card centered color="blue">
												<Card.Content>
													<Card.Header style={{ textAlign: "center" }}>
														Inning Selection
													</Card.Header>
													<Card.Meta style={{ textAlign: "center" }}>
														<List size="large" divided horizontal selection>
															<List.Item onClick={this.inningChange}>
																1
															</List.Item>
															<List.Item onClick={this.inningChange}>
																2
															</List.Item>
															<List.Item onClick={this.inningChange}>
																3
															</List.Item>
															<List.Item onClick={this.inningChange}>
																4
															</List.Item>
															<List.Item onClick={this.inningChange}>
																5
															</List.Item>
															<List.Item onClick={this.inningChange}>
																6
															</List.Item>
															<List.Item onClick={this.inningChange}>
																7
															</List.Item>
															<List.Item onClick={this.inningChange}>
																8
															</List.Item>
															<List.Item onClick={this.inningChange}>
																9
															</List.Item>
														</List>
													</Card.Meta>
												</Card.Content>
											</Card>

											<Card centered color="green">
												<Card.Content>
													<Image
														floated="right"
														size="mini"
														src="https://icon-library.net/images/generic-profile-icon/generic-profile-icon-2.jpg"
													/>
													<Card.Header>Pitcher Name</Card.Header>
													<Card.Meta>1.0 IP, 0.00 ERA</Card.Meta>
												</Card.Content>
											</Card>
											<Header
												style={{ textAlign: "center", verticalAlign: "bottom" }}
											>
												<Button
													compact
													color="blue"
													floated="left"
													onClick={this.halfChange}
												>
													Top
												</Button>
												{this.state.halfInning} {this.state.selectedInning}
												<Button
													compact
													color="blue"
													floated="right"
													onClick={this.halfChange}
												>
													Bottom
												</Button>
											</Header>
											<Accordion
												style={{ marignTop: "20px" }}
												defaultActiveIndex={0}
												panels={allABPanels}
												styled
											/>
										</Tab.Pane>
									)
								},
								{
									menuItem: "Raw Data",
									render: () => <Tab.Pane>Table Of Raw Data Here</Tab.Pane>
								},
								{
									menuItem: "Player Data",
									render: () => (
										<Tab.Pane>
											<Dropdown
												placeholder="Select Batter"
												search
												selection
												
												options={playerOptions}
											/>
											<Button
												style={{
													marginLeft: "10px",
													color: "white",
													backgroundColor: "#62AA58"
												}}
											>
												Show Batter Game Data
											</Button>
											<br />
											<Dropdown
												placeholder="Select Pitcher"
												search
												selection
										
												options={playerOptions}
											/>
											<Button
												style={{
													marginLeft: "10px",
													color: "white",
													backgroundColor: "#62AA58"
												}}
											>
												Show Pitcher Game Data
											</Button>
										</Tab.Pane>
									)
								}
							]}
							defaultActiveIndex={0}
						/>
					</Grid.Column>
					<Grid.Column width={8}>
						{" "}
						<h3>Camera Selection</h3>
						<Tab
							menu={{ color: "green", inverted: true, pointing: true }}
							panes={panes2}
							defaultActiveIndex={0}
							renderActiveOnly={true}
						/>
					</Grid.Column>
					<Grid.Column>
						<h3>Pitch Data</h3>
						{/* <Tab panes={panes} defaultActiveIndex={0} /> */}
						<Tab
							menu={{ color: "green", inverted: true, pointing: true }}
							panes={panes}
						/>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default Home;
