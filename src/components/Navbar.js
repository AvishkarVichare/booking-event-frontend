import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Button2 from "@mui/material/Button";

function NavScrollExample() {
  return (
    <Navbar bg="blue" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">EventApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            <Nav.Link href="/home">
              <Button2>Home</Button2>
            </Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filters
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/search">Department</Dropdown.Item>
                <Dropdown.Item href="/search">Events</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <NavLink to="/search">Search</NavLink>
            </Button>
          </Form>

          <Button variant="outline-sucess">
            <NavLink to="/profile">
              <AccountCircleRoundedIcon sx={{ fontSize: 55 }} />
            </NavLink>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
