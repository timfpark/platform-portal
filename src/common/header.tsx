import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Contoso Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/clusters">
                            Clusters
                        </Nav.Link>
                        <Nav.Link as={Link} to="/workspaces">
                            Workspaces
                        </Nav.Link>
                        <Nav.Link as={Link} to="/applications">
                            Applications
                        </Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <NavDropdown title="Tim Park" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.4">
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
