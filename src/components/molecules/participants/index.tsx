import { Container } from "components";

import { getParticipants } from "./utils";
import { Props, TypeParticipant, defaultProps } from "./types";
import { Participant, Button } from "./styles";
import { formatNumber } from "utils";

const Participants = ({ participants, totalParticipants }: Props) => (
  <Container alignItems="center">
    <Container>
      {getParticipants(participants).map((participant: TypeParticipant) => (
        <Participant
          width="35px"
          height="30px"
          mr={-2}
          key={participant.id}
          src={participant.img}
        />
      ))}
    </Container>
    {totalParticipants > 3 ? (
      <Container ml={3}>
        <Button py={1} px={2} minWidth="50px" onClick={() => {}}>
          + {formatNumber(totalParticipants, 1)}
        </Button>
      </Container>
    ) : (
      <></>
    )}
  </Container>
);

Participants.defaultProps = defaultProps;

export { Participants };
