import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import banner1 from "../images/banner1.jpg";
import { Table } from "@mui/material";
import InteractiveList from "./list";
import { NavLink } from "react-router-dom";

export default function EventInfo() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="s">
        <Box sx={{ height: "70vh" }}>
          <img
            src={banner1}
            alt="banner1"
            style={{ height: "66vh", width: "200vh" }}
          ></img>
          <p>
            <h2>Registration Count:25</h2>
          </p>
        </Box>
      </Container>
      <br />
      <div className="grid">
        <Container maxWidth="sm">
          <Table sx={{ bgcolor: "#fff0f0  ", height: "70vh", width: "70vh" }}>
            <InteractiveList></InteractiveList>
          </Table>
        </Container>

        <Container maxWidth="sm">
          <Box sx={{ bgcolor: "#fff0f0  ", height: "70vh", width: "70vh" }}>
            <center>
              <h1>Registration</h1>
              <center>
                <NavLink to="/registration">Register to This Event</NavLink>
              </center>
            </center>
          </Box>
        </Container>
      </div>
    </React.Fragment>
  );
}
