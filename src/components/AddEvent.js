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
                            <Form.Control type="text" placeholder="Event Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Host</Form.Label>
                            <Form.Control type="text" placeholder="Event Host" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Branch</Form.Label>
                            <Form.Control type="text" placeholder="Event Branch" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type="text" placeholder="Event Date" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Time</Form.Label>
                            <Form.Control type="text" placeholder="Event Time" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Venue</Form.Label>
                            <Form.Control type="text" placeholder="Event Venue" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Type</Form.Label>
                            <Form.Control type="text" placeholder="Event Type" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>File Input</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col></Col>

            </Row>
        </Container>
    );
}

export default AddEvent;