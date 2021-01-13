import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Container, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";



class IndexPage extends React.Component{

	


	render() {

	const style = {
		width: "50%"
	};

		return (

			<Container column={3} textAlign='center'>

				<Header />

				<Button size='massive' inverted as={Link} to="/PhysicsCalc/forces" style={style}>
					Forces
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to="/PhysicsCalc/kinomatics" style={style}>
					Kinomatics
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to="/PhysicsCalc/circular" style={style}>
					Circular Motion
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to="/PhysicsCalc/gravation" style={style}>
					Universal Gravation
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to="/PhysicsCalc/work" style={style}>
					Work
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to="/PhysicsCalc/equations" style={style}>
					Equations
				</Button>

				<br />
				<br />
				<br />
				<br />
				<br />






			</Container>
			
		);
	}
}


export default IndexPage;