import { ReactComponent as FanheroLogo } from './logo.svg'
import { Image } from '@chakra-ui/react'
import { Props, defaultProps } from './types'

const Logo = ({ clickable, ...props }: Props): any => {
  return (
    <Image
      style={{cursor: clickable ? 'pointer' : '' }}
      {...props}
      fallback={<FanheroLogo/>}
    />
  )
}

Logo.defaultProps = defaultProps

export { Logo }
