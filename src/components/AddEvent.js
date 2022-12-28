import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddEvent() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type="text" placeholder="Event Name" name="eventName"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Host</Form.Label>
                            <Form.Control type="text" placeholder="Event Host" name="eventHost"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Branch</Form.Label>
                            <Form.Control type="text" placeholder="Event Branch" name="eventBranch"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type="text" placeholder="Event Date" name="eventDate"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Time</Form.Label>
                            <Form.Control type="text" placeholder="Event Time" name="eventTime"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Venue</Form.Label>
                            <Form.Control type="text" placeholder="Event Venue" name="eventVenue"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Type</Form.Label>
                            <Form.Control type="text" placeholder="Event Type" name="eventType"/>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Image Input</Form.Label>
                            <Form.Control type="file" name="image"/>
                        </Form.Group>
                    </Form>
                </Col>
                <Col></Col>

            </Row>
        </Container>
    );
}

export default AddEvent;