import axios from "axios"
import { useState } from "react"
import EventContext from "./EventContext"

const EventState = (props)=>{

    const [events, setEvents] = useState([]);

    const getEvents = async()=>{
        const res = await axios.get('/event/getEvents', {
            headers:{
                'token':localStorage.getItem('token')
            }
        });

        setEvents(res.data.events);
    }

    return(
        <EventContext.Provider value={{getEvents, events, setEvents}}>
            {
                props.children
            }
        </EventContext.Provider>
    )    
}

export default EventState;