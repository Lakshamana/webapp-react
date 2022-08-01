import { Box, Flex, Text } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { CategoryPostCardProps } from 'types/categories'
import { stripHTML, stripHTMLExceptLineBreaks } from 'utils/helperFunctions'

const DetailCard = ({ categoryUnpinned, ...props }: CategoryPostCardProps) => {
  const { colorMode } = useThemeStore()

  return (
    <Box
      position="absolute"
      padding="0.6rem"
      borderBottomLeftRadius="4px"
      borderBottomRightRadius="4px"
      w={'100%'}
      background={colors.footerBg[colorMode]}
    >
      <Flex direction="column">
        <Text
          fontSize="0.85rem"
          fontWeight="bolder"
          color={colors.generalText[colorMode]}
        >
          {stripHTML(props.title || '')}
        </Text>
        {props.description && (
          <Text
            mt={1}
            fontSize="0.7rem"
            noOfLines={2}
            lineHeight={'0.9rem'}
            color={colors.secondaryText[colorMode]}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: stripHTMLExceptLineBreaks(props.description),
              }}
            />
          </Text>
        )}
      </Flex>
    </Box>
  )
}

export { DetailCard }
