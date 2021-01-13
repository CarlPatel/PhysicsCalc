import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Container, Form, Button } from 'semantic-ui-react';

class Work extends React.Component{


	constructor(props) {
		super(props);
		this.state = {work:null, force:null, displacement:null, solvedFor:null, answer: null, equation:null, equationWithNumbers:null, error:null};
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}


	onSubmit = () => {
		var work = this.state.work;
		var force = this.state.force;
		var displacement = this.state.displacement;


	if (work==null || work==="") {
		work="null";
	}
	if (force==null || force==="") {
		force="null";
	}
	if (displacement==null || displacement==="") {
		displacement="null";
	}

	var parameters = "?".concat("unit=work&work=", work, "&force=", force, "&displacement=", displacement);


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

				<p style={{color: 'white', fontSize:30}}> Work </p>


				<Form onSubmit={this.onSubmit}>

					<Form.Input onChange={this.onChange} name="work" type="text" placeholder='Work' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="force" type="text" placeholder='Force'style={mystyle}/>

					<Form.Input onChange={this.onChange} name="displacement" type="text" placeholder='Displacement' style={mystyle}/>


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


export default Work;