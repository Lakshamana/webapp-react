import { Container } from 'components'

import { getParticipants } from './utils'
import { Props, TypeParticipant, defaultProps } from './types'
import { Participant, Button } from './styles'
import { formatNumber } from 'utils'

const Participants = ({ participants, totalParticipants }: Props) => (
  <Container alignItems="center">
    {getParticipants(participants).map(({ id, img }: TypeParticipant) => (
      <Participant key={id} src={img} />
    ))}
    {totalParticipants > 3 && (
      <Button>+ {formatNumber(totalParticipants, 1)}</Button>
    )}
  </Container>
)

Participants.defaultProps = defaultProps

export { Participants }
