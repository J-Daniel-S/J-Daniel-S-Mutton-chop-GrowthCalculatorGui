import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const stockCard = (props) => {
	const [fcf, setFcf] = useState(true);

	const toggleFcf = () => {
		setFcf(true);
	}

	const toggleNoFcf = () => {
		setFcf(false);
	}

	return (
		<Card body>
			<Card.Title>
				Stock card
			</Card.Title>
			<Card.Link onClick={() => toggleFcf()} style={{ cursor: 'pointer' }}>Enter free cash flow</Card.Link>
			<Card.Link onClick={() => toggleNoFcf()} style={{ cursor: 'pointer' }}>Calculate free cash flow</Card.Link>
			<hr></hr>
			<br></br>
			{fcf && <p>fcf</p>}
			{!fcf && <p>No fcf</p>}
			<br></br>
		</Card>
	);
}

export default stockCard;