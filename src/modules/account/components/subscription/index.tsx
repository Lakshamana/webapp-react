import { Container, Text } from 'components'

import { SubscriptionProps } from './types'
import { colors } from 'styles'
import { Separator } from '../../styles'

const Subscription = ({
  value,
  title,
  subtitle,
  separator = true,
  fontStyle = { fontSize: 16, color: colors.grey['800'] },
  fontValueStyle = { fontSize: 14, color: colors.grey['800'] },
  colorMode,
}: SubscriptionProps) => (
  <>
    <Container my={3} width={1} justifyContent="space-between">
      <Container flexDirection="column">
        <Text
          {...{
            ...fontStyle,
            color: colorMode === 'light' ? fontStyle.color : colors.white,
          }}
        >
          {title}
        </Text>
        {subtitle ? (
          <Text
            color={colorMode === 'dark' ? colors.white : colors.grey['800']}
            fontSize={14}
          >
            Flameng - Campeonato Carioca
          </Text>
        ) : (
          <></>
        )}
      </Container>
      <Text
        {...{
          ...fontValueStyle,
          color: colorMode === 'light' ? fontStyle : colors.white,
        }}
      >
        {value}
      </Text>
    </Container>
    {separator ? <Separator /> : <> </>}
  </>
)

export { Subscription }
