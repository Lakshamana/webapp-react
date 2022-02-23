import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'

import { Container } from 'components'
import { PropsChannelSearch } from './types'
import { SearchContainer } from './styles'
import { colors } from 'styles'

const ChannelSearch = ({ search, onChange, colorMode }: PropsChannelSearch) => {
  const { t } = useTranslation()
  return (
    <SearchContainer display="flex" justifyContent="center" width="100%" py={2}>
      <Container>
        <InputGroup width={'100%'}>
          <Input
            variant="flushed"
            color={colors.generalText[colorMode]}
            placeholder={t('header.channel_search')}
            value={search}
            {...{ onChange }}
          />
          <InputRightElement
            children={
              <Icon
                width={20}
                height={20}
                icon="mdi:magnify"
                color={colors.generalText[colorMode]}
              />
            }
          />
        </InputGroup>
      </Container>
    </SearchContainer>
  )
}

export { ChannelSearch }
