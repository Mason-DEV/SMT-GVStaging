import React, { Component } from "react";
// import "../App.css";
import { Collapse, Container, Row, Col, CustomInput } from "reactstrap";
import { Dropdown, Grid, Icon, Button } from "semantic-ui-react";
import pitchQuad from "../Images/chk_quad_bg.png";
import hitDir from "../Images/chk_spray_bg.png";
import strikeZ from "../Images/chk_sz_bg.png";

const options = [
	{ key: "g1", value: "g1", text: getDate(0) + " - SMT Away Team @ SMT Home Team" },
	{ key: "g2", value: "g2", text: getDate(1) + " - SMT Away Team @ SMT Home Team" },
	{ key: "g3", value: "g3", text: getDate(2) + " - SMT Away Team @ SMT Home Team" },
	{ key: "g4", value: "g4", text: getDate(3) + " - SMT Away Team @ SMT Home Team" },
	{ key: "g5", value: "g5", text: getDate(4) + " - SMT Away Team @ SMT Home Team" },
	{ key: "g6", value: "g6", text: getDate(5) + " - SMT Away Team @ SMT Home Team" },
	{ key: "g7", value: "g7", text: getDate(6) + " - SMT Away Team @ SMT Home Team" },
	{ key: "g8", value: "g8", text: getDate(7) + " - SMT Away Team @ SMT Home Team" },
	{ key: "g9", value: "g9", text: getDate(8) + " - SMT Away Team @ SMT Home Team" },
	{ key: "g10", value: "g10", text: getDate(9) + " - SMT Away Team @ SMT Home Team" }
];
const PlayerOpts = [
	{ key: "p1", value: "p1", text: "Player Name" },
	{ key: "p2", value: "p2", text: "Player Name" },
	{ key: "p3", value: "p3", text: "Player Name" },
	{ key: "p4", value: "p4", text: "Player Name" },
	{ key: "p5", value: "p5", text: "Player Name" },
	{ key: "p6", value: "p6", text: "Player Name" },
	{ key: "p7", value: "p7", text: "Player Name" },
	{ key: "p8", value: "p8", text: "Player Name" },
	{ key: "p9", value: "p9", text: "Player Name" },
];

