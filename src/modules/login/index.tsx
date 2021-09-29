import { Link } from "react-router-dom";
import { Container, Text, Layout } from "components";
import { Box } from "@chakra-ui/react"
import { pxToRem } from "styles/metrics";

const Login = () => {
  return (
    <Layout>
      <Container flexDirection="column">
        <Text>We're in Login</Text>
        <Link to="dashboard">Go to dashboard</Link>

        <Box w={pxToRem(144)} mt={pxToRem(24)}>PX_TO_REM SAMPLE</Box>
      </Container>
    </Layout>
  );
};

export { Login };
