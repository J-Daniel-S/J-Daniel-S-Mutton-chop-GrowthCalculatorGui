import React, { useState } from 'react';
import { Form, Button, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

const fcf = (props) => {
	const [ticker, setTicker] = useState("");
	const [margin, setMargin] = useState("");
	const [growth, setGrowth] = useState("");
	const [equity, setEquity] = useState("");
	const [shares, setShares] = useState("");
	const [roi, setRoi] = useState("");

	const [cf1, setCf1] = useState("");
	const [cf2, setCf2] = useState("");
	const [cf3, setCf3] = useState("");
	const [cf4, setCf4] = useState("");
	const [cf5, setCf5] = useState("");

	const handleChange = input => event => {
		switch (input) {
			case "ticker":
				setTicker(event.target.value);
				break;
			case "margin":
				setMargin(event.target.value);
				break;
			case "growth":
				setGrowth(event.target.value);
				break;
			case "equity":
				setEquity(event.target.value);
				break;
			case "shares":
				setShares(event.target.value);
				break;
			case "roi":
				setRoi(event.target.value);
				break;
			case "cf1":
				setCf1(event.target.value);
				break;
			case "cf2":
				setCf2(event.target.value);
				break;
			case "cf3":
				setCf3(event.target.value);
				break;
			case "cf4":
				setCf4(event.target.value);
				break;
			case "cf5":
				setCf5(event.target.value);
				break;
			default:
				break;
		}
	}

	const getStock = (event) => {
		props.getStock(event);
	}

	const renderGrowthTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Only enter a growth rate% here if you have a good reason to believe yours is correct
		</Tooltip>
	)

	const renderRoiTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Return on investment.  Should be >6%
		</Tooltip>
	)

	const renderMosTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Margin of safety.  Read above.
		</Tooltip>
	)

	const clearForm = () => {
		setTicker("");
		setMargin("");
		setGrowth("");
		setEquity("");
		setShares("");
		setRoi("");

		setCf1("");
		setCf2("");
		setCf3("");
		setCf4("");
		setCf5("");
	}

	const delay = { show: 150, hide: 600 };

	return (
		<React.Fragment>
			<Form onSubmit={getStock}>
				<Row>
					<Col>
						<Form.Group controlId="ticker">
							<Form.Label>Ticker</Form.Label>
							<Form.Control type="input" placeholder="e.g. INTC" required value={ticker} onChange={handleChange("ticker")} />
						</Form.Group>
					</Col>
					<Col>
						<OverlayTrigger
							placement="top"
							delay={delay}
							overlay={renderMosTooltip}>
							<Form.Group controlId="mos">
								<Form.Label>Desired MOS</Form.Label>
								<Form.Control type="number" placeholder="%" required value={margin} onChange={handleChange("margin")} />
							</Form.Group>
						</OverlayTrigger>
					</Col>
					<Col>
						<OverlayTrigger
							placement="top-end"
							delay={delay}
							overlay={renderGrowthTooltip}>
							<Form.Group controlId="growth">
								<Form.Label>Set growth rate</Form.Label>
								<Form.Control type="number" placeholder="%" value={growth} onChange={handleChange("growth")} />
							</Form.Group>
						</OverlayTrigger>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group controlId="equity">
							<Form.Label>Current equity</Form.Label>
							<Form.Control type="number" placeholder="in $thousands" required value={equity} onChange={handleChange("equity")} />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="shares">
							<Form.Label>Shares</Form.Label>
							<Form.Control type="number" placeholder="in millions" required value={shares} onChange={handleChange("shares")} />
						</Form.Group>
					</Col>
					<Col>
						<OverlayTrigger
							placement="bottom-end"
							delay={delay}
							overlay={renderRoiTooltip}>
							<Form.Group controlId="roi">
								<Form.Label>Desired ROI</Form.Label>
								<Form.Control type="number" placeholder="%" required value={roi} onChange={handleChange("roi")} />
							</Form.Group>
						</OverlayTrigger>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Label>Free cash flow in $thousands</Form.Label>
						<Form.Group controlId="fcf1">
							<Form.Control size="sm" type="number" placeholder="Current" required value={cf1} onChange={handleChange("cf1")} />
						</Form.Group>
						<Form.Group controlId="fcf2">
							<Form.Control size="sm" type="number" placeholder="Year prior" required value={cf2} onChange={handleChange("cf2")} />
						</Form.Group>
						<Form.Group controlId="fcf3">
							<Form.Control size="sm" type="number" placeholder="Two years prior" required value={cf3} onChange={handleChange("cf3")} />
						</Form.Group>
						<Form.Group controlId="fcf4">
							<Form.Control size="sm" type="number" placeholder="Three years prior" required value={cf4} onChange={handleChange("cf4")} />
						</Form.Group>
						<Form.Group controlId="fcf5">
							<Form.Control size="sm" type="number" placeholder="Four years prior" required value={cf5} onChange={handleChange("cf5")} />
						</Form.Group>
					</Col>
					<Col></Col>
				</Row>
				<br></br>
				<Button type="submit">Get result</Button>{"   "}
				<Button variant="secondary" onClick={clearForm}>Clear form </Button>
			</Form>
		</React.Fragment>
	);
}

export default fcf;