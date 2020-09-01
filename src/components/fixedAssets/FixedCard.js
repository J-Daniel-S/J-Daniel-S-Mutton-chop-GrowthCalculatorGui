import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

import Cd from './types/Cd';
import Bond from './types/Bond';

const fixedCard = (props) => {
	const [bond, setBond] = useState(false);


	const getResult = (event) => {
		props.getResult(event);
	}

	const linkCursor = { cursor: 'pointer' }

	const toggleBond = () => {
		setBond(true);
	}

	const toggleCert = () => {
		setBond(false);
	}

	return (
		<Card body>
			<Card.Title>
				Compount interest calculator
			</Card.Title>
			<Card.Link onClick={() => toggleCert()} style={linkCursor}>Certificate</Card.Link>
			<Card.Link onClick={() => toggleBond()} style={linkCursor}>Bond</Card.Link>
			<hr></hr>
			<br></br>
			{bond ? <Bond getResult={getResult} /> : <Cd getResult={getResult} />}
			<br></br>
		</Card>
	);
}

export default React.memo(fixedCard);