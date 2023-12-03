import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBell, faX } from "@fortawesome/free-solid-svg-icons";

/* TODO - add a nav item to center of navbar & add menu item to dropdown arrow to allow user to login/logout
& add onHover feature to bell for that says "Notifications"
*/
function Dashboard() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();

  const dayOfWeekIndex = currentDate.getDay();
  const dayOfWeek = daysOfWeek[dayOfWeekIndex];
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const today = `${dayOfWeek}, ${months[monthIndex]} ${day} ${year}`;

  return (
    <Container fluid style={{ paddingLeft: "4rem" }}>
      <Navbar className="bg-body-tertiary">
        <Col sm={2}></Col>
        <Form inline="true">
          <Row>
            <Col></Col>
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

      <Row
        className="justify-content-center"
        style={{ paddingBottom: "1rem", paddingTop: "1rem" }}
      >
        <Col md={{ span: 6, offset: 3 }}>
          {" "}
          <h2>Dashboard</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={2}></Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Absence Rate</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Absence Cost</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card
            style={{
              width: "22rem",
              border: "1mm ridge grey",
              padding: "1.5em",
            }}
          >
            <Row className="justify-content-even">
              <Col>
                <h6>Announcements</h6>
              </Col>
              <Col>
                <span
                  style={{
                    textAlign: "center",
                    display: "block",
                    fontSize: ".6em",
                    padding: ".1em",
                    backgroundColor: "lightgray",
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                    // boxShadow: "10x 10px 10px	rgb(105,105,105)",
                    // borderRadius: "30px",
                  }}
                >
                  {" "}
                  {today}
                </span>
              </Col>
            </Row>
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  <FontAwesomeIcon icon={faX} beat />
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  <FontAwesomeIcon icon={faX} beat />
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  <FontAwesomeIcon icon={faX} beat />
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  <FontAwesomeIcon icon={faX} beat />
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  <FontAwesomeIcon icon={faX} beat />
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
