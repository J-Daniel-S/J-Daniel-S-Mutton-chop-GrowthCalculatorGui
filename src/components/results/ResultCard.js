import React, { useState, useEffect, useContext } from 'react';
import { Card, Row, Table, Badge } from 'react-bootstrap';

import AssetContext from '../../context/AssetContext';

const resultCard = (props) => {
	const [fixed, setFixed, stocks, setStocks] = useContext(AssetContext);
	const [fixedAssets, setFixedAssets] = useState([]);
	const [company, setCompany] = useState([]);

	useEffect(() => {
		setFixedAssets([...fixed]);
		setCompany([...stocks]);
	}, [fixed, stocks]);


	const formClear = () => {
		setFixed([]);
		setStocks([]);
	}

	return (
		<Card body>
			<article>
				<Card.Title>
					Result card
						</Card.Title>
				<Card.Link variant="secondary" style={{ cursor: 'pointer' }} onClick={() => formClear()}>Clear form</Card.Link>
				<hr></hr>
				<section>
					<Row>
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
								{fixedAssets && fixedAssets.map((asset, index) => (
									<tr key={index}>
										<td>
											{index + 1}
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
					</Row>
					<Row>
						<p><Badge variant="secondary">Stocks</Badge></p>
						<Table striped borderless hover size="sm" variant="secondary" responsive>
							<thead>
								<tr>
									<th>
										Ticker
											</th>
									<th>
										Market
											</th>
									<th>
										Discounted
											</th>
									<th>
										Avg growth %
											</th>
								</tr>
							</thead>
							<tbody>
								{company && company.map((asset, index) => (
									<tr key={index}>
										<td>
											{asset.ticker}
										</td>
										<td>
											${Number.parseFloat(asset.buyAndHoldValue).toFixed(2)}
										</td>
										<td>
											${Number.parseFloat(asset.discountedValue).toFixed(2)}
										</td>
										<td>
											{(asset.avgChange - 100).toFixed(2)}
										</td>
									</tr>))
								}
							</tbody>
						</Table>
					</Row>
				</section>
			</article>
		</Card>
	);
}

export default resultCard;