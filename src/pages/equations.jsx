import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Table, Container } from 'semantic-ui-react';

class Equations extends React.Component{


	render() {
		return (
			<Container textAlign='center' >

				<Header />

				<p style={{color: 'white', fontSize:30}}> Equations </p>


				<Table striped unstackable inverted textAlign='center' verticalAlign='middle' columns={2}>

					<Table.Body>
						<Table.Row>
							<Table.Cell style={{fontSize:16}}>Forces</Table.Cell>
							<Table.Cell>F = m*a</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell style={{fontSize:20}}>Kinematics</Table.Cell>
							<Table.Cell>
								fv = iv + a*t
								<br />
								x = t/2 (fv+iv)
								<br />
								x = iv*t + 1/2*a*t^2
								<br />
								fv^2 = iv^2 + 2*a*x
							</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell style={{fontSize:16}}>Circular Motion</Table.Cell>
							<Table.Cell>F = (m*v^2)/r</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell style={{fontSize:16}}>Universal Gravation</Table.Cell>
							<Table.Cell>F = (G*m1*m2)/r</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell style={{fontSize:16}}>Work</Table.Cell>
							<Table.Cell>W = F*s</Table.Cell>
						</Table.Row>

					</Table.Body>

				</Table>


			</Container>

		);
	}
}


export default Equations;