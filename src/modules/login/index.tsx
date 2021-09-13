import { Link } from "react-router-dom";
import { Text } from "components";

const Login = () => {
  return (
    <>
      <Text>We're in Login</Text>
      <Link to="dashboard">Go to dashboard</Link>
    </>
  );
};

export { Login };
