import { Container, MainLayout } from "components";

import { Input, Modal } from "components/molecules";

const LiveChat = () => {
  return (
    <MainLayout>
      <Container
        flexDirection="column"
        width={["100%"]}
        minHeight={["100vh"]}
        margin={["24px"]}
      >
        <Input onChange={() => {}} />
        <Input onChange={() => {}} rightIcon="check" />
        <Input
          onChange={() => {}}
          rightIcon="send"
          onEnterPress={() => alert("enter")}
        />
        <Input onChange={() => {}} placeholder="Password" type="password" />
        <Input onChange={() => {}} error={true} errorMessage="Invalid value." />

        <Modal title="Modal teste" onClose={() => {}} show={true}>
          <span>modal body</span>
        </Modal>
      </Container>
    </MainLayout>
  );
};

export { LiveChat };
