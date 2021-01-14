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

				<Button size='massive' inverted as={Link} to={process.env.PUBLIC_URL + "/forces"} style={style}>
					Forces
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to={process.env.PUBLIC_URL + "/kinomatics"} style={style}>
					Kinomatics
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to={process.env.PUBLIC_URL + "/circular"} style={style}>
					Circular Motion
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to={process.env.PUBLIC_URL + "/gravation"} style={style}>
					Universal Gravation
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to={process.env.PUBLIC_URL + "/work"} style={style}>
					Work
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to={process.env.PUBLIC_URL + "/equations"} style={style}>
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