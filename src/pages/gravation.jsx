import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Container, Form, Button } from 'semantic-ui-react';

class Gravation extends React.Component{

	constructor(props) {
		super(props);
		this.state = {force:null, mass1:null, mass2:null, radius:null, solvedFor:null, answer: null, equation:null, equationWithNumbers:null, error:null};
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}


	onSubmit = () => {
		var force = this.state.force;
		var mass1 = this.state.mass1;
		var mass2 = this.state.mass2;
		var radius = this.state.radius;


	if (force==null || force ==="") {
		force="null";
	}
	if (mass1==null || mass1==="") {
		mass1="null";
	}
	if (mass2==null || mass2==="") {
		mass2="null";
	}
	if (radius==null || radius==="") {
		radius="null";
	}

	var parameters = "?".concat("unit=gravitation&force=", force, "&mass1=", mass1, "&mass2=", mass2, "&radius=", radius);


	var url = "http://localhost:5000/api".concat(parameters);

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

        		<p style={{color: 'white', fontSize:30}}> Universal Gravation </p>


        		<Form onSubmit={this.onSubmit}>

					<Form.Input onChange={this.onChange} name="force" type="text" placeholder='Force' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="mass1" type="text" placeholder='Mass 1' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="mass2" type="text" placeholder='Mass 2' style={mystyle}/>

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


export default Gravation;