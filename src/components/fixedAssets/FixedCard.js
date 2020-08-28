import React, { useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

import Cd from './types/Cd';
import Bond from './types/Bond';
import AssetContext from '../../context/AssetContext';

const fixedCard = (props) => {
	const [fixed, setFixed] = useContext(AssetContext);
	const [bond, setBond] = useState(false);

	const assets = fixed;

	const getResult = (event) => {
		const form = event.currentTarget;
		event.preventDefault();
		event.stopPropagation();

		let principle = form.principle.value;
		const iLength = form.investmentLength.value / 12;
		let compound = form.compound.value
		let rate = form.rate.value;
		let amount;

		if (form.amount) {
			amount = form.amount.value;
			principle = principle * amount;
		}

		if (isNaN(rate) || rate < 0) {
			alert("As much fun as it would be to calculate the result with \"" + rate + "\", it can't be done.  Please enter a valid number");
		} else {

			if (compound === "Monthly") {
				compound = 12;
			} else if (compound === "Annually") {
				compound = 1;
			} else if (compound === "Quarterly") {
				compound = 4;
			} else {
				compound = 365;
			}

			const headers = {
				'Content-type': 'application/json',
				'Access-Control-Allow-Origin': 'localhost:3000/',
				'Access-Control-Allow-Methods': 'POST',
			}

			const body = {
				principle: principle,
				interestRate: rate,
				length: iLength,
				compoundFrequency: compound
			}

			axios.post("http://localhost:8080/compound-calculator/savings", body, { headers })
				.then(res => {
					assets.push(res.data);
					setFixed(assets);
					fixed.map(asset => console.log(asset));
				});

		}
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
			{!bond && <Cd getResult={getResult} />}
			{bond && <Bond getResult={getResult} />}
			<br></br>
		</Card>
	);
}

export default React.memo(fixedCard);