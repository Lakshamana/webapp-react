import { Container, MainLayout } from "components";
import { VideoRelated } from "components/molecules";

import { dataVideoRelated } from "./mock";

const LiveChat = () => {
  return (
    <MainLayout>
      <Container flexDirection="column" width={["100%"]} minHeight={["100vh"]}>
        <VideoRelated
          options={dataVideoRelated}
          initialAutoplayValue={true}
          onAutoplay={() => {}}
          onSelect={() => {}}
        />
      </Container>
    </MainLayout>
  );
};

export { LiveChat };