const TeamOpts = [
	{ key: "t1", value: "t1", text: "Team Name" },
	{ key: "t2", value: "t2", text: "Team Name" },
	{ key: "t3", value: "t3", text: "Team Name" },
	{ key: "t4", value: "t4", text: "Team Name" },
	{ key: "t5", value: "t5", text: "Team Name" },
	{ key: "t6", value: "t6", text: "Team Name" },
	{ key: "t7", value: "t7", text: "Team Name" },
	{ key: "t8", value: "t8", text: "Team Name" },
	{ key: "t9", value: "t9", text: "Team Name" },
];
function getDate(minusDays) {
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

class ModeSelector extends Component {
	constructor(props) {
		super(props);
		//Binds
		this.switchMode = this.switchMode.bind(this);
		this.toggleSettings = this.toggleSettings.bind(this);

		//States
		this.state = {
			collapsed: true
		};
	}

	toggleSettings() {
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

	componentDidMount() {}

	render() {
		if (this.props.selected === 1) {
			return (
				<div>
					<Col style={ this.state.collapsed === true ? { borderTop: "4px solid #62AA58", paddingBottom: "5px" }
					: {
						borderTop: "4px solid #62AA58", borderBottom: "4px solid #62AA58", paddingBottom: "5px"
					}}>
						<h3 style={{ justifyContent: "center", textAlign: "center", color: "white" }}>
							<Icon
								name="sliders horizontal"
								style={{ cursor: "pointer", color: "white" }}
								onClick={this.toggleSettings}
							/>{" "}
							Player Settings
						</h3>
						<Collapse isOpen={!this.state.collapsed}>
							<div className="flex-container">
								<div>
									<h5>Player Selector</h5>
									<Dropdown placeholder="Select Player" fluid search selection options={PlayerOpts} defaultValue={"p1"} />
								</div>
								<div>
									<h5>Team Selector</h5>
									<Dropdown placeholder="Select Team" fluid search selection options={TeamOpts} defaultValue={"t1"} />
								</div>
								<div>
									<h5>Count</h5>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox1"
										label="Ahead (Pitcher)"
										name="aheadPitcher"
									/>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox2"
										label="Behind (Pitcher)"
										name="behindPitcher"
									/>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox3"
										label="2 Strikes"
										name="twoStrikes"
									/>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox4"
										label="First Pitch of AB"
										name="firstPitch"
									/>
								</div>
								<div>
									<div>
										<h5>Pitch Type</h5>

										<CustomInput
											type="checkbox"
											className="customCheck"
											id="customCheckBox5"
											label="Fast Balls"
											name="fastBalls"
										/>

										<CustomInput
											type="checkbox"
											className="customCheck"
											id="customCheckBox6"
											label="2-Seam Fastball"
											name="twoSeam"
										/>

										<CustomInput
											type="checkbox"
											className="customCheck"
											id="customCheckBox7"
											label="4-Seam Fastball"
											name="fourSeam"
										/>
										<CustomInput
											type="checkbox"
											className="customCheck"
											id="customCheckBox8"
											label="Cut Fastball"
											name="cutFastball"
										/>

										<CustomInput
											type="checkbox"
											className="customCheck"
											id="customCheckBox9"
											label="Offspeed"
											name="offSpeed"
										/>

										<CustomInput
											type="checkbox"
											className="customCheck"
											id="customCheckBox10"
											label="Slider"
											name="slider"
										/>
										<CustomInput
											type="checkbox"
											className="customCheck"
											id="customCheckBox11"
											label="Curveball"
											name="curveball"
										/>
										<CustomInput
											type="checkbox"
											className="customCheck"
											id="customCheckBox12"
											label="Changeup"
											name="changeup"
										/>
									</div>
								</div>
								<div>
									<h5>Handedness</h5>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox13"
										label="Pitcher Left"
										name="leftPitcher"
									/>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox14"
										label="Pitcher Right"
										name="rightPitcher"
									/>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox15"
										label="Batter Left"
										name="leftBatter"
									/>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox16"
										label="Batter Right"
										name="rightBatter"
									/>
								</div>
								<div>
									<h5>Outcome</h5>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox17"
										label="Called Strike"
										name="leftPitcher"
									/>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox18"
										label="Swinging Strike"
										name="rightPitcher"
									/>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox19"
										label="Foul"
										name="leftBatter"
									/>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox20"
										label="Ball"
										name="rightBatter"
									/>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox21"
										label="Hit"
										name="rightBatter"
									/>
									<CustomInput
										type="checkbox"
										className="customCheck"
										id="customCheckBox21"
										label="Out"
										name="rightBatter"
									/>
								</div>
								<div>
									<h5>Pitch Quadrant</h5>
									<img src={pitchQuad} alt="pitchQuad"></img>
								</div>
								<div>
									<h5>Hit Direction</h5>
									<img src={hitDir} alt="hitDir"></img>
								</div>
								<div>
									<h5>Strike Zone</h5>
									<img src={strikeZ} alt="strikeZ"></img>
								</div>
							</div>
							<div style={{ justifyContent: "center", textAlign: "center", color: "white" }}>
								<Button style={{ justifyContent: "center", textAlign: "center" }}>Reset Filters</Button>
							</div>
						</Collapse>
					</Col>
				</div>
			);
		} else {
			return (
				<div style={{ color: "white" }}>
					<Col style={{ borderTop: "4px solid #62AA58" }}>
						<h3 style={{ justifyContent: "center", textAlign: "center", color: "white" }}>
							{" "}
							<Icon
								name="sliders horizontal"
								style={{ cursor: "pointer", color: "white" }}
								onClick={this.toggleSettings}
							/>{" "}
							Game Settings{" "}
						</h3>
						<Collapse isOpen={!this.state.collapsed}>
							<div style={{ justifyContent: "center", textAlign: "center" }}>
								<Dropdown clearable options={options} selection />
							</div>
						</Collapse>
					</Col>
				</div>
			);
		}
	}
}

export default ModeSelector;
