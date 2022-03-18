import { useState } from 'react'
import { useHistory } from 'react-router'
import { useMutation } from '@apollo/client'
import { Icon } from '@iconify/react'
import { Flex, Text, Box, Spacer, Spinner } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores'
import { CategoryPostCardProps } from 'types/categories'
import { CardWrapper, PostContent } from './style'
import { colors } from 'styles'
import {
  MUTATION_PIN_CATEGORY,
  MUTATION_UNPIN_CATEGORY,
} from 'services/graphql'

const CategoryPostCard = ({ ...props }: CategoryPostCardProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)

  const [pinCategory, { loading }] = useMutation(
    props.isPinned ? MUTATION_UNPIN_CATEGORY : MUTATION_PIN_CATEGORY,
    {
      variables: {
        categoryId: props.id,
      },
    }
  )

  const selectCategory = () => {
    history.push(`${props.url}`)
  }

  const renderAddToMyListIcon = () => (
    <Box
      borderColor="red"
      backgroundColor={colors.cardBg[colorMode]}
      borderRadius="100%"
      width="25px"
      height="25px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={() => pinCategory()}
    >
      {loading ? (
        <Spinner
          thickness="1px"
          width="15px"
          height="15px"
          color={colors.brand.primary[colorMode]}
        ></Spinner>
      ) : (
        <Icon
          icon={props.isPinned ? 'mdi:check' : 'mdi:plus'}
          color={
            props.isPinned
              ? colors.brand.primary[colorMode]
              : colors.generalText[colorMode]
          }
        ></Icon>
      )}
    </Box>
  )

  return (
    <CardWrapper
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <PostContent onClick={selectCategory} {...props} />
      {hover ? (
        <Box
          position="absolute"
          padding="0.6rem"
          borderBottomLeftRadius="4px"
          borderBottomRightRadius="4px"
          w={'100%'}
          background={colors.footerBg[colorMode]}
        >
          <Flex>
            <Box display='flex' flexDirection='column'>
              <Text
                fontSize="0.85rem"
                noOfLines={1}
                fontWeight="bolder"
                color={colors.generalText[colorMode]}
              >
                {props.title}
              </Text>
              <Text
                fontSize="0.75rem"
                noOfLines={2}
                color={colors.secondaryText[colorMode]}
              >
                {props.description}
              </Text>
            </Box>
            <Spacer px={1}></Spacer>
            {renderAddToMyListIcon()}
          </Flex>
        </Box>
      ) : (
        <></>
      )}
    </CardWrapper>
  )
}

export { CategoryPostCard }
