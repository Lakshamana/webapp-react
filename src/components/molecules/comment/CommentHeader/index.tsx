import { Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { kFormatterTranslate } from 'utils/helperFunctions'
import { colors } from 'styles'
import { Text, Select } from 'components'
import { defaultProps, IProps } from './types'
import { SortDirection } from 'generated/graphql'

const CommentHeader = ({ totalComments, filterBy, handleFilterChange, loading }: IProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  const translateMapper = [
    'page.post.comment.no_comments',
    'page.post.comment.comment',
    'page.post.comment.comments'
  ]

  const filterList = [
    { value: SortDirection.Desc, label: t('page.post.search_options.recent') },
    { value: SortDirection.Asc, label: t('page.post.search_options.old') }
  ]

  return (
    <Flex flexDirection="row" justifyContent={'space-between'}>
      <Text
        fontWeight="bolder"
        fontSize="1.4rem"
        color={colors.comments[colorMode]}
      >
        {!loading && kFormatterTranslate(t, totalComments, translateMapper)}
      </Text>
      <Select
        options={filterList}
        value={filterBy}
        onChange={handleFilterChange}
      />
    </Flex>
  )
}

CommentHeader.defaultProps = defaultProps

export { CommentHeader }