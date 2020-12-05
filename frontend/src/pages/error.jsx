import React from "react";
import Header from "./header";
import { Container } from 'semantic-ui-react';


class InvalidPage extends React.Component{
	render() {
		return (
			<Container textAlign='center'>

				<Header />

				<p style={{color: 'white', fontSize:72}}> 404 Error </p>

			</Container>


		);
	}
}


export default InvalidPage;