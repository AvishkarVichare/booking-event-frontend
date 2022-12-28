import axios from "axios"
import { useState } from "react"
import EventContext from "./EventContext"

const EventState = (props)=>{

    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState({});


    const createEvent = async(event)=>{
        console.log("oure",event)
        const res = await axios.post('/event/create', event, {
            headers:{
                'token':localStorage.getItem('token'),
                'content-type': 'multipart/form-data',

            }
        })
        console.log(res.data)
    }

    const getEvents = async()=>{
        const res = await axios.get('/event/getEvents', {
            headers:{
                'token':localStorage.getItem('token')
            }
        });

        setEvents(res.data.events);
    }
    const getEvent = async(id)=>{
        const res = await axios.get(`/event/getEvent/${id}`, {
            headers:{
                'token':localStorage.getItem('token')
            }
        });
        console.log(res.data)
        setEvent(res.data.event)
    }

    return(
        <EventContext.Provider value={{getEvents, events, setEvents, getEvent, event, setEvent, createEvent}}>
            {
                props.children
            }
        </EventContext.Provider>
    )    
}

export default EventState;