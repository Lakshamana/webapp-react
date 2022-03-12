import { useState } from 'react'
import { useHistory } from 'react-router'
import { LivestreamStatus } from 'generated/graphql'
import { useThemeStore } from 'services/stores'
import { LivestreamPostCardProps } from 'types/livestreams'
import { Flex, Box } from '@chakra-ui/layout'
import { Text } from 'components'
import { Icon } from '@iconify/react'
import { PostContent, BlockedContent, Live, CardWrapper } from './style'
import { colors } from 'styles'

const LivestreamPostCard = ({ ...props }: LivestreamPostCardProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)

  const isLive = props.status === LivestreamStatus.Active

  const selectPost = () => {
    history.push(`${props.url}`)
  }

  return (
    <CardWrapper
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <PostContent onClick={selectPost} {...props}>
        {(props.isExclusive || props.isGeolocked) && (
          <BlockedContent>
            <Icon
              width={20}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            ></Icon>
          </BlockedContent>
        )}
        {isLive && (
          <Live>
            <Text
              kind="headline"
              children={'Live'}
              textAlign={'center'}
              fontSize={12}
              color={`${colors.white}`}
            ></Text>
          </Live>
        )}
      </PostContent>
      {hover ? (
        <Box
          position="absolute"
          padding="0.6rem"
          borderBottomLeftRadius="4px"
          borderBottomRightRadius="4px"
          w={'100%'}
          background={colors.cardBg[colorMode]}
        >
          <Flex>
            <Text
              fontSize="0.85rem"
              fontWeight="bolder"
              color={colors.generalText[colorMode]}
            >
              {props.title}
            </Text>
          </Flex>
        </Box>
      ) : (
        <></>
      )}
    </CardWrapper>
  )
}

export { LivestreamPostCard }
