import Container from "react-bootstrap/Container";
import Register from "../components/RegisterComponent";
import FormComponent from "../components/FormComponent";

const LoginPage = () => {
  return (
    <Container>
      <FormComponent isLoginPage={true} />
    </Container>
  );
};

export default LoginPage;
