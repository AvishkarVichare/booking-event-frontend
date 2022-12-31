import { CssBaseline } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import profile from "../images/profile.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import { ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { NavLink } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"

const columns = [
  {
    field: "eventId",
    headerName: "Event ID",
    width: 90,
  },
  {
    field: "eventName",
    headerName: "Event name",
    width: 150,
    // editable: true,
  },
  {
    field: "date",
    headerName: "Event Date",
    width: 150,
    // editable: true,
  },
  {
    field: "time",
    headerName: "Event Time",
    type: "number",
    width: 110,
    // editable: true,
  },
];


export const StudProfile = () => {
  const [user, setUser] = React.useState(null);
  const [bookedEvents, setBookedEvents] = React.useState(null);

  React.useEffect(() => {
    axios.get("/u/getUser", { headers: { "token": localStorage.getItem("token") } }).then((res) => {
      setUser(res.data.user);
      // console.log(res.data.user)
    });


    axios.get("/event/getBookedEvents", { headers: { "token": localStorage.getItem("token") } }).then((res) => {
      setBookedEvents(res.data.events);
      console.log(res.data.events)
    });

  }, []);


  return (
    <center>
      <React.Fragment>
        <CssBaseline>
          <Box sx={{ bgcolor: "#fffff0", width: "100vh" }}>
            <br />
            <Container maxWidth="s">
              {/* <Box sx={{ bgcolor: "#ffffff", height: "30vh", width: "30vh" }}>
                <img
                  src={profile}
                  alt="profile"
                  sx={{ height: "30vh", width: "30vh" }}
                />
                <br />
                <Button variant="contained" component="label">
                  Upload
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Box> */}
            </Container>
            <br />
            <Container maxWidth="s">
              <Box sx={{ bgcolor: "#ffffff", height: "55vh" }}>
                <h1>
                  <center>Student Info</center>
                </h1>
                <p>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <center>
                        <List>
                          <ListItem>
                            <ListItemText>Student Name: {user?.name}</ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>Student ID: {user?.studentid}</ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>Student Email: {user?.email}</ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>Phone Number: {user?.phone}</ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>Branch: {user?.branch}</ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemText>Division: {user?.div}</ListItemText>
                          </ListItem>
                        </List>
                      </center>
                    </Grid>
                  </Grid>
                </p>
                <center>
                  {/* <Button variant="contained" color="success">
                    Edit Info
                  </Button> */}
                </center>
              </Box>
            </Container>
          </Box>
          <br />
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Event Name</th>
                  <th>Event Host</th>
                  <th>Type</th>
                  <th>Venue</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Branch</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {bookedEvents?.map((value, index) => {
                  return <tr>
                    <td>{index + 1}</td>
                    <td>{value.eventName}</td>
                    <td>{value.eventHost}</td>
                    <td>{value.eventType}</td>
                    <td>{value.eventVenue}</td>
                    <td>{value.eventPrice} .Rs</td>
                    <td>{value.eventDate}</td>
                    <td>{value.eventBranch}</td>
                    <td>{value.eventTime}</td>
                  </tr>
                })}
              </tbody>
            </Table>
          </Container>
        </CssBaseline>
      </React.Fragment>
    </center>
  );
};
