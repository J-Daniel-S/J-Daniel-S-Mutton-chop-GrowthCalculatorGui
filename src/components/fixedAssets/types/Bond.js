import React from 'react';

import { Form, Button, Row, Col } from 'react-bootstrap';

const bond = (props) => {

	return (
		<React.Fragment>
			<Form onSubmit={props.getResult}>
				<Form.Group controlId="principle">
					<Form.Label>
						Issue price
							</Form.Label>
					<Form.Control type="text" placeholder="per bond" required />
				</Form.Group>
				<Form.Group controlId="rate">
					<Form.Label>
						Interest rate
							</Form.Label>
					<Form.Control type="text" placeholder="%" required />
				</Form.Group>
				<br></br>
				<Form.Group controlId="investmentLength">
					<Form.Label>
						Length to maturity
								</Form.Label>
					<Form.Control type="input" placeholder="in months" required />
				</Form.Group>
				<Row>
					<Col>
						<Form.Group controlId="compound">
							<Form.Label>Payment frequency</Form.Label>
							<Form.Control as="select" required>
								<option>Monthly</option>
								<option>Daily</option>
								<option>Quarterly</option>
								<option>Annually</option>
							</Form.Control>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="amount">
							<Form.Label>
								Number purchased
							</Form.Label>
							<Form.Control type="number" placeholder="#" required>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>
				<Form.Text className="text-muted">assumes the bond is not called</Form.Text>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<Button type="submit">Get result</Button>{"   "}
			</Form>
		</React.Fragment>
	);
}

export default React.memo(bond);