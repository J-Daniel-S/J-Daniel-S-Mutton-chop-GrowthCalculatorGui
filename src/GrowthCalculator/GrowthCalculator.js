import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GrowthCalculator.css';
import { Container, CardDeck } from 'react-bootstrap';
import axios from 'axios';

import FixedCard from '../components/fixedAssets/FixedCard';
import StockCard from '../components/stocks/StockCard';
import ResultCard from '../components/results/ResultCard';
import Navigation from '../components/Navigation';
import AssetContext from '../context/AssetContext.js';
import HowTo from '../components/HowTo';

const growthCalculator = (props) => {
	const [fixedState, setFixedState] = useState([]);
	const [stockState, setStockState] = useState([]);

	const assets = [fixedState, setFixedState, stockState, setStockState];

	const getResult = (event) => {
		const form = event.currentTarget;
		event.preventDefault();
		event.stopPropagation();

		const assets = fixedState;

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
				iLength: iLength,
				compoundFrequency: compound
			}

			axios.post("http://localhost:8080/compound-calculator/savings", body, { headers })
				.then(res => {
					assets.push(res.data);
					setFixedState([...assets]);
					fixedState.map(asset => console.log(asset));
				});

		}
	}

	const getStockPrice = (event) => {
		const form = event.currentTarget;
		event.preventDefault();
		event.stopPropagation();

		const stocks = stockState;

		const roi = form.roi.value;
		const mos = form.mos.value;
		const equity = form.equity.value * 1000;
		const shares = form.shares.value * 1000000;
		const ticker = form.ticker.value;
		let growth;

		if (form.growth.value) {
			growth = form.growth.value;
		}

		if (roi <= 0) {
			alert("You probably don't want to make nothing on your investment");
		} else if (mos < 0 || mos > 50) {
			alert("Margin of safety must be between 0 (I don't recommend this) and 50");
		} else if (shares <= 0) {
			alert("Are you sure that's the correct number of shares?");
		} else {

			const headers = {
				'Content-type': 'application/json',
				'Access-Control-Allow-Origin': 'localhost:3000/',
				'Access-Control-Allow-Methods': 'POST',
			}

			let body;

			let url;

			if (form.fcf1) {
				let fcf1; let fcf2; let fcf3; let fcf4; let fcf5;

				fcf1 = form.fcf1.value * 1000;
				fcf2 = form.fcf2.value * 1000;
				fcf3 = form.fcf3.value * 1000;
				fcf4 = form.fcf4.value * 1000;
				fcf5 = form.fcf5.value * 1000;

				const fcf = [fcf5, fcf4, fcf3, fcf2, fcf1];

				if (growth) {
					url = "http://localhost:8080/compound-calculator/stock-fcf/" + growth;
				} else {
					url = "http://localhost:8080/compound-calculator/stock-fcf";
				}

				body = {
					desiredReturn: roi,
					currentEquity: equity,
					marginOfSafety: mos,
					shares: shares,
					freeCashFlow: fcf,
					ticker: ticker.toUpperCase()
				}

				axios.post(url, body, { headers })
					.then(res => {
						stocks.push(res.data);
						setStockState([...stocks]);
					});

			} else {
				let cf1; let cf2; let cf3; let cf4; let cf5;
				let capex1; let capex2; let capex3; let capex4; let capex5;

				cf1 = form.cf1.value * 1000;
				cf2 = form.cf2.value * 1000;
				cf3 = form.cf3.value * 1000;
				cf4 = form.cf4.value * 1000;
				cf5 = form.cf5.value * 1000;

				capex1 = form.capex1.value * 1000;
				capex2 = form.capex2.value * 1000;
				capex3 = form.capex3.value * 1000;
				capex4 = form.capex4.value * 1000;
				capex5 = form.capex5.value * 1000;

				const cf = [cf5, cf4, cf3, cf2, cf1];
				const capex = [capex5, capex4, capex3, capex2, capex1];

				if (growth) {
					url = "http://localhost:8080/compound-calculator/stock/" + growth;
				} else {
					url = "http://localhost:8080/compound-calculator/stock";
				}

				body = {
					desiredReturn: roi,
					currentEquity: equity,
					marginOfSafety: mos,
					shares: shares,
					cashFlows: cf,
					capitalExpenditures: capex,
					ticker: ticker.toUpperCase()
				}

				axios.post(url, body, { headers })
					.then(res => {
						stocks.push(res.data);
						setStockState([...stocks]);
					});

			}
		}
	}

	return (

		<main>
			<AssetContext.Provider value={[...assets]}>
				<Container>
					<br></br>
					<Navigation />
				</Container>
				<br></br>
				<HowTo />
				<br></br>
				<CardDeck>
					<FixedCard getResult={getResult} />
					<StockCard getStock={getStockPrice} />
					<ResultCard />
				</CardDeck>
				<br></br>
				<br></br>
			</AssetContext.Provider>
		</main>
	);
}

export default growthCalculator;