import { useState } from 'react'
import { useHistory } from 'react-router'
import { useThemeStore } from 'services/stores'
import { Icon } from '@iconify/react'
import { Flex, Box } from '@chakra-ui/layout'
import { LivestreamPostCardProps } from 'types/livestreams'
import { Text } from 'components'
import { PostContent, BlockedContent, Live, CardWrapper } from './style'
import { colors } from 'styles'

const LivestreamPostCard = ({ ...props }: LivestreamPostCardProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)

  const isLive = props.status === 'active'

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
          background={colors.footerBg[colorMode]}
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
    </CardWrapper>
  )
}

export { LivestreamPostCard }
