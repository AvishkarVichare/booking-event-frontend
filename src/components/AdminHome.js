import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { DataGrid } from "@mui/x-data-grid";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function AdminHome() {
  const columns = [
    {
      field: "id",
      headerName: "Event ID",
      width: 200,
    },
    {
      field: "photoURL",
      headerName: "Event Avatar",
      width: 200,
      editable: true,
    },
    {
      field: "Event Venue",
      headerName: "Event Venue",
      width: 200,
      editable: true,
    },
    {
      field: "Event Name",
      headerName: "Event Name",
      width: 200,
      editable: true,
    },
    {
      field: "Event Date and Time",
      headerName: "Event Date and Time",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
    {
      field: "Registration",
      headerName: "No of registers",
      type: "number",
      width: 220,
      editable: true,
    },
    {
      field: "Route",
      renderCell: () => {
        return (
          <>
            <NavLink to="/adminevent">edit</NavLink>
          </>
        );
      },
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="s">
          <Box sx={{ bgcolor: "pink", height: "75vh" }}>
            <center>
              <h1>Event List</h1>
            </center>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </Container>
      </React.Fragment>

      <br />
      <br />
      <br />
      <center>
        <Button variant="contained" color="success">
          <NavLink to="/adminevent" color="#ffffff">
            Add Event
          </NavLink>
        </Button>
      </center>
    </>
  );
}

export default AdminHome;
