import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Container, Form, Button } from 'semantic-ui-react';

class Work extends React.Component{


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



    		</Container>




			
		);
	}
}


export default Work;