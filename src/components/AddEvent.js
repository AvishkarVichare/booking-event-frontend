import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useState } from 'react';
import EventContext from '../context/event/EventContext';
import { useNavigate } from 'react-router-dom';

function AddEvent() {

    const eventcontext = useContext(EventContext);
    const {createEvent} = eventcontext;

    const [event, setEvent] = useState({eventName:"", eventHost:"",eventDescription:"", eventBranch:"", eventDate:"", eventTime:"", eventVenue:"", eventType:"", eventMode:""})
    const [image, setImage] = useState(null)

    const navigate = useNavigate()

    const handleAdd = (e)=>{
        e.preventDefault()
        createEvent({...event, image:image})
        navigate('/home')
    }

    const handleImage = (e)=>{
        setImage(e.target.files[0]);
        console.log(typeof image)
    }

    const handleOnChange = (e)=>{
        setEvent({...event, [e.target.name]: e.target.value})
        console.log(event)
       
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control onChange = {handleOnChange}  type="text" placeholder="Event Name" name="eventName"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Host</Form.Label>
                            <Form.Control onChange = {handleOnChange}  type="text" placeholder="Event Host" name="eventHost"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Description</Form.Label>
                            <Form.Control onChange = {handleOnChange}  type="text" placeholder="Event Description" name="eventDescription"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange = {handleOnChange}  type="number" placeholder="Event Price" name="eventPrice"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Branch</Form.Label>
                            <Form.Control onChange = {handleOnChange}  type="text" placeholder="Event Branch" name="eventBranch"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control onChange = {handleOnChange}  type="date" placeholder="Event Date" name="eventDate"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Time</Form.Label>
                            <Form.Control onChange = {handleOnChange}  type="text" placeholder="Event Time" name="eventTime"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Venue</Form.Label>
                            <Form.Control onChange = {handleOnChange}  type="text" placeholder="Event Venue" name="eventVenue"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event Type</Form.Label>
                            <Form.Control onChange = {handleOnChange}  type="text" placeholder="Event Type" name="eventType"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Event mode</Form.Label>
                            <Form.Control onChange = {handleOnChange}  type="text" placeholder="Event Mode" name="eventMode"/>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Image Input</Form.Label>
                            <Form.Control onChange = {handleImage}  type="file" name="image"/>
                        </Form.Group>

                        <button className='border-2 border-black p-2 rounded-xl bg-green-500 text-white' onClick={handleAdd} type='submit'>Add</button>

                    </Form>
                </Col>
                <Col></Col>

            </Row>
        </Container>
    );
}

export default AddEvent;