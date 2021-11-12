import React from "react";
import { ChannelCards, Container, Text } from "components/atoms";

import { Props, ChannelType } from "./types";
import { listChannelsMockable } from "./mock";

const ChannelListMolecule = ({}: Props) => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      p={[16, 32, 64]}
     
    >
      <Text fontSize={28} color="#fff" fontWeight={500} mb={21} >
        Channels
      </Text>
      <Container
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
        gridGap={12}
      >
        {listChannelsMockable.map((element: ChannelType) => (
          <ChannelCards
            {...{ ...element }}
            width={["90%", "90%", "100%"]}
            onClick={() => alert("click")}
          />
        ))}
      </Container>
    </Container>
  );
};

export { ChannelListMolecule as ChannelList };
