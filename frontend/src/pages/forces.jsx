import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Form, Button, Container } from 'semantic-ui-react'

class Forces extends React.Component{


  constructor(props) {
    super(props);
    this.state = {status: null, force: null, mass: null, acceleration: null, answer: null};

  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


  onSubmit = () => {
    var force = this.state.force
    var mass = this.state.mass;
    var acceleration = this.state.acceleration;
    var status = this.state.status;


    if (force==null) {
      force="null";
    }
    if (mass==null) {
      mass="null";
    }
    if (acceleration==null) {
      acceleration="null";
    }

    var parameters = "?".concat("unit=forces&force=", force, "&mass=", mass, "&acceleration=", acceleration);

    var url = "http://localhost:5000/api".concat(parameters);

    fetch(url, {method:"GET", mode: "no-cors"})
      .then((response) => response.json())
        .then(data => console.log(data))
          .catch(e => console.log(e))
 

  }





  render() {
  
    const mystyle = {
      width: "50%",
      minWidth: "250px",
    };

    return (

      <Container textAlign='center'>

        <Header />
        <p style={{color: 'white', fontSize:30}}> Forces </p>



        <Form onSubmit={this.onSubmit}>

          <Form.Input onChange={this.onChange} name="force" type="text" placeholder='Force' style={mystyle}/>

          <Form.Input onChange={this.onChange} name="mass" type="text" placeholder='Mass' style={mystyle}/>

          <Form.Input onChange={this.onChange} name="acceleration" type="text" placeholder='Acceleration' style={mystyle}/>


          <Button type='submit' color='blue' style={mystyle}>Calculate</Button>
        </Form>


        <br />



        <p style={{color: 'white'}}> force: {this.state.force} </p>
        <p style={{color: 'white'}}> mass: {this.state.mass} </p>
        <p style={{color: 'white'}}> acceleration: {this.state.answer} </p>





        


      </Container>






      
    );
  }
}


export default Forces;