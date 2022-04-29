import { PostDetailsType, defaultProps } from './types';
import { Box } from "@chakra-ui/react"
import { Text } from "components/atoms"
import { pxToRem } from "styles/metrics";
import { theme } from "styles/theme"

const PostDetails = ({ title, description }: PostDetailsType) => (
  <Box>
    <Text
      color={theme.colors.textLight}
      kind="headline"
      fontSize={pxToRem(28)}
      fontWeight={600}
    >
      { title }
    </Text>
    <Text
      color={theme.colors.textMedium}
      mt={2}
      fontSize={pxToRem(16)}
    >
      { description }
    </Text>
  </Box>
)

PostDetails.defaultProps = defaultProps

export { PostDetails }
