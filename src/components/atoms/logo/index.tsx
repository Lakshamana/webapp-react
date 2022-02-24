import { ReactComponent as FanheroLogo } from './logo.svg'
import { Image } from '@chakra-ui/react'
import { Props, defaultProps } from './types'

const Logo = ({ ...props }: Props): any => {
  return (
    <Image
      {...props}
      fallback={<FanheroLogo></FanheroLogo>}
    ></Image>
  )
}

Logo.defaultProps = defaultProps

export { Logo }
