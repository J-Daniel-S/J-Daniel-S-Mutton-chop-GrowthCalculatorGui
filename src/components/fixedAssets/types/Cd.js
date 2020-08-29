import React from 'react';

import { Form, Button } from 'react-bootstrap';

const cd = (props) => {

	const formClear = () => {
		console.log('clear form');
	}

	return (
		<React.Fragment>
			<Form onSubmit={props.getResult}>
				<Form.Group controlId="principle">
					<Form.Label>
						Principle
							</Form.Label>
					<Form.Control type="number" placeholder="e.g. 1000" required />
				</Form.Group>
				<Form.Group controlId="rate">
					<Form.Label>
						Interest rate
							</Form.Label>
					<Form.Control type="text" placeholder="%" required />
				</Form.Group>
				<Form.Group controlId="investmentLength">
					<Form.Label>
						Length of investment
								</Form.Label>
					<Form.Control type="input" placeholder="in months" required />
				</Form.Group>
				<Form.Group controlId="compound">
					<Form.Label>Compound frequency</Form.Label>
					<Form.Control as="select" required>
						<option>Monthly</option>
						<option>Daily</option>
						<option>Quarterly</option>
						<option>Annually</option>
					</Form.Control>
				</Form.Group>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<Button type="submit">Get result</Button>{"   "}
				<Button variant="secondary" onClick={() => formClear()}>Clear form</Button>
			</Form>
		</React.Fragment>
	);
}

export default React.memo(cd);