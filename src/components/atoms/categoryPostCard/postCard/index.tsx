import { Box, Flex, Spacer, Spinner, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { ComponentPostCardProps } from 'types/categories'
import { stripHTML, stripHTMLExceptLineBreaks } from 'utils/helperFunctions'
import { BlockedContent, CardWrapper, PostContent } from './style'

const PostCard = ({ onClickCard, ...props }: ComponentPostCardProps) => {
  const { colorMode } = useThemeStore()
  const isCategoryBlocked = props.isExclusive || props.isGeolocked

  const renderAddToMyListIcon = () => (
    <Box
      backgroundColor={colors.cardBg[colorMode]}
      borderRadius="100%"
      minWidth="25px"
      height="25px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={() =>
        props.isCategoryPinned ? props.unpinCategory() : props.pinCategory()
      }
    >
      {props.isLoading && (
        <Spinner
          thickness="1px"
          width="15px"
          height="15px"
          color={colors.brand.primary[colorMode]}
        />
      )}
      {!props.isLoading && (
        <Icon
          icon={props.isCategoryPinned ? 'mdi:check' : 'mdi:plus'}
          color={
            props.isCategoryPinned
              ? colors.brand.primary[colorMode]
              : colors.generalText[colorMode]
          }
        />
      )}
    </Box>
  )
  return (
    <CardWrapper
      onMouseLeave={props.actionHover(false)}
      onMouseEnter={props.actionHover(true)}
      {...props}
    >
      <PostContent onClick={onClickCard} {...props}>
        {isCategoryBlocked && (
          <BlockedContent>
            <Icon
              width={20}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            />
          </BlockedContent>
        )}
      </PostContent>
      {props.hover && (
        <Box
          position="absolute"
          padding="0.6rem"
          borderBottomLeftRadius="4px"
          borderBottomRightRadius="4px"
          w={'100%'}
          background={colors.footerBg[colorMode]}
        >
          <Flex>
            <Box display="flex" flexDirection="column">
              <Text
                fontSize={'0.85rem'}
                noOfLines={1}
                fontWeight="bolder"
                color={colors.generalText[colorMode]}
              >
                {stripHTML(props.title || '')}
              </Text>
              <Text
                fontSize={'0.7rem'}
                noOfLines={2}
                color={colors.secondaryText[colorMode]}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: stripHTMLExceptLineBreaks(props.description || ''),
                  }}
                />
              </Text>
            </Box>
            <Spacer px={1}></Spacer>
            {renderAddToMyListIcon()}
          </Flex>
        </Box>
      )}
    </CardWrapper>
  )
}

export { PostCard }
