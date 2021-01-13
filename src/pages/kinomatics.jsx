import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Container, Form, Button, Grid } from 'semantic-ui-react';

class Kinomatics extends React.Component{

	constructor(props) {
		super(props);
		this.state = {displacement:null, initialVelocity:null, finalVelocity:null, acceleration:null, time:null, solvedFor1:null, answer1: null, equation1:null, equationWithNumbers1:null, solvedFor2:null, answer2: null, equation2:null, equationWithNumbers2:null,error:null};
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}


	onSubmit = () => {
		var displacement = this.state.displacement;
		var initialVelocity = this.state.initialVelocity;
		var finalVelocity = this.state.finalVelocity;
		var acceleration = this.state.acceleration;
		var time = this.state.time;


	if (displacement==null || displacement==="") {
		displacement="null";
	}
	if (initialVelocity==null || initialVelocity==="") {
		initialVelocity="null";
	}
	if (finalVelocity==null || finalVelocity==="") {
		finalVelocity="null";
	}
	if (acceleration==null || acceleration==="") {
		acceleration="null";
	}
	if (time==null || time==="") {
		time="null";
	}

	var parameters = "?".concat("unit=kinomatics&displacement=", displacement, "&initial%20velocity=", initialVelocity, "&final%20velocity=", finalVelocity, "&acceleration=", acceleration, "&time=", time);


	var url = "https://physicscalcapi.herokuapp.com/api".concat(parameters);

	fetch(url, {method:"GET", credentials: "include"})
		.then((response) => response.json())
			.then(
				(result) => {
					this.setState({
						solvedFor1:result.SolvedFor1,
						answer1:result.Answer1,
						equation1:result.Equation1,
						equationWithNumbers1:result.EquationWithNumbers1,
						solvedFor2:result.SolvedFor2,
						answer2:result.Answer2,
						equation2:result.Equation2,
						equationWithNumbers2:result.EquationWithNumbers2,
						error:result.Error
					});
				});

}



	render() {

		const mystyle = {
			width: "50%",
			minWidth: "250px",
		};

		return (
      		<Container textAlign='center'>

        		<Header />

        		<p style={{color: 'white', fontSize:30}}> Kinomatics </p>


        		<Form onSubmit={this.onSubmit}>

					<Form.Input onChange={this.onChange} name="displacement" type="text" placeholder='Displacement' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="initialVelocity" type="text" placeholder='Initial Velocity' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="finalVelocity" type="text" placeholder='Final Velocity' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="acceleration" type="text" placeholder='Acceleration' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="time" type="text" placeholder='Time' style={mystyle}/>


					<Button type='submit' color='blue' style={mystyle}>Calculate</Button>
				</Form>



				<br />


				<p style={{color: 'red', fontSize:20}}> {this.state.error} </p>
				<Grid columns='equal'>
					<Grid.Column>
						<p style={{color: 'white', fontSize:20, textTransform:'capitalize'}}> {this.state.solvedFor1} </p>
						<p style={{color: 'white'}}> {this.state.answer1} </p>
						<p style={{color: 'white'}}> {this.state.equation1} </p>
						<p style={{color: 'white'}}> {this.state.equationWithNumbers1} </p>
					</Grid.Column>
					<Grid.Column>
						<p style={{color: 'white', fontSize:20, textTransform:'capitalize'}}> {this.state.solvedFor2} </p>
						<p style={{color: 'white'}}> {this.state.answer2} </p>
						<p style={{color: 'white'}}> {this.state.equation2} </p>
						<p style={{color: 'white'}}> {this.state.equationWithNumbers2} </p>
					</Grid.Column>
				</Grid>

				<br />




    		</Container>




			
		);
	}
}


export default Kinomatics;