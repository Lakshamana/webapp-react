import { useState } from "react";
import { Container, MainLayout } from "components";

import { VideoPlayer } from "components/molecules";
import { Text } from "components/atoms";
import { Bar } from "./style";

import { options, initialLivestream } from "./mock";
import { Livechat } from "components/molecules/livechat";

const LiveChat = () => {
  const [optionsState, setOptionsState] = useState(options);

  return (
    <MainLayout flexDirection="column">
      <Container
        flexDirection={["column", "column", "row"]}
        width={["100%"]}
        minHeight={["100vh"]}
        minWidth={["80%"]}
      >
        <Container flex={5}>
          {initialLivestream && initialLivestream?.src && (
            <VideoPlayer {...{ ...initialLivestream }} skin={"facebook-skin"} />
          )}
        </Container>
        <Container flex={2} flexDirection={["column"]}>
          <Livechat
            dataChat={optionsState}
            onChangeChat={(e) => setOptionsState(e)}
            title="Livechat"
          />
        </Container>
      </Container>
      <Container flexDirection={["column"]} ml={64} mb={32}>
        <Text fontWeight={700} fontSize={36} color="#fff">
          Title lorem ipsum dolor sit amet consectetur  elit sed do eiusmod
          tempor incididunt
        </Text>
        <Text fontWeight={300} fontSize={16} color="#fff">
          Ao saber que tem câncer, um professor passa a fabricar metanfetamina
          pelo futuro da família, mudando o destino de todos.
        </Text>
        <Bar mt={64} />
      </Container>
    </MainLayout>
  );
};

export { LiveChat };
