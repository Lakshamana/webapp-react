import { Box, Flex, Spacer } from "@chakra-ui/react"
import { pxToRem } from "styles/metrics";

import { Vote } from "components/atoms";

const ComponentsUsage = () => (
  <Box background="white">
    <Box w={pxToRem(144)} mb={pxToRem(24)}>PX_TO_REM SAMPLE</Box>

    <Flex>
      <Vote type="upvote" votes={"1.3K"} />
      <Spacer w={3} />
      <Vote type="downvote" votes={"100"} />
    </Flex>
  </Box>
)

export { ComponentsUsage }
