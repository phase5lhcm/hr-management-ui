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
        <Col sm={2} style={{ paddingLeft: "3rem", fontSize: "1em" }}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={handleShow}
            style={{ color: "#616E9A" }}
          />
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
            <FontAwesomeIcon icon={faBell} style={{ color: "#616E9A" }} />
          </Navbar.Text>
          <Navbar.Text className="justify-content-between">
            <span style={{ color: "#032A49" }}>
              Hello Mark Otto <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} style={{ width: "8rem" }}>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col>
                <Nav
                  defaultActiveKey="/dashboard"
                  className="flex-column justify-content-center align-content-center"
                  style={{}}
                >
                  <Button
                    style={{
                      width: "7.5rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHouse}
                      style={{ fontSize: "2em" }}
                    />
                    <span className="ms-1">Home</span>
                  </Button>
                </Nav>

                <Nav
                  defaultActiveKey="/applications"
                  className="flex-column justify-content-center align-content-center"
                >
                  <Button style={{ marginTop: "1.5rem" }}>
                    <FontAwesomeIcon
                      icon={faArrowsSpin}
                      style={{ fontSize: "2em" }}
                    />
                    <span className="ms-1">Applications</span>
                  </Button>
                </Nav>

                <Nav
                  defaultActiveKey="/employee-profiles"
                  className="flex-column justify-content-center align-content-center"
                >
                  <Button style={{ marginTop: "1.5rem", width: "7.5rem" }}>
                    <FontAwesomeIcon
                      icon={faPerson}
                      style={{ fontSize: "2em" }}
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
                  >
                    <FontAwesomeIcon
                      icon={faEnvelopeOpenText}
                      style={{
                        fontSize: "2em",
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
                  >
                    <FontAwesomeIcon
                      icon={faGears}
                      style={{ fontSize: "2em" }}
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
