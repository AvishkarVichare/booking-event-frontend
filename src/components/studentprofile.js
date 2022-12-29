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
    editable: true,
  },
  {
    field: "date",
    headerName: "Event Date",
    width: 150,
    editable: true,
  },
  {
    field: "time",
    headerName: "Event Time",
    type: "number",
    width: 110,
    editable: true,
  },
];

const rows = [];

export const StudProfile = () => {

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    axios.get("/u/getUser", { headers: { "token": localStorage.getItem("token") } }).then((res) => {
      setUser(res.data.user);
      console.log(res.data.user)
    });
  }, []);


  return (
    <center>
      <React.Fragment>
        <CssBaseline>
          <Container maxWidth="s">
            <Box sx={{ bgcolor: "#fffff0", height: "160vh", width: "100vh" }}>
              <br />
              <Container maxWidth="s">
                <Box sx={{ bgcolor: "#ffffff", height: "30vh", width: "30vh" }}>
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
                </Box>
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
                              <ListItemText>Student ID: {user?._id}</ListItemText>
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
                    <Button variant="contained" color="success">
                      Edit Info
                    </Button>
                  </center>
                </Box>
              </Container>
              <br />
              <Container maxWidth="s">
                <Box sx={{ bgcolor: "#ffffff", height: "60vh" }}>
                  <h1>Event Registered</h1>
                  <Box sx={{ height: 400, width: "100%" }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[10]}
                    />
                  </Box>
                </Box>
              </Container>
            </Box>
          </Container>
        </CssBaseline>
      </React.Fragment>
    </center>
  );
};
