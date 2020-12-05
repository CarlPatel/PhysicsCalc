import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Container, Form, Button } from 'semantic-ui-react';

class Circular extends React.Component{


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


    		</Container>




			
		);
	}
}


export default Circular;