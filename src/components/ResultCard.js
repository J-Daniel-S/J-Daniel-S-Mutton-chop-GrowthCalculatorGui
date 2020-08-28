import React, { useContext, useState } from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';

import AssetContext from '../context/AssetContext';

const resultCard = (props) => {
	// eslint-disable-next-line
	const [fixed, setFixed, stocks, setStocks] = useContext(AssetContext);

	return (
		<Card body>
			<Card.Title>
				Result card
			</Card.Title>
			<br></br>
			<hr></hr>
			<br></br>
			<section>
				<Row>
					<Col>
						<Table striped borderless hover size="sm" variant="secondary" responsive>
							<thead>
								<tr>
									<th>
										Compounding assets
								</th>
								</tr>
							</thead>
							<tbody>
								{fixed.map(asset => (
									<tr>
										<td>
											${asset.principle}
										</td>
										<td>
											total: ${asset.endValue}
										</td>
									</tr>))
								}
							</tbody>
						</Table>
					</Col>
					<Col>
						<Table striped borderless hover size="sm" variant="secondary" responsive>
							<thead>
								<tr>
									<th>
										Stocks
								</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										Ticker
								</td>
									<td>
										Fair price
								</td>
									<td>
										Discount price
								</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</section>
		</Card>
	);
}

export default resultCard;