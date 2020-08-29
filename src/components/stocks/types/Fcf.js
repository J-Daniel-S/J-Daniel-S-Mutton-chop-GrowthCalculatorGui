import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const fcf = (props) => {

	const formClear = () => {
		console.log("clear form");
	}

	const getStock = (event) => {
		props.getStock(event);
	}

	return (
		<React.Fragment>
			<Form onSubmit={getStock}>
				<Row>
					<Col>
						<Form.Group controlId="roi">
							<Form.Label>Desired ROI</Form.Label>
							<Form.Control type="number" placeholder="%" required />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="mos">
							<Form.Label>Desired MOS</Form.Label>
							<Form.Control type="number" placeholder="%" required />
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group controlId="equity">
							<Form.Label>Current shareholder equity</Form.Label>
							<Form.Control type="number" placeholder="in $thousands" required />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="shares">
							<Form.Label>Shares outstanding</Form.Label>
							<Form.Control type="number" placeholder="millions of shares" required />
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Label>Free cash flows in $thousands</Form.Label>
						<Form.Group controlId="fcf1">
							<Form.Control size="sm" type="number" placeholder="Current" required />
						</Form.Group>
						<Form.Group controlId="fcf2">
							<Form.Control size="sm" type="number" placeholder="Year prior" required />
						</Form.Group>
						<Form.Group controlId="fcf3">
							<Form.Control size="sm" type="number" placeholder="Two years prior" required />
						</Form.Group>
						<Form.Group controlId="fcf4">
							<Form.Control size="sm" type="number" placeholder="Three years prior" required />
						</Form.Group>
						<Form.Group controlId="fcf5">
							<Form.Control size="sm" type="number" placeholder="Four years prior" required />
						</Form.Group>
					</Col>
					<Col></Col>
				</Row>
				<br></br>
				<Button type="submit">Get result</Button>{"   "}
				<Button variant="secondary" onClick={() => formClear()}>Clear form</Button>
			</Form>
		</React.Fragment>
	);
}

export default fcf;