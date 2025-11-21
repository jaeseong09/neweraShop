/* eslint-disable */
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

function NavarPage() {
  let navigate = useNavigate();
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/img/newera.png"
            style={{ width: "70px", height: "70px" }}
            alt=""
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/detail/0");
            }}
          >
            detail
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/Cart");
            }}
          >
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavarPage;
