import { Container, MainLayout } from "components";
import { Input, VideoRelated } from "components/molecules";
import { useState } from "react";

import { dataVideoRelated } from "./mock";

const LiveChat = () => {
  const [value, setValue] = useState("");
  return (
    <MainLayout>
      <Container flexDirection="column" width={["100%"]} minHeight={["100vh"]}>
        <Input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* <VideoRelated
          options={dataVideoRelated}
          initialAutoplayValue={true}
          onAutoplay={() => {}}
          onSelect={() => {}}
        /> */}
      </Container>
    </MainLayout>
  );
};

export { LiveChat };
