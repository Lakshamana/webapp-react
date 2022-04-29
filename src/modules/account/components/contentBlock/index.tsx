import { SingleConfiguration } from '..'
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
        fontSize: '1.2rem',
        fontWeight: '600',
        marginLeft: '15px',
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
