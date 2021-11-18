import { CardContainer } from 'components'

import { ConfigBoxProps } from './types'

const ConfigBox = ({ children, removeMargin }: ConfigBoxProps) => (
  <CardContainer
    width={1}
    paddingX={24}
    paddingY={24}
    mt={removeMargin ? '0px' : 3}
    removeShadow
  >
    {children}
  </CardContainer>
)

export { ConfigBox }
