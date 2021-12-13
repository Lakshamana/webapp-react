import { Container } from 'components'
import { SingleConfiguration } from '..'

import { ContentBlockProps } from './types'

const ContentBlock = ({
  title,
  action,
  children,
  colorMode,
  ...props
}: ContentBlockProps) => (
  <Container width={[1, 1, 1, '32%']} flexDirection="column" {...props}>
    <SingleConfiguration
      fontStyle={{
        fontWeight: 'bold',
        marginLeft: '24px',
      }}
      text={title}
      {...{
        action: { ...action, textAlign: 'end', marginRight: '24px' },
        colorMode,
      }}
    />
    {children}
  </Container>
)

export { ContentBlock }
