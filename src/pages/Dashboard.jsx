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
import { faAngleDown, faBell } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <Container fluid style={{ paddingLeft: "5rem" }}>
      <Navbar className="bg-body-tertiary justify-content-between">
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
    </Container>

    //   <div
    //     style={{
    //       paddingLeft: "17em",
    //       paddingTop: "1.5em",
    //       display: "flex",
    //       flexDirection: "row",
    //       justifyContent: "space-around",
    //     }}
    //   >
    //     <Card style={{ width: "18rem" }}>
    //       <Card.Body>
    //         <Card.Title>Absence Rate</Card.Title>
    //         <Card.Text>
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //     <Card style={{ width: "18rem" }}>
    //       <Card.Body>
    //         <Card.Title>Absence Cost</Card.Title>
    //         <Card.Text>
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </Card.Text>
    //       </Card.Body>
    //     </Card>
    //   </div>
    //   <div
    //     className="listGroup"
    //     style={{ border: "1mm ridge grey", padding: "1em" }}
    //   >
    //     <h2>Announcements</h2>
    //     <ListGroup as="ol" numbered>
    //       <ListGroup.Item
    //         as="li"
    //         className="d-flex justify-content-between align-items-start"
    //       >
    //         <div className="ms-2 me-auto">
    //           <div className="fw-bold">Subheading</div>
    //           Cras justo odio
    //         </div>
    //         <Badge bg="primary" pill>
    //           14
    //         </Badge>
    //       </ListGroup.Item>
    //       <ListGroup.Item
    //         as="li"
    //         className="d-flex justify-content-between align-items-start"
    //       >
    //         <div className="ms-2 me-auto">
    //           <div className="fw-bold">Subheading</div>
    //           Cras justo odio
    //         </div>
    //         <Badge bg="primary" pill>
    //           14
    //         </Badge>
    //       </ListGroup.Item>
    //       <ListGroup.Item
    //         as="li"
    //         className="d-flex justify-content-between align-items-start"
    //       >
    //         <div className="ms-2 me-auto">
    //           <div className="fw-bold">Subheading</div>
    //           Cras justo odio
    //         </div>
    //         <Badge bg="primary" pill>
    //           14
    //         </Badge>
    //       </ListGroup.Item>
    //       <ListGroup.Item
    //         as="li"
    //         className="d-flex justify-content-between align-items-start"
    //       >
    //         <div className="ms-2 me-auto">
    //           <div className="fw-bold">Subheading</div>
    //           Cras justo odio
    //         </div>
    //         <Badge bg="primary" pill>
    //           14
    //         </Badge>
    //       </ListGroup.Item>
    //       <ListGroup.Item
    //         as="li"
    //         className="d-flex justify-content-between align-items-start"
    //       >
    //         <div className="ms-2 me-auto">
    //           <div className="fw-bold">Subheading</div>
    //           Cras justo odio
    //         </div>
    //         <Badge bg="primary" pill>
    //           14
    //         </Badge>
    //       </ListGroup.Item>
    //     </ListGroup>
    //   </div>
    // </>
  );
}

export default Dashboard;
