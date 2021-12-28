import { ReactComponent as FanheroLogo } from './logo.svg'
import { Props, defaultProps } from './types'
import { LogoContainer } from './styles'
import { Image } from '@chakra-ui/react'
import { useFlags } from 'contexts/flags'

const Logo = ({ height, width, ...props }: Props): any => {
  const { ORGANIZATION } = useFlags()

  return (
    <LogoContainer {...props}>
      <Image src={ORGANIZATION.LOGO_IMAGE} {...{ height, width }} ignoreFallback fallback={<FanheroLogo></FanheroLogo>}></Image>
    </LogoContainer>
  )
}

Logo.defaultProps = defaultProps

export { Logo }
