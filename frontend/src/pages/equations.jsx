import React from "react";
import 'semantic-ui-css/semantic.min.css';
import Header from "./header";
import { Table, Container } from 'semantic-ui-react';

class Equations extends React.Component{


  render() {
    return (
      <Container textAlign='center'>

        <Header />

        <p style={{color: 'white', fontSize:30}}> Equations </p>


        <Table striped unstackable inverted textAlign='center'>

          <Table.Body>
            <Table.Row>
              <Table.Cell width={1}>Forces</Table.Cell>
              <Table.Cell width={1}>F=m*a</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Circular Motion</Table.Cell>
              <Table.Cell>(m*v^2)/r</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Universal Gravation</Table.Cell>
              <Table.Cell>(G*m1*m2)/r</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Work</Table.Cell>
              <Table.Cell>W=F*s</Table.Cell>
            </Table.Row>
          </Table.Body>

        </Table>


      </Container>

    );
  }
}


export default Equations;