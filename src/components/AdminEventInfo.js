import React, { useContext, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import banner1 from "../images/banner1.jpg";
import Button from "@mui/material/Button";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import EventContext from "../context/event/EventContext";
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import axios from "axios";

function AdminEventInfo() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const eventContext = useContext(EventContext)
  const { getEvent, event, setEvent } = eventContext;
  const params = useParams()

  const [bookedUsers, setBookeUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getEvent(params.eid);
  }, [])


  useEffect(() => {
    axios.get(`/u/getUsersWhoBookedEvent/${params.eid}`, {
      headers: {
        'token': localStorage.getItem('token')
      }
    }).then((res) => {
      setBookeUsers(res.data.users);
      console.log("booked", bookedUsers)
    });
  }, [event])

  const handleDelete = async () => {
    const res = await axios.delete(`/event/delete/${params.eid}`, {
      headers: {
        'token': localStorage.getItem('token')
      }
    })

    // console.log(res)
    if (res.data.success) {
      navigate('/admin')
    }

  }
  console.log(event)
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container className="relative" maxWidth="s">
          <button onClick={handleDelete} className="absolute right-12 top-6 bg-red-600 text-white p-2 rounded-2xl font-bold">
            Delete Event
          </button>
          <Box sx={{ bgcolor: "#cfe8fc", height: "165vh" }}>
            <br />
            <center>
              <Box sx={{ width: "100vh", height: "60vh" }}>
                <img
                  src={`http://localhost:5000/images/${event?.image?.filename}`}
                  alt="banner1"
                  style={{ height: "60vh", width: "100vh" }}
                ></img>
              </Box>
            </center>
            <center>

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
                          <div className="flex gap-3">
                            <span>
                              Event Name:
                            </span>
                            <span >
                              {
                                event?.eventName
                              }
                            </span>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div className="flex gap-3">
                            <span>
                              Event Description:
                            </span>
                            <span >
                              {
                                event?.description
                              }
                            </span>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div></div>
                          <div className="flex gap-3">
                            <span>
                              Event Venue:
                            </span>
                            <span >
                              {
                                event?.eventVenue

                              }
                            </span>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div className="flex gap-3">
                            <span>
                              Event Date:
                            </span>
                            <span >
                              {
                                new Date(event.eventDate).toDateString()
                              }
                            </span>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div className="flex gap-3">
                            <span>
                              Event Time:
                            </span>
                            <span >
                              {
                                event.eventTime
                              }
                            </span>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div className="flex gap-3">
                            <span>
                              Event Type:
                            </span>
                            <span >
                              {
                                event.eventType
                              }
                            </span>
                          </div>
                        </ListItem>
                        <ListItem>
                          <div className="flex gap-3">
                            <span>
                              Branch:
                            </span>
                            <span >
                              {
                                event.eventBranch
                              }
                            </span>
                          </div>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </center>

                <br /><br />
                <h2>Registered Students</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student Name</th>
                      <th>Phone No</th>
                      <th>Email</th>
                      <th>Branch</th>
                      <th>Division</th>
                      <th>Student ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookedUsers?.map((value, index) => {
                      return <tr>
                        <td>{index + 1}</td>
                        <td>{value.name}</td>
                        <td>{value.phone}</td>
                        <td>{value.email}</td>
                        <td>{value.branch}</td>
                        <td>{value.div}</td>
                        <td>{value._id}</td>
                      </tr>
                    })}
                  </tbody>
                </Table>
              </Box>
            </center>
            <br />
            <br />
            <center>
              <Button variant="contained" color="success">
                <NavLink to="/admin">Back</NavLink>
              </Button>
              {/* <Button variant="contained" color="success">
              </Button> */}
              <Button variant="primary" onClick={handleShow}>
                edit

              </Button>

            </center>
          </Box>
        </Container>
      </React.Fragment>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default AdminEventInfo;
