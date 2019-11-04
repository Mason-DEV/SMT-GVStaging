import React, { Component } from "react";
import "../App.css";
import { Card, Image, Button, Dropdown, Header, List, Icon, Accordion, Tab, Grid } from "semantic-ui-react";
import { Player, ControlBar, PlaybackRateMenuButton } from "video-react";
//Vids
import pitch1B from "../Video/pitcher-1b.mp4";
import pitch3B from "../Video/pitcher-3b.mp4";
import batter1B from "../Video/batter-1b.mp4";
import batter3B from "../Video/batter-3b.mp4";
import highHome from "../Video/high-home.mp4";
import centerField from "../Video/centerfield.mp4";

//Images
import videoSpash from "../Images/Video_Splash.png";
import kZoneP from "../Images/KZone.gif";
//import kZoneH from "../Images/KZone_Temp_Hitter.png";
import hitDiamond from "../Images/Hit_Trajectory_Diamond.png";
//import hitSide from "../Images/Hit_Trajectory_Side.png";

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

class Play extends Component {
	constructor(props) {
		super(props);
		//Binds
		this.inningChange = this.inningChange.bind(this);
		this.halfChange = this.halfChange.bind(this);
		this.pitchChange = this.pitchChange.bind(this);

		//States
		this.state = {
			activeIndex: 0,
			selectedInning: "1st",
			halfInning: "Top",
			pitchNumber: 1,
			pitchType: this.randomPitch(),
			pitchVelo: this.randomVelo()
		};
	}

	randomVelo = () => {
		var whole = Math.floor(Math.random() * (99 - 65 + 1) + 65);
		var dec = Math.floor(Math.random() * (100 - 65 + 1) + 65);
		var velo = whole + "." + dec;
		return velo;
	};

	randomPitch = () => {
		const types = [
			"Changeup",
			"Curveball",
			"Cutter",
			"Eephus",
			"Forkball",
			"Four-Seam Fastball",
			"Knuckleball",
			"Knuckle-curve",
			"Screwball",
			"Sinker",
			"Slider",
			"Splitter",
			"Two-Seam Fastball"
		];

		var pitch = types[Math.floor(Math.random() * 12)];
		return pitch;
	};

