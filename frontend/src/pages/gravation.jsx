import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Container, Form, Button } from 'semantic-ui-react';

class Gravation extends React.Component{


	render() {

		const mystyle = {
			width: "50%",
			minWidth: "250px",
		};

		return (
      		<Container textAlign='center'>

        		<Header />

        		<p style={{color: 'white', fontSize:20}}> Universal Gravation </p>


        		<Form onSubmit={this.onSubmit}>

					<Form.Input onChange={this.onChange} name="force" type="text" placeholder='Force' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="mass1" type="text" placeholder='Mass 1' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="mass2" type="text" placeholder='Mass 2' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="radius" type="text" placeholder='Radius' style={mystyle}/>


					<Button type='submit' color='blue' style={mystyle}>Calculate</Button>
				</Form>



    		</Container>




			
		);
	}
}


export default Gravation;