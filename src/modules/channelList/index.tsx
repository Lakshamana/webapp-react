import { Container, MainLayout } from "components";
import { ChannelList } from "components/molecules";

const ChannelListModule = () => {

  return (
    <MainLayout>
      <Container flexDirection="column" width={["100%"]} minHeight={["100vh"]}>
        <ChannelList />
      </Container>
    </MainLayout>
  );
};

export { ChannelListModule as ChannelList };
