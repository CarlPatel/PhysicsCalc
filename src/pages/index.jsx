import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Container, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";



class IndexPage extends React.Component{

	


	render() {

	const style = {
		width: "50%",
		minWidth: "250px"
	};

		return (

			<Container column={3} textAlign='center'>

				<Header />

				<Button size='massive' inverted as={Link} to="/forces" style={style}>
					Forces
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to="/kinomatics" style={style}>
					Kinomatics
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to="/circular" style={style}>
					Circular Motion
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to="/gravation" style={style}>
					Universal Gravation
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to="/work" style={style}>
					Work
				</Button>

				<br />
				<br />
				<br />

				<Button size='massive' inverted as={Link} to="/equations" style={style}>
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