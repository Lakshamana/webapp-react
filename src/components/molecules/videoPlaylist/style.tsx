import styled from "styled-components"
import { Flex } from "@chakra-ui/react"
import { pxToRem } from "styles/metrics"

export const List: any = styled(Flex)`
  width: 500px;
  flex-direction: column;
  padding: ${pxToRem(12)};
`