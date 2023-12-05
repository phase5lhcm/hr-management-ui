import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBell, faX } from "@fortawesome/free-solid-svg-icons";
import TotalEmployeeCount from "../components/EmployeesByDeptVictoryBar";

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
    <Container fluid>
      <Row
        className="justify-content-center"
        style={{ paddingBottom: "1rem", paddingTop: "1rem" }}
      >
        <Col md={{ span: 6, offset: 3 }}>
          {" "}
          <h2>Dashboard</h2>
        </Col>
      </Row>
      {/**First half of page */}
      <Row>
        <Col md={2}></Col>
        <Col md={6}>
          <Row>
            {/**card 1 */}
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Absence Rate</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {/**card 2 */}
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Absence Cost</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Row>
              <Col>
                <div style={{ height: "16rem" }}>
                  {" "}
                  <TotalEmployeeCount />
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
        {/** second half of page */}
        <Col md={4}>
          <Row>
            <Col>
              <Card
                style={{
                  width: "100%",
                  border: "1mm ridge grey",
                  padding: "1.5em",
                }}
              >
                <Row className="justify-content-end">
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
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
