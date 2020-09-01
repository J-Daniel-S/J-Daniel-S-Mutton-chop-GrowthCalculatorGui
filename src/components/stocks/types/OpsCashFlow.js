import React from 'react';
import { Form, Button, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

const opsCashFlow = (props) => {

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

	const delay = { show: 250, hide: 600 };

	return (
		<React.Fragment>
			<Form onSubmit={getStock}>
				<Row>
					<Col>
						<Form.Group controlId="ticker">
							<Form.Label>Ticker</Form.Label>
							<Form.Control type="input" placeholder="e.g. INTC" required />
						</Form.Group>
					</Col>
					<Col>
						<OverlayTrigger
							placement="top"
							delay={delay}
							overlay={renderMosTooltip}>
							<Form.Group controlId="mos">
								<Form.Label>Desired MOS</Form.Label>
								<Form.Control type="number" placeholder="%" required />
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
								<Form.Control type="number" placeholder="%" />
							</Form.Group>
						</OverlayTrigger>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group controlId="equity">
							<Form.Label>Current equity</Form.Label>
							<Form.Control type="number" placeholder="in $thousands" required />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="shares">
							<Form.Label>Shares</Form.Label>
							<Form.Control type="number" placeholder="in millions" required />
						</Form.Group>
					</Col>
					<Col>
						<OverlayTrigger
							placement="bottom-end"
							delay={delay}
							overlay={renderRoiTooltip}>
							<Form.Group controlId="roi">
								<Form.Label>Desired ROI</Form.Label>
								<Form.Control type="number" placeholder="%" required />
							</Form.Group>
						</OverlayTrigger>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Label>Operations cash flow $thousands</Form.Label>
						<Form.Group controlId="cf1">
							<Form.Control size="sm" type="number" placeholder="Current" required />
						</Form.Group>
						<Form.Group controlId="cf2">
							<Form.Control size="sm" type="number" placeholder="Year prior" required />
						</Form.Group>
						<Form.Group controlId="cf3">
							<Form.Control size="sm" type="number" placeholder="Two years prior" required />
						</Form.Group>
						<Form.Group controlId="cf4">
							<Form.Control size="sm" type="number" placeholder="Three years prior" required />
						</Form.Group>
						<Form.Group controlId="cf5">
							<Form.Control size="sm" type="number" placeholder="Four years prior" required />
						</Form.Group>
					</Col>
					<Col>
						<Form.Label>Capital expenditure $thousands</Form.Label>
						<Form.Group controlId="capex1">
							<Form.Control size="sm" type="number" placeholder="Current" required />
						</Form.Group>
						<Form.Group controlId="capex2">
							<Form.Control size="sm" type="number" placeholder="Year prior" required />
						</Form.Group>
						<Form.Group controlId="capex3">
							<Form.Control size="sm" type="number" placeholder="Two years prior" required />
						</Form.Group>
						<Form.Group controlId="capex4">
							<Form.Control size="sm" type="number" placeholder="Three years prior" required />
						</Form.Group>
						<Form.Group controlId="capex5">
							<Form.Control size="sm" type="number" placeholder="Four years prior" required />
						</Form.Group>
					</Col>
				</Row>
				<br></br>
				<Button type="submit">Get result</Button>{"   "}
			</Form>
		</React.Fragment>
	);
}

export default opsCashFlow;