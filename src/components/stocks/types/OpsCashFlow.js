import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const opsCashFlow = (props) => {

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
						<Form.Label>Operations cash flows in $thousands</Form.Label>
						<Form.Group controlId="cf1">
							<Form.Control size="sm" type="number" placeholder="Current" required />
						</Form.Group>
						<Form.Group controlId="cf2">
							<Form.Control size="sm" type="number" placeholder="Year prior" required />
						</Form.Group>
						<Form.Group controlId="cf3">
							<Form.Control size="sm" type="number" placeholder="Two years prior" required />
						</Form.Group>
						<Form.Group controlId="cf4">
							<Form.Control size="sm" type="number" placeholder="Three years prior" required />
						</Form.Group>
						<Form.Group controlId="cf5">
							<Form.Control size="sm" type="number" placeholder="Four years prior" required />
						</Form.Group>
					</Col>
					<Col>
						<Form.Label>Capital expenditures in $thousands</Form.Label>
						<Form.Group controlId="capex1">
							<Form.Control size="sm" type="number" placeholder="Current" required />
						</Form.Group>
						<Form.Group controlId="capex2">
							<Form.Control size="sm" type="number" placeholder="Year prior" required />
						</Form.Group>
						<Form.Group controlId="capex3">
							<Form.Control size="sm" type="number" placeholder="Two years prior" required />
						</Form.Group>
						<Form.Group controlId="capex4">
							<Form.Control size="sm" type="number" placeholder="Three years prior" required />
						</Form.Group>
						<Form.Group controlId="capex5">
							<Form.Control size="sm" type="number" placeholder="Four years prior" required />
						</Form.Group>
					</Col>
				</Row>
				<br></br>
				<Button type="submit">Get result</Button>{"   "}
				<Button variant="secondary" onClick={() => formClear()}>Clear form</Button>
			</Form>
		</React.Fragment>
	);
}

export default opsCashFlow;