import { Link } from "react-router-dom";
import { Container, Text, Layout } from "components";

const Login = () => {
  return (
    <Layout>
      <Container flexDirection="column">
        <Text>We're in Login</Text>
        <Link to="dashboard">Go to dashboard</Link>
      </Container>
    </Layout>
  );
};

export { Login };
