import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import logo from "./logo.svg";

import "./App.css";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Platform Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#clusters">Clusters</Nav.Link>
                            <Nav.Link href="#link">Workspaces</Nav.Link>
                            <Nav.Link href="#link">Applications</Nav.Link>
                        </Nav>
                        <Nav className="justify-content-end">
                            <NavDropdown
                                title="Tim Park"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.4">
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default App;
