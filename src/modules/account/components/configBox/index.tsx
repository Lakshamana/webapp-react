import { Card } from 'components'

import { ConfigBoxProps } from './types'

const ConfigBox = ({ children, removeMargin }: ConfigBoxProps) => (
  <Card
    width={1}
    paddingX={[24, 32]}
    paddingY={24}
    mt={removeMargin ? '0px' : 3}
    roundBorder={4}
    removeShadow
  >
    {children}
  </Card>
)

export { ConfigBox }
