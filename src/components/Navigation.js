import React from 'react';
import { Navbar, Nav, Container, Form, Button, NavDropdown } from 'react-bootstrap';

const navigation = (props) => {

	const tickerSearch = (event) => {
		const form = event.currentTarget;
		event.preventDefault();
		event.stopPropagation();
		window.open('https://finance.yahoo.com/quote/' + form.ticker.value + '/cash-flow?p=' + form.ticker.value, '_blank');
	}

	return (
		<Navbar bg="secondary" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand><i className="fa fa-usd" aria-hidden="true"></i> <span className="title">Growth Calculator</span></Navbar.Brand>
				<Nav className="mr-auto">
					<NavDropdown title="Discover stocks" id="dropdown">
						<NavDropdown.Item
							rel="noopener noreferrer"
							target="_blank"
							href="https://finance.yahoo.com/"
						>
							Yahoo finance
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item
							rel="noopener noreferrer"
							target="_blank"
							href="https://www.google.com/finance"
						>
							Google finance
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item
							rel="noopener noreferrer"
							target="_blank"
							href="https://www.finviz.com/screener.ashx"
						>
							Finviz stock screener
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item
							rel="noopener noreferrer"
							target="_blank"
							href="https://www.zacks.com/screening/stock-screener"
						>
							Zach's stock screener
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Form inline onSubmit={tickerSearch}>
					<Form.Group controlId="ticker">
						<Form.Control type="text" placeholder="Ticker search" className="mr-sm-2" />
						<Button variant="outline-light" type="submit">Search</Button>
					</Form.Group>
				</Form>
			</Container>
		</Navbar>
	);
}

export default navigation;