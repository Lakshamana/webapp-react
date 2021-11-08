import { useState } from "react";
import { Container, MainLayout } from "components";

import { useTranslation } from "react-i18next";
import {
  VideoPlayer,
  LivechatHeader,
  LivechatFooter,
  ChatBody,
} from "components/molecules";
import { Text } from "components/atoms";
import { Bar } from "./style";

import { options, initialLivestream } from "./mock";

const LiveChat = () => {
  const { t } = useTranslation();

  const [value, setValue] = useState("");
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
          <LivechatHeader title="Live chat" />
          <ChatBody options={optionsState} />
          <LivechatFooter
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onEnter={() => {
              //implements here chat integration live
              setOptionsState([
                ...optionsState,
                {
                  iconUrl: "",
                  date: "01/01/2001",
                  username: "Yuri Mustifaga",
                  message: value,
                  isOwnUser: true,
                },
              ]);
              setValue("");
            }}
            onPressIcon={() => {}}
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
