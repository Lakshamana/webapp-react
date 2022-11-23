import { Image } from '@chakra-ui/react'
import { ReactComponent as FanheroLogo } from './logo.svg'
import { defaultProps, Props } from './types'

const Logo = ({ clickable, ...props }: Props): any => {
  return (
    <Image
      style={{ cursor: clickable ? 'pointer' : '' }}
      fallback={<FanheroLogo />}
      {...props}
    />
  )
}

Logo.defaultProps = defaultProps

export { Logo }
