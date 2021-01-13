import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Container, Form, Button } from 'semantic-ui-react';

class Circular extends React.Component{

	constructor(props) {
		super(props);
		this.state = {force:null, mass:null, velocity:null, radius:null, solvedFor:null, answer: null, equation:null, equationWithNumbers:null, error:null};
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}


	onSubmit = () => {
		var force = this.state.force;
		var mass = this.state.mass;
		var velocity = this.state.velocity;
		var radius = this.state.radius;


	if (force==null || force==="") {
		force="null";
	}
	if (mass==null || mass==="") {
		mass="null";
	}
	if (velocity==null || velocity==="") {
		velocity="null";
	}
	if (radius==null || radius==="") {
		radius="null";
	}

	var parameters = "?".concat("unit=circular&force=", force, "&mass=", mass, "&velocity=", velocity, "&radius=", radius);


	var url = "https://physicscalcapi.herokuapp.com/api".concat(parameters);

	fetch(url, {method:"GET", credentials: "include"})
		.then((response) => response.json())
			.then(
				(result) => {
					this.setState({
						solvedFor:result.SolvedFor,
						answer:result.Answer,
						equation:result.Equation,
						equationWithNumbers:result.EquationWithNumbers,
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

        		<p style={{color: 'white', fontSize:30}}> Circular Motion </p>

        		<Form onSubmit={this.onSubmit}>

					<Form.Input onChange={this.onChange} name="force" type="text" placeholder='Force' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="mass" type="text" placeholder='Mass' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="velocity" type="text" placeholder='Velocity' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="radius" type="text" placeholder='Radius' style={mystyle}/>


					<Button type='submit' color='blue' style={mystyle}>Calculate</Button>
				</Form>



				<br />

				<p style={{color: 'white', fontSize:20, textTransform:'capitalize'}}> {this.state.solvedFor} </p>
				<p style={{color: 'white'}}> {this.state.answer} </p>
				<p style={{color: 'white'}}> {this.state.equation} </p>
				<p style={{color: 'white'}}> {this.state.equationWithNumbers} </p>
				<p style={{color: 'red', fontSize:20}}> {this.state.error} </p>



    		</Container>




			
		);
	}
}


export default Circular;