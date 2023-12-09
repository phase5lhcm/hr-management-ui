import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FormComponent = ({ isLoginPage }) => {
  return (
    <>
      <Row
        className="justify-content-center"
        style={{
          paddingTop: "4rem",
          backgroundImage: "linear-gradient(90deg,#05D6D9, #F907FC)",
        }}
        fluid
      >
        {isLoginPage ? (
          <h1 style={{ textAlign: "center" }}>Login</h1>
        ) : (
          <h1 style={{ textAlign: "center" }}>Register</h1>
        )}

        <Col md={2}></Col>
        <Col md={6} xs={12}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{ width: "60%" }}
              />
              <Form.Text className="text-muted">
                Please entire your email address.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ width: "60%" }}
              />
            </Form.Group>
            {isLoginPage ? (
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Forgot Password?" />
                  </Form.Group>
                </Col>
                <Col style={{ paddingRight: "4rem" }}>
                  <Button type="submit" style={{ marginBottom: "2rem" }}>
                    Submit
                  </Button>
                </Col>
              </Row>
            ) : (
              <>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Your Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{ width: "60%" }}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "60%", borderRadius: "16px" }}
                >
                  Submit
                </Button>
              </>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default FormComponent;
