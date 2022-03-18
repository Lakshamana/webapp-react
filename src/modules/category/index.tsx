import { Flex } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { Container } from 'components'
import { CategoriesScroller } from 'components/molecules'

const CategoryPage = () => {
  const { t } = useTranslation()

  return (
    <Container flexDirection={'column'} width={'100%'}>
      <Flex pb={10} gridGap={10} flexDirection={'column'}>
        <CategoriesScroller
          items={[]}
          sectionTitle={t('page.collection.more_categories')}
          hasMoreLink={true}
        ></CategoriesScroller>
      </Flex>
    </Container>
  )
}

export { CategoryPage }
