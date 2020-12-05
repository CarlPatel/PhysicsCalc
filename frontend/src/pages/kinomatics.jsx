import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Container, Form, Button } from 'semantic-ui-react';

class Kinomatics extends React.Component{




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

					<Form.Input onChange={this.onChange} name="initial velocity" type="text" placeholder='Initial Velocity' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="final velocity" type="text" placeholder='Final Velocity' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="acceleration" type="text" placeholder='Acceleration' style={mystyle}/>

					<Form.Input onChange={this.onChange} name="time" type="text" placeholder='Time' style={mystyle}/>


					<Button type='submit' color='blue' style={mystyle}>Calculate</Button>
				</Form>



    		</Container>




			
		);
	}
}


export default Kinomatics;