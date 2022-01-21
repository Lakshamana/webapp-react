import { Container, Text } from 'components'

import { SingleConfigurationProps } from './types'
import { colors } from 'styles'
import { ActionLink } from '../../styles'

const SingleConfiguration = ({
  text,
  action,
  children,
  colorMode,
  fontStyle = { fontWeight: 500, color: colors.grey['800'] },
}: SingleConfigurationProps) => (
  <Container width={1} py={10} justifyContent="space-between" alignItems="center">
    <Text {...fontStyle} color={colors.generalText[colorMode]}>
      {text}
    </Text>
    {action ? (
      <ActionLink fontSize={12} {...action}>
        {action.text}
      </ActionLink>
    ) : (
      children || <></>
    )}
  </Container>
)

export { SingleConfiguration }
