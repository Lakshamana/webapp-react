import { Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { kFormatterTranslate } from 'utils/helperFunctions'
import { colors } from 'styles'
import { Text, Select } from 'components'
import { IProps } from './types'

const CommentHeader = ({ totalComments, filterBy, handleFilterChange }: IProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  const translateMapper = [
    'page.post.comment.no_comments',
    'page.post.comment.comment',
    'page.post.comment.comments'
  ]

  const filterList = [
    { value: 'DESC', label: t('page.post.search_options.recent') },
    { value: 'ASC', label: t('page.post.search_options.old') }
  ]

  return (
    <Flex flexDirection="row" justifyContent={'space-between'}>
      <Text
        fontWeight="bolder"
        fontSize="1.4rem"
        color={colors.comments[colorMode]}
      >
        {kFormatterTranslate(t, totalComments, translateMapper)}
      </Text>
      <Select
        options={filterList}
        value={filterBy}
        onChange={handleFilterChange}
      />
    </Flex>
  )
}

export { CommentHeader }