import React from 'react';
import { Accordion, AccordionToggle, Button, Card, AccordionCollapse } from 'react-bootstrap';

const howTo = () => {

	return (
		<Accordion>
			<Card>
				<AccordionToggle as={Button} variant="outline-secondary" eventKey="0">How do I use this?</AccordionToggle>
				<AccordionCollapse eventKey="0">
					<Card.Body>
						Description text
					</Card.Body>
				</AccordionCollapse>
			</Card>
		</Accordion>
	);
}

export default howTo;