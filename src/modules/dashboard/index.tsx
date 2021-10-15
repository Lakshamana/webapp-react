import { MainLayout, Container } from "components";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <MainLayout>
      <Container flexDirection="column">
        <Link to="login">Go to Login</Link>
      </Container>
    </MainLayout>
  )
};

export { DashboardPage }
