import { Card } from 'components'

import { ConfigBoxProps } from './types'

const ConfigBox = ({ children }: ConfigBoxProps) => (
  <Card
    width={1}
    paddingX={[15, 24]}
    paddingY={10}
    roundBorder={4}
    removeShadow
  >
    {children}
  </Card>
)

export { ConfigBox }
