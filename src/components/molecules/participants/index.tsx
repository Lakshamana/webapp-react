import React from "react";
import { Container } from "components";

import { getParticipants } from "./utils";
import { Props, TypeParticipant } from "./types";
import { Participant, Button } from "./styles";

const Participants = ({ participants, totalParticipants }: Props) => (
  <Container alignItems="center">
    <Container>
      {getParticipants(participants).map((participant: TypeParticipant) => (
        <Participant
          width="30px"
          height="30px"
          mr={-2}
          key={participant.id}
          src={participant.img}
        />
      ))}
    </Container>
    {totalParticipants > 3 && (
      <Container ml={3}>
        <Button p={1} minWidth="50px" onClick={() => {}}>
          + {totalParticipants}
        </Button>
      </Container>
    )}
  </Container>
);

export { Participants };
