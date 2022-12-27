import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import banner1 from "../images/banner1.jpg";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import { ListItemText } from "@mui/material";

function AdminEventInfo() {
  const EventInfo = {
    Event_ID: "1234",
    Event_Name: "Techgyanathon",
    Event_Venue: "VPPCOE",
    Event_DateTime: "12/12/22 @ 12:00",
    Event_Desc: "This is a good event and is very enjoyable",
  };
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="s">
          <Box sx={{ bgcolor: "#cfe8fc", height: "165vh" }}>
            <br />
            <center>
              <Box sx={{ width: "100vh", height: "60vh" }}>
                <img
                  src={banner1}
                  alt="banner1"
                  style={{ height: "60vh", width: "100vh" }}
                ></img>
              </Box>
            </center>
            <center>
              <Button variant="contained" component="label">
                Edit Image
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </center>
            <br />
            <center>
              <Box sx={{ bgcolor: "#ffffff", height: "80vh", width: "170vh" }}>
                <center>
                  <h1>Event Information</h1>
                </center>
                <center>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <List>
                        <ListItem>
                          <ListItemText>Event Name:</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Event Description:</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Event Venue:</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Event Date:</ListItemText>
                        </ListItem>
                        <ListItem>
                          <ListItemText>Event Time:</ListItemText>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </center>
              </Box>
            </center>
            <br />
            <br />
            <center>
              <Button variant="contained" color="success">
                <NavLink to="/admin">Back</NavLink>
              </Button>
              <Button variant="contained" color="success">
                Edit
              </Button>
            </center>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default AdminEventInfo;
