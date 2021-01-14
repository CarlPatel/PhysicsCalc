import React from "react";
import NavBar from "./navbar";
import { Container } from 'semantic-ui-react'

class Header extends React.Component{


	render() {
		return (
			<Container textAlign='center'>

				<br />
				<br />

				<a href="./" style={{color: 'white', fontSize:36}}> Physics Calculator </a>

				<br />
				<br />

				<NavBar />

				<br />
				<br />


			</Container>
		);
	}


}


export default Header;