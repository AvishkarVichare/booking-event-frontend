import React, { useContext, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { NavLink, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../App.css";
import EventContext from "../context/event/EventContext";
import IndivisualCard from "./IndivisualCard";


function EventType() {
  const params = useParams();
  const eventContext = useContext(EventContext);
  const { getEvents, events } = eventContext;
  const [filteredEvents, setFilteredEvents] = useState([]);
  // console.log(filter)



  useEffect(() => {
    getEvents()
    setFilteredEvents(events?.filter(e => {
      return e.eventType.toLowerCase() == params.filter.toLowerCase();
    }))
    console.log(filteredEvents)
  }, [params.filter])



  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="s">
          <Box sx={{ bgcolor: "pink", height: "100vh" }}>
            <center>
              <h1>{
              params.filter
              }
              <span className="ml-3">
                Events
              </span>
              </h1>
            </center>
            <div className="grid">
              {
                filteredEvents.map(e => {
                  return <IndivisualCard event={e} />
                })
              }
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default EventType;
