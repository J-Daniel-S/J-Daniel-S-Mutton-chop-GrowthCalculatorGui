import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

import Fcf from './types/Fcf';
import OpsCashFlow from './types/OpsCashFlow';

const stockCard = (props) => {
	const [fcf, setFcf] = useState(true);

	const toggleFcf = () => {
		setFcf(true);
	}

	const toggleNoFcf = () => {
		setFcf(false);
	}

	const linkCursor = { cursor: 'pointer' };

	return (
		<Card body>
			<Card.Title>
				Share price calculator
			</Card.Title>
			<Card.Link onClick={() => toggleFcf()} style={linkCursor}>Enter free cash flow</Card.Link>
			<Card.Link onClick={() => toggleNoFcf()} style={linkCursor}>Calculate free cash flow</Card.Link>
			<hr></hr>
			<br></br>
			{fcf ? <Fcf getStock={props.getStock}/>: <OpsCashFlow getStock={props.getStock}/>}
			<br></br>
		</Card>
	);
}

export default stockCard;