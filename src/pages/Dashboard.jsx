import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faArrowsRotate,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";
import EmployeesByDeptBarChart from "../components/EmployeesByDeptBarChart";
import Button from "react-bootstrap/esm/Button";

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
  const monthIndexPrev = currentDate.getMonth - 1;
  const year = currentDate.getFullYear();

  const today = `${dayOfWeek}, ${months[monthIndex]} ${day} ${year}`;

  //Card data
  let employeesAbsentPerCurrentMonth = 450;
  let totalEmployeesAbsentInPrevMonth = 277;
  let absenseRate = Math.round(
    (employeesAbsentPerCurrentMonth / totalEmployeesAbsentInPrevMonth) * 100
  );

  let prevMonth = months[monthIndexPrev];

  return (
    <Container fluid style={{ backgroundColor: "#C4C5DA", height: "100vh" }}>
      <Row
        className="justify-content-center"
        style={{
          paddingBottom: "1rem",
          paddingTop: "1rem",
        }}
      >
        <Col md={{ span: 6, offset: 3 }}>
          {" "}
          <h1 style={{ color: "#032A49" }}>Dashboard</h1>
        </Col>
      </Row>
      {/**First half of page */}
      <Row>
        <Col md={6}>
          <Row className="d-flex justify-content-end">
            {/**card 1 */}
            <Col></Col>
            <Col>
              <Card
                style={{
                  width: "14rem",
                  boxShadow: "-5px 0 5px #888888",
                  backgroundColor: "#F4F5FF",
                }}
              >
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    Absence Rate{" "}
                    <div>
                      <FontAwesomeIcon
                        icon={faArrowsRotate}
                        style={{ fontSize: ".8em" }}
                      />
                    </div>
                  </Card.Title>
                  <Card.Text className="text-center">
                    {" "}
                    <span style={{ fontSize: "2em", fontWeight: "bold" }}>
                      29
                    </span>{" "}
                    <FontAwesomeIcon icon={faPercent} />
                  </Card.Text>

                  <p style={{ fontSize: ".8em" }}>
                    <em>vs prev. month</em>{" "}
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={1}></Col>
            <Col>
              {/**card 2 */}
              <Card
                style={{
                  width: "14rem",
                  boxShadow: "-5px 0 5px #888888",
                  backgroundColor: "#F4F5FF",
                }}
              >
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    Absence Cost{" "}
                    <div>
                      <FontAwesomeIcon
                        icon={faArrowsRotate}
                        style={{ fontSize: ".8em" }}
                      />
                    </div>
                  </Card.Title>
                  <Card.Text className="text-center">
                    {" "}
                    <span
                      style={{ fontSize: "2em", fontWeight: "bold" }}
                    >{`${absenseRate}`}</span>{" "}
                    <FontAwesomeIcon icon={faPercent} />
                  </Card.Text>
                  <Card.Text>
                    <p style={{ fontSize: ".8em" }}>
                      <em>vs prev. month</em>{" "}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Row>
              <Col md={2}></Col>
              <Col>
                <div style={{ paddingTop: "2rem" }}></div>
                <EmployeesByDeptBarChart />
                <div style={{ paddingBottom: "2rem" }}></div>
              </Col>
            </Row>
            <Row className="d-flex justify-content-end">
              <Col></Col>
              <Card
                style={{
                  width: "14rem",
                  boxShadow: "-5px 0 5px #888888",
                  backgroundColor: "#F4F5FF",
                }}
              >
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    Absence Rate{" "}
                    <div>
                      <FontAwesomeIcon
                        icon={faArrowsRotate}
                        style={{ fontSize: ".8em" }}
                      />
                    </div>
                  </Card.Title>
                  <Card.Text className="text-center">
                    {" "}
                    <span style={{ fontSize: "2em", fontWeight: "bold" }}>
                      29
                    </span>{" "}
                    <FontAwesomeIcon icon={faPercent} />
                  </Card.Text>

                  <p style={{ fontSize: ".8em" }}>
                    <em>vs prev. month</em>{" "}
                  </p>
                </Card.Body>
              </Card>
              <Col md={1}></Col>
              <Card
                style={{
                  width: "14rem",
                  boxShadow: "-5px 0 5px #888888",
                  backgroundColor: "#F4F5FF",
                  paddingTop: "1rem",
                }}
              >
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-center">
                    Absence Rate{" "}
                    <div>
                      <FontAwesomeIcon
                        icon={faArrowsRotate}
                        style={{ fontSize: ".8em" }}
                      />
                    </div>
                  </Card.Title>
                  <Card.Text className="text-center">
                    {" "}
                    <span style={{ fontSize: "2em", fontWeight: "bold" }}>
                      29
                    </span>{" "}
                    <FontAwesomeIcon icon={faPercent} />
                  </Card.Text>

                  <p style={{ fontSize: ".8em" }}>
                    <em>vs prev. month</em>{" "}
                  </p>
                </Card.Body>
              </Card>
            </Row>
          </Row>
        </Col>
        {/** second half of page */}
        <Col md={5}>
          <Row>
            <Col className="d-flex justify-content-around">
              <Card
                style={{
                  width: "70%",
                  border: "1mm ridge grey",
                  padding: "1em",
                  backgroundColor: "#E4E5F0",
                  marginTop: "2rem",
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
                    style={{ backgroundColor: "#F4F5FF" }}
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
                    style={{ backgroundColor: "#F4F5FF" }}
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
                    style={{ backgroundColor: "#F4F5FF" }}
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
                    style={{ backgroundColor: "#F4F5FF" }}
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
                    style={{ backgroundColor: "#F4F5FF" }}
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
                    style={{ backgroundColor: "#F4F5FF" }}
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
                    style={{ backgroundColor: "#F4F5FF" }}
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
                    style={{ backgroundColor: "#F4F5FF" }}
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
