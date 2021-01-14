import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Menu, Grid,Dropdown } from 'semantic-ui-react';
import { Link } from "react-router-dom";




class NavBar extends React.Component{

	constructor(props) {
		super(props);
		this.state = {activeItem: null};
	}


	handleItemClick = (e, { name }) => this.setState({ activeItem: name })


	render() {
		const { activeItem } = this.state;
		
		return (
			<Grid centered>

				<Grid.Row only="computer and tablet">

					<Menu widths={6} inverted borderless secondary>
						<Menu.Item 
							name='forces'
							active={activeItem === 'forces'}
							onClick={this.handleItemClick}
							as={Link}
							to="/forces"
						>
				        	Forces
						</Menu.Item>

						<Menu.Item
						name='kinomatics'
						active={activeItem === 'kinomatics'}
						onClick={this.handleItemClick}
						as={Link}
						to="/kinomatics"
						>
							Kinomatics
						</Menu.Item>

						<Menu.Item
						name='Circular Motion'
						active={activeItem === 'Circular Motion'}
						onClick={this.handleItemClick}
						as={Link}
						to="/circular"
						>
							Circular Motion
						</Menu.Item>

						<Menu.Item
						name='Universal Gravation'
						active={activeItem === 'Universal Gravation'}
						onClick={this.handleItemClick}
						as={Link}
						to="/gravation"
						>
							Universal Gravation
						</Menu.Item>

						<Menu.Item
						name='Work'
						active={activeItem === 'Work'}
						onClick={this.handleItemClick}
						as={Link}
						to="/work"
						>
							Work
						</Menu.Item>

						<Menu.Item
						name='Equations'
						active={activeItem === 'Equations'}
						onClick={this.handleItemClick}
						as={Link}
						to="/equations"
						>
							Equations
						</Menu.Item>

					</Menu>

				</Grid.Row>





				<Grid.Row only="mobile">

					<Menu widths={2} inverted borderless secondary>

						<Dropdown item text='Calculate'>
							<Dropdown.Menu inverted>

								<Dropdown.Item
								name='Forces'
								active={activeItem === 'Forces'}
								onClick={this.handleItemClick}
								as={Link}
								to="/forces"
								>
									Forces
								</Dropdown.Item>

								<Dropdown.Item
								name='Kinomatics'
								active={activeItem === 'Kinomatics'}
								onClick={this.handleItemClick}
								as={Link}
								to="/kinomatics"
								>
									Kinomatics
								</Dropdown.Item>


								<Dropdown.Item
								name='Circular Motion'
								active={activeItem === 'Circular Motion'}
								onClick={this.handleItemClick}
								as={Link}
								to="/circular"
								>
									Circular Motion
								</Dropdown.Item>

								<Dropdown.Item
								name='Universal Gravation'
								active={activeItem === 'Universal Gravation'}
								onClick={this.handleItemClick}
								as={Link}
								to="/gravation"
								>
									Universal Gravation
								</Dropdown.Item>

								<Dropdown.Item name='Work'
								active={activeItem === 'Work'}
								onClick={this.handleItemClick}
								as={Link}
								to="/work"
								>
									Work
								</Dropdown.Item>
								
							</Dropdown.Menu>
						</Dropdown>


						<Menu.Item
						name='Equations'
						active={activeItem === 'Equations'}
						onClick={this.handleItemClick}
						as={Link}
						to="/equations"
						>
							Equations
						</Menu.Item>

					</Menu>

				</Grid.Row>
			</Grid>
		);
	}
}


export default NavBar;