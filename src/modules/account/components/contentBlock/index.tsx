import { SingleConfiguration } from '..'

import { pxToRem } from 'styles/metrics'
import { ContentBlockProps } from './types'
import { ContentContainer } from './styles'

const ContentBlock = ({
  title,
  action,
  children,
  colorMode,
  ...props
}: ContentBlockProps) => (
  <ContentContainer width={[1, 1, 1, '49%']} flexDirection="column" {...props}>
    <SingleConfiguration
      fontStyle={{
        fontSize: pxToRem(20),
        marginLeft: '24px',
        fontWeight: 'bold',
      }}
      text={title}
      {...{
        action: { ...action, textAlign: 'end', marginRight: '24px' },
        colorMode,
      }}
    />
    {children}
  </ContentContainer>
)

export { ContentBlock }
