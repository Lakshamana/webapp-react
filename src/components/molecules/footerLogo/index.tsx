import { Flex } from '@chakra-ui/react'
import { Logo } from "components/atoms"
import { configEnvs } from 'config/envs'

const FooterLogo = () => (
  <Flex justifyContent={'end'}>
    <a
      href={configEnvs?.footer?.link || 'https://fanhero.tv/'}
      target="_blank"
      rel="noreferrer"
    >
      <Logo
        ignoreFallback
        mb={[6, 6, 6, 6, 0]}
        width={120}
        src={configEnvs?.footer?.image || 'footer-logo.svg'}
        alt={configEnvs?.footer?.altText || 'FanHero'}
      />
    </a>
  </Flex>
)

export { FooterLogo }
