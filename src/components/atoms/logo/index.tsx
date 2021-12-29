import { ReactComponent as FanheroLogo } from './logo.svg'
import { Image } from '@chakra-ui/react'
import { Props, defaultProps } from './types'

const Logo = ({ height, width, src, ...props }: Props): any => {
  return (
    <Image
      src={src}
      {...{ height, width }}
      {...props}
      fallback={<FanheroLogo></FanheroLogo>}
    ></Image>
  )
}

Logo.defaultProps = defaultProps

export { Logo }
