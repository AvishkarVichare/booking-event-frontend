import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../App.css";

function Search() {
  const cardInfo = [
    {
      image:
        "https://marketplace.canva.com/EAFFkqLNec0/1/0/941w/canva-white-%26-purple-simple-event-coordinator-business-card-print-template-Ef3rvMBVd4Y.jpg",
      title: "Techgyanathon",
    },
    {
      image:
        "https://marketplace.canva.com/EAFFkqLNec0/1/0/941w/canva-white-%26-purple-simple-event-coordinator-business-card-print-template-Ef3rvMBVd4Y.jpg",
      title: "Fusion",
    },
    {
      image:
        "https://marketplace.canva.com/EAFFkqLNec0/1/0/941w/canva-white-%26-purple-simple-event-coordinator-business-card-print-template-Ef3rvMBVd4Y.jpg",
      title: "ITSA",
    },
    {
      image:
        "https://marketplace.canva.com/EAFFkqLNec0/1/0/941w/canva-white-%26-purple-simple-event-coordinator-business-card-print-template-Ef3rvMBVd4Y.jpg",
      title: "CESA",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem", height: "33rem" }} className="box">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <NavLink to="/event">Details</NavLink>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="s">
          <Box sx={{ bgcolor: "pink", height: "100vh" }}>
            <center>
              <h1>Search</h1>
            </center>
            <div className="grid">{cardInfo.map(renderCard)}</div>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default Search;