	//Functions
	handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	};
	//Handles the changing of Inning
	inningChange(e, Props) {
		const inning = Props.children;
		var suffix = "";
		//console.info(inning)
		if (inning === 1) suffix = "st";
		else if (inning === 2) suffix = "nd";
		else if (inning === 2) suffix = "rd";
		else suffix = "th";
		var selected = inning + suffix;
		this.setState({ selectedInning: selected, halfInning: "Top" });
	}

	//Handles the change of Top/Bottom
	halfChange(e, Props) {
		const half = Props.children;
		this.setState({ halfInning: half });
	}
	//Handles the change of pitch
	pitchChange(e, Props) {
		const pitchNum = e;
		//Call pitch type and velo for change numbers
		//This is totally fake
		// this.randomVelo();
		// this.pitchType();
		this.setState({ pitchNumber: pitchNum, pitchVelo: this.randomVelo(), pitchType: this.randomPitch() });
	}

	render() {
		return (
			<div className="flex-container">
				<div>
					<Header as="h2" style={{ color: "white" }}>
						<Icon name="settings" style={{ color: "grey" }} />
						<Header.Content>
							Player Data
							<Header.Subheader style={{ color: "white" }}>Data metrics for selected game.</Header.Subheader>
						</Header.Content>
					</Header>
					<Tab
						menu={{ color: "green", inverted: true, pointing: true }}
						panes={[
							{
								menuItem: "Games Data",
								render: () => (
									<Tab.Pane>
										<Accordion
											style={{ marignTop: "20px" }}
											defaultActiveIndex={1}
											panels={[
												{
													key: "panel-1",
													title: "Gamestring 1",
													content: {
														content: (
															<Accordion
																style={{ marignTop: "20px" }}
																defaultActiveIndex={1}
																panels={[
																	{
																		key: "panel-1",
																		title: "At Bat 1",
																		content: {
																			content: (
																				<div>
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
																							<List.Content as="a" onClick={() => this.pitchChange(1)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(2)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(3)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(4)}>
																								<List.Header>In Play, Out(s)</List.Header>
																								<List.Description>1-2</List.Description>
																							</List.Content>
																						</List.Item>
																					</List>
																				</div>
																			)
																		}
																	},
																	,
																	{
																		key: "panel-2",
																		title: "At Bat 2",
																		content: {
																			content: (
																				<div>
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
																							<List.Content as="a" onClick={() => this.pitchChange(5)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(6)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(7)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(8)}>
																								<List.Header>Swinging Strike</List.Header>
																								<List.Description>1-3</List.Description>
																							</List.Content>
																						</List.Item>
																					</List>
																				</div>
																			)
																		}
																	},
																	{
																		key: "panel-3",
																		title: "At Bat 3",
																		content: {
																			content: (
																				<div>
																					<Card centered color="green">
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
																					<List divided selection relaxed>
																						<List.Item>
																							<List.Icon
																								name="baseball ball"
																								color="red"
																								size="large"
																								verticalAlign="middle"
																							/>
																							<List.Content as="a" onClick={() => this.pitchChange(9)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(10)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(11)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(12)}>
																								<List.Header>Swinging Strike</List.Header>
																								<List.Description>1-3</List.Description>
																							</List.Content>
																						</List.Item>
																					</List>
																				</div>
																			)
																		}
																	}
																]}
															/>
														)
													}
												},
												,
												{
													key: "panel-2",
													title: "Gamestring 2",
													content: {
														content: (
															<Accordion
																style={{ marignTop: "20px" }}
																defaultActiveIndex={1}
																panels={[
																	{
																		key: "panel-1",
																		title: "At Bat 1",
																		content: {
																			content: (
																				<div>
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
																							<List.Content as="a" onClick={() => this.pitchChange(1)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(2)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(3)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(4)}>
																								<List.Header>In Play, Out(s)</List.Header>
																								<List.Description>1-2</List.Description>
																							</List.Content>
																						</List.Item>
																					</List>
																				</div>
																			)
																		}
																	},
																	,
																	{
																		key: "panel-2",
																		title: "At Bat 2",
																		content: {
																			content: (
																				<div>
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
																							<List.Content as="a" onClick={() => this.pitchChange(5)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(6)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(7)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(8)}>
																								<List.Header>Swinging Strike</List.Header>
																								<List.Description>1-3</List.Description>
																							</List.Content>
																						</List.Item>
																					</List>
																				</div>
																			)
																		}
																	},
																	{
																		key: "panel-3",
																		title: "At Bat 3",
																		content: {
																			content: (
																				<div>
																					<Card centered color="green">
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
																					<List divided selection relaxed>
																						<List.Item>
																							<List.Icon
																								name="baseball ball"
																								color="red"
																								size="large"
																								verticalAlign="middle"
																							/>
																							<List.Content as="a" onClick={() => this.pitchChange(9)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(10)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(11)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(12)}>
																								<List.Header>Swinging Strike</List.Header>
																								<List.Description>1-3</List.Description>
																							</List.Content>
																						</List.Item>
																					</List>
																				</div>
																			)
																		}
																	}
																]}
															/>
														)
													}
												},
												,
												{
													key: "panel-3",
													title: "Gamestring 3",
													content: {
														content: (
															<Accordion
																style={{ marignTop: "20px" }}
																defaultActiveIndex={1}
																panels={[
																	{
																		key: "panel-1",
																		title: "At Bat 1",
																		content: {
																			content: (
																				<div>
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
																							<List.Content as="a" onClick={() => this.pitchChange(1)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(2)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(3)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(4)}>
																								<List.Header>In Play, Out(s)</List.Header>
																								<List.Description>1-2</List.Description>
																							</List.Content>
																						</List.Item>
																					</List>
																				</div>
																			)
																		}
																	},
																	,
																	{
																		key: "panel-2",
																		title: "At Bat 2",
																		content: {
																			content: (
																				<div>
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
																							<List.Content as="a" onClick={() => this.pitchChange(5)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(6)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(7)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(8)}>
																								<List.Header>Swinging Strike</List.Header>
																								<List.Description>1-3</List.Description>
																							</List.Content>
																						</List.Item>
																					</List>
																				</div>
																			)
																		}
																	},
																	{
																		key: "panel-3",
																		title: "At Bat 3",
																		content: {
																			content: (
																				<div>
																					<Card centered color="green">
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
																					<List divided selection relaxed>
																						<List.Item>
																							<List.Icon
																								name="baseball ball"
																								color="red"
																								size="large"
																								verticalAlign="middle"
																							/>
																							<List.Content as="a" onClick={() => this.pitchChange(9)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(10)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(11)}>
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
																							<List.Content as="a" onClick={() => this.pitchChange(12)}>
																								<List.Header>Swinging Strike</List.Header>
																								<List.Description>1-3</List.Description>
																							</List.Content>
																						</List.Item>
																					</List>
																				</div>
																			)
																		}
																	}
																]}
															/>
														)
													}
												},
												,
											]}
										/>
									</Tab.Pane>
								)
							},
							{
								menuItem: "Raw Data",
								render: () => <Tab.Pane>Table Of Raw Data Here</Tab.Pane>
							},
							{
								menuItem: "Reports",
								render: () => (
									<Tab.Pane>
										<Dropdown placeholder="Select Batter" search selection options={playerOptions} />
										<Button
											style={{
												marginLeft: "10px",
												color: "white",
												backgroundColor: "#62AA58"
											}}
										>
											Show Batter Game Report
										</Button>
										<br />
										<Dropdown placeholder="Select Pitcher" search selection options={playerOptions} />
										<Button
											style={{
												marginLeft: "10px",
												color: "white",
												backgroundColor: "#62AA58"
											}}
										>
											Show Pitcher Game Report
										</Button>
									</Tab.Pane>
								)
							}
						]}
						defaultActiveIndex={0}
					/>
				</div>
				<div>
					<Header as="h2" style={{ color: "white" }}>
						<Icon name="settings" style={{ color: "grey" }} />
						<Header.Content>
							Pitch Data
							<Header.Subheader style={{ color: "white" }}>Data metrics for selected pitch.</Header.Subheader>
						</Header.Content>
					</Header>
					<Tab
						menu={{ color: "green", inverted: true, pointing: true }}
						panes={[
							{
								menuItem: "Pitch",
								render: () => (
									<Tab.Pane>
										<Card centered fluid>
											<Card.Content>
												<List divided relaxed>
													<List.Item>
														<List.Content>
															<List.Header>Gamestring</List.Header>
															<List.Description>2019_11_11_smtbbc_smtbbc_1</List.Description>
														</List.Content>
													</List.Item>
													<List.Item>
														<List.Content>
															<List.Header>Pitch Number</List.Header>
															<List.Description>{this.state.pitchNumber}</List.Description>
														</List.Content>
													</List.Item>
													<List.Item>
														<List.Content>
															<List.Header>Pitch Type</List.Header>
															<List.Description>{this.state.pitchType}</List.Description>
														</List.Content>
													</List.Item>
													<List.Item>
														<List.Content>
															<List.Header>Pitch Speed</List.Header>
															<List.Description>{this.state.pitchVelo} MPH</List.Description>
														</List.Content>
													</List.Item>
													<List.Item>
														<List.Content>
															<List.Header>Pitch Break</List.Header>
															<List.Description>###</List.Description>
														</List.Content>
													</List.Item>
													<List.Item>
														<List.Content>
															<List.Header>Pitch Track</List.Header>
															<List.Description>
																<img src={kZoneP} alt="kzoneP"></img>
															</List.Description>
														</List.Content>
													</List.Item>
												</List>
											</Card.Content>
										</Card>
									</Tab.Pane>
								)
							},
							{
								menuItem: "Hit",
								render: () => (
									<Tab.Pane>
										<Card centered fluid>
											<Card.Content>
												<List divided relaxed>
													<List.Item>
														<List.Content>
															<List.Header>Contact Result</List.Header>
															<List.Description>Hit Into Play - Out(s)</List.Description>
														</List.Content>
													</List.Item>
													<List.Item>
														<List.Content>
															<List.Header>Launch Angle</List.Header>
															<List.Description>6.85</List.Description>
														</List.Content>
													</List.Item>
													<List.Item>
														<List.Content>
															<List.Header>Exit Velocity</List.Header>
															<List.Description>86.06</List.Description>
														</List.Content>
													</List.Item>
													<List.Item>
														<List.Content>
															<List.Header>Hit Trajectory</List.Header>
															<List.Description>
																<img src={hitDiamond} alt="kZoneD"></img>
															</List.Description>
														</List.Content>
													</List.Item>
												</List>
											</Card.Content>
										</Card>
									</Tab.Pane>
								)
							}
						]}
					/>
				</div>
				<div>
					<Header as="h2" style={{ color: "white" }}>
						<Icon name="camera" style={{ color: "grey" }} />
						<Header.Content>
							Camera Selection
							<Header.Subheader style={{ color: "white" }}>Camera feeds for selected pitch.</Header.Subheader>
						</Header.Content>
					</Header>

					<Tab
						menu={{ color: "green", inverted: true, pointing: true, className: "flex-container" }}
						panes={panes2}
						defaultActiveIndex={0}
						renderActiveOnly={true}
					/>
				</div>
			</div>
		);
	}
}

export default Play;
