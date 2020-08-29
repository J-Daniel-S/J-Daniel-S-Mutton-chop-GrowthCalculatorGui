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
		<Card body>
			<Card.Title>
				Result card
			</Card.Title>
			<br></br>
			<hr></hr>
			<section>
				<Row>
					<Col>
						<p><Badge variant="secondary">Compounding assets</Badge></p>
						<Table striped borderless hover size="sm" variant="secondary" responsive>
							<thead>
								<tr>
									<th>
										#
									</th>
									<th>
										Principle
									</th>
									<th>
										length
									</th>
									<th>
										End value
									</th>
								</tr>
							</thead>
							<tbody>
								{fixedAssets.map((asset, index) => (
									<tr>
										<td>
											{index + 1};
										</td>
										<td>
											${asset.principle}
										</td>
										<td>
											{asset.iLength} yrs
										</td>
										<td>
											${asset.endValue}
										</td>
									</tr>))
								}
							</tbody>
						</Table>
					</Col>
					<Col>
						<p><Badge variant="secondary">Stocks</Badge></p>
						<Table striped borderless hover size="sm" variant="secondary" responsive>
							<thead>
								<tr>
									<th>
										#
									</th>
									<th>
										Ticker
									</th>
									<th>
										Market
									</th>
									<th>
										Discounted
									</th>
								</tr>
							</thead>
							<tbody>
								{/* <tr>
									<td>
										Ticker
								</td>
									<td>
										Fair price
								</td>
									<td>
										Discount price
								</td> */}
								{/* </tr> */}
							</tbody>
						</Table>
					</Col>
				</Row>
			</section>
		</Card>
	);
}

export default resultCard;