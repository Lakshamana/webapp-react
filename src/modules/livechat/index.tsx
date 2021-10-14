import { Container, MainLayout } from "components";

import { Input } from "components/molecules";

const LiveChat = () => {
  return (
    <MainLayout>
      <Container flexDirection="column" width={["100%"]} minHeight={["100vh"]}>
        <Input onChange={() => {}} />
        <Input onChange={() => {}} error={true} errorMessage="Invalid value." />
        <Input
          onChange={() => {}}
          error={false}
          sendIcon
          onEnterPress={() => alert("enter")}
        />
      </Container>
    </MainLayout>
  );
};

export { LiveChat };
