import React from 'react';
import { Accordion, AccordionToggle, Button, Card, AccordionCollapse, Col, Row, Jumbotron } from 'react-bootstrap';

const howTo = () => {

	const field = { fontWeight: 500}

	return (
		<Accordion>
			<Card>
				<AccordionToggle as={Button} variant="outline-secondary" eventKey="0">How do I use this?</AccordionToggle>
				<AccordionCollapse eventKey="0">
					<Card.Body>
						<Jumbotron>
							<Row>
								<Col>
									<Card.Title>
										Certificate: for CDs or savings accounts
									</Card.Title>
									<Card.Text className="text-muted">
										This one's simple.  Just put in the total investment amount, the interest rate, and the length to get the ending balance.
										  The compound frequency influences the ending balance; more frequent compounding results in a higher ending balance.
									</Card.Text>
									<Card.Title>
										Bonds
									</Card.Title>
									<Card.Text className="text-muted">
										This will tell you the end balance of any bond purchases you make.  Enter the price of each bond, the interest rate,
										the length to maturity, the payment frequency, and how many you purchased.  Take note of whether you purchased your bonds
										at a premium (at greater than the principle amount) or at a discount (for less than principle).  Some bonds pay interest
										throughout the issue length whilst others pay at the end.  Set the frequency as accurately as possible.
									</Card.Text>
									<Card.Title>
										Stock: with free cash flow or without
									</Card.Title>
									<Card.Text className="text-muted">
										There is a lot that goes into valuing a stock but this tool can help you determine an approximate fair value and a good value
										at which to purchase said stock based on the previous 5 years cash flow statements and the current shareholder equity.
										<br></br>
										There are a few tools available on the navbar above to help you find stocks if you don't have any in mind.  Screen based
										on your desired criteria and then come on back here with some of your favorite tickers.  You can take your
										cash flows values from anywhere if you would rather but the search bar above takes you to the cash flows statements provided by
										Yahoo finance given whatever stock ticker you search for.
									</Card.Text>
								</Col>
								<Col>
									<Card.Text className="text-muted">
										<span style={field}>Operations cash flow and Capital expenditures:</span> If you want to get your own numbers feel free to enter those numbers
										<br></br>
										<span style={field}>Free cash flow:</span> When the new tab opens, the values on the very bottom of the table (labeled Free Cash Flow)
										can be entered into the fields below starting with TTM in the "current" field.
										<br></br>
										<span style={field}>Current equity:</span> above the table you'll see three links.  Click "Balance Sheet".  When the new sheet pops up, expand the 
										"Liabilities and stockholder's equity" tab and copy the most recent number from the "Stockholder's Equity" row.
										<br></br>
										<span style={field}>MOS:</span> margin of safety this protects your investment.  For large companies a mos of 25% is fine.  As companies get smaller,
										increase your mos to up to 50%.  This helps protect you in case the valuation is wrong or if other factors lead to the 
										company permanently decreasing in value.
										<br></br>
										<span style={field}>Set growth rate:</span> sometimes cash flows are inconsistent.  You can enter your own estimated growth rate if you like.
										<br></br>
										<span style={field}>ROI:</span> return on investment.  Sets the fair price for the stock based on the return on investment you require from your stock
										purchase.
										<br></br>
										<span style={field}>Shares:</span> the total number of shares the company has issued.  It's on the "Summary" page on Yahoo finance.
										<br></br>
										<span style={field}>Ticker:</span> not necessary but will help you keep your valuations straight in the table if you enter more than one set of numbers
									</Card.Text>
								</Col>
							</Row>
						</Jumbotron>
					</Card.Body>
				</AccordionCollapse>
			</Card>
		</Accordion>
	);
}

export default howTo;