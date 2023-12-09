import Container from "react-bootstrap/Container";
import FormComponent from "../components/FormComponent";

const RegisterPage = () => {
  return (
    <Container>
      <FormComponent isLoginPage={false} />
    </Container>
  );
};

export default RegisterPage;
