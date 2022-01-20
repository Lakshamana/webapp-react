import { useState } from "react";
import { Props } from "./types";

import { Container } from "components/atoms";
import {
  LivechatFooter,
  LivechatHeader,
  LivechatBody,
} from "components/molecules";

const LivechatMolecule = ({
  title = "Live chat",
  dataChat = [],
  onPressEnter = () => { },
  onChangeChat = () => { },
  onCloseChat = () => { },
}: Props) => {
  const [value, setValue] = useState("");
  const [optionsState, setOptionsState] = useState(dataChat);

  return (
    <Container flex={2} width={'102%'} height={'100%'} flexDirection={["column"]} overflowY={'scroll'} justifyContent={'space-between'}>
      <LivechatHeader title={title} onCloseChat={() => onCloseChat()} />
      <LivechatBody options={optionsState} />
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
          onChangeChat([
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
        onPressIcon={() => onPressEnter(value)}
      />
    </Container>
  );
};

export { LivechatMolecule as Livechat };
