import { EnvProps } from 'types/envs'

export let configEnvs: EnvProps = {}

export const setConfigEnvs = (data: EnvProps) => {
  configEnvs = { ...data }
}
