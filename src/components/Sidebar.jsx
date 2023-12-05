import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faAngleDown,
  faPerson,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Col sm={2} style={{ paddingLeft: "3rem", fontSize: "2.5em" }}>
          <FontAwesomeIcon icon={faBars} onClick={handleShow} />
        </Col>
        <Form inline="true">
          <Row>
            <Col xs="auto">
              <Form.Control
                id="serachField"
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
        <Navbar.Collapse
          className="justify-content-end"
          style={{ paddingRight: "1rem" }}
        >
          <Navbar.Text style={{ paddingRight: "1rem" }}>
            <FontAwesomeIcon icon={faBell} />
          </Navbar.Text>
          <Navbar.Text className="justify-content-between">
            <span>
              Hello Mark Otto <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      =
      <Offcanvas show={show} onHide={handleClose} style={{ width: "17rem" }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col md={10}>
                <Nav
                  defaultActiveKey="/dashboard"
                  className="flex-column"
                  style={{}}
                >
                  <Nav.Link
                    href="/dashboard"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHouse}
                      style={{
                        fontSize: "2em",
                      }}
                    />
                    <span>
                      <p
                        style={{
                          fontSize: "1.5em",
                          paddingTop: ".3rem",
                        }}
                      >
                        Dashboard
                      </p>
                    </span>
                  </Nav.Link>
                  <Nav.Link
                    eventKey="link-1"
                    href="applications"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignContent: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPerson}
                      style={{
                        fontSize: "2em",
                      }}
                    />
                    <span>
                      <p style={{}}>Applicant Tracker</p>
                    </span>
                  </Nav.Link>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
