import React, { useState, useEffect, useRef } from 'react';
import { Card, Row, Col, Table, Badge } from 'react-bootstrap';

import AssetContext from '../context/AssetContext';

const resultCard = (props) => {
	// eslint-disable-next-line
	// const [fixed, setFixed, stocks, setStocks] = useContext(AssetContext);
	const [fixedAssets, setFixedAssets] = useState([]);
	const [company, setCompany] = useState([]);

	const previousFixed = useRef(props.fixed);
	const previousStocks = useRef(props.stocks);

	useEffect(() => {
		if (previousFixed.current !== props.fixed || previousStocks.current !== props.stocks) {
			setFixedAssets(props.fixed);
			setCompany(props.stocks);
			console.log("fixed: " + fixedAssets)
		}
		previousFixed.current = props.fixed;


	}, [props.fixed, props.stocks])

	return (
		
	);
}

export default resultCard;