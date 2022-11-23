import { Logo } from "components/atoms"
import { configEnvs } from 'config/envs'

const FooterLogo = () => (
  <a
    href={configEnvs?.playerLogo?.link || 'https://fanhero.tv/'}
    target="_blank"
    rel="noreferrer"
  >
    <Logo
      alignItems={'center'}
      justifyContent={'right'}
      marginLeft={['none', 'none', 'none', 'none', 'auto']}
      ignoreFallback
      src={configEnvs?.playerLogo?.image || 'footer-logo.svg'}
      mb={[6, 6, 6, 6, 0]}
      width={120}
    />
  </a>
)

export { FooterLogo }
