import { Card } from 'components'

import { ConfigBoxProps } from './types'

const ConfigBox = ({ children, removeMargin }: ConfigBoxProps) => (
  <Card
    width={1}
    paddingX={24}
    paddingY={24}
    mt={removeMargin ? '0px' : 3}
    removeShadow
    reduceBorder
  >
    {children}
  </Card>
)

export { ConfigBox }
