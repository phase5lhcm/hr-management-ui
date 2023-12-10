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
  faArrowsSpin,
  faEnvelopeOpenText,
  faGears,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Col sm={2} style={{ paddingLeft: "3rem", fontSize: "1em" }}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={handleShow}
            style={{ color: "#616E9A" }}
          />
        </Col>

        <Navbar.Collapse
          className="justify-content-start"
          style={{ paddingRight: "1rem" }}
        >
          <Navbar.Text style={{ paddingRight: "1rem" }}>
            <FontAwesomeIcon icon={faBell} style={{ color: "#616E9A" }} />
          </Navbar.Text>
          <Navbar.Text className="justify-content-between ">
            <span style={{ color: "#032A49", paddingRight: ".5rem" }}>
              Hello Mark Otto
            </span>
          </Navbar.Text>

          <DropdownButton variant="tertiary">
            <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
            <Dropdown.Item href="/register">Register</Dropdown.Item>
          </DropdownButton>
        </Navbar.Collapse>

        <Form inline="true">
          <Row>
            <Col xs="auto">
              <Form.Control
                id="searchField"
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
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        style={{ width: "8rem", backgroundColor: "#E5F6F6", color: "#000000" }}
      >
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col>
                <Nav
                  defaultActiveKey="/dashboard"
                  className="flex-column justify-content-center align-content-center"
                  style={{}}
                >
                  <a href="/dashboard" style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        width: "7.5rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      variant="tertiary"
                    >
                      <FontAwesomeIcon
                        icon={faHouse}
                        style={{ fontSize: "2em", color: "#000000" }}
                      />
                      <span className="ms-1">Home</span>
                    </Button>
                  </a>
                </Nav>

                <Nav
                  defaultActiveKey="/applications"
                  className="flex-column justify-content-center align-content-center"
                >
                  <Button
                    style={{
                      marginTop: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    variant="tertiary"
                  >
                    <FontAwesomeIcon
                      icon={faRoute}
                      style={{ fontSize: "2em", color: "#000000" }}
                    />
                    <span className="ms-1">Applications</span>
                  </Button>
                </Nav>

                <Nav
                  defaultActiveKey="/employee-profiles"
                  className="flex-column justify-content-center align-content-center"
                >
                  <Button
                    style={{ marginTop: "1.5rem", width: "7.5rem" }}
                    variant="tertiary"
                  >
                    <FontAwesomeIcon
                      icon={faPerson}
                      style={{ fontSize: "2em", color: "#000000" }}
                    />
                    <span>Employees</span>
                  </Button>
                </Nav>
                <Nav
                  defaultActiveKey="/communications"
                  className="flex-column justify-content-center align-content-center"
                >
                  <Button
                    style={{
                      marginTop: "1.5rem",
                      width: "7.5rem",
                      alignItems: "center",
                    }}
                    variant="tertiary"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelopeOpenText}
                      style={{
                        fontSize: "2em",
                        color: "#000000",
                      }}
                    />
                    <span>Messages</span>
                  </Button>
                </Nav>
                <Nav
                  defaultActiveKey="/settings"
                  className="flex-column justify-content-center align-content-center"
                >
                  <Button
                    style={{
                      marginTop: "1.5rem",
                      width: "7.5rem",
                    }}
                    variant="tertiary"
                  >
                    <FontAwesomeIcon
                      icon={faGears}
                      style={{ fontSize: "2em", color: "#000000" }}
                    />
                    <span>Settings</span>
                  </Button>
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
