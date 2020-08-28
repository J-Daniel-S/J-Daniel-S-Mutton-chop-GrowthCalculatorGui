import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GrowthCalculator.css';
import { Container, CardDeck } from 'react-bootstrap';

import FixedCard from '../components/fixedAssets/FixedCard';
import StockCard from '../components/StockCard';
import ResultCard from '../components/ResultCard';
import Navigation from '../components/Navigation';
import AssetContext from '../context/AssetContext.js';
import HowTo from '../components/HowTo';

const growthCalculator = (props) => {
	const [fixedState, setFixedState] = useState([]);
	const [stockState, setStockState] = useState([]);

	const assets = [fixedState, setFixedState, stockState, setStockState];

	return (

		<main>
			<AssetContext.Provider value={[...assets]}>
				<Container>
					<br></br>
					<Navigation />
				</Container>
				<br></br>
				<CardDeck>
					<FixedCard />
					<StockCard />
					<ResultCard />
				</CardDeck>
				<br></br>
				<HowTo />
			</AssetContext.Provider>
		</main>
	);
}

export default React.memo(growthCalculator);