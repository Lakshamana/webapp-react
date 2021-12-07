import { LinkProps as LinkPackageProps } from '@chakra-ui/react'

export interface LinkProps extends LinkPackageProps {
  label: string
  toRoute?: string
  externalLink?: string
  defaultColor?: boolean
}
