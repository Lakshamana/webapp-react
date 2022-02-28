import { Flex } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { Container } from 'components'
import { BillboardScroller, CategoriesScroller } from 'components/molecules'
import billboardData from './billboard.json'
import collectionsData from './collections.json'

const CollectionsPage = () => {
  const { t } = useTranslation()
  return (
    <Container flexDirection={'column'} width={'100%'}>
      <BillboardScroller
        items={billboardData}
        customButtons={false}
      ></BillboardScroller>
      <Flex pb={10} gridGap={10} flexDirection={'column'}>
        <CategoriesScroller
          items={collectionsData}
          sectionTitle={t('page.collection.action')}
          hasMoreLink={true}
        ></CategoriesScroller>
        <CategoriesScroller
          items={collectionsData}
          sectionTitle={t('page.collection.drama')}
          hasMoreLink={true}
        ></CategoriesScroller>
        <CategoriesScroller
          items={collectionsData}
          sectionTitle={t('page.collection.family')}
          hasMoreLink={true}
        ></CategoriesScroller>
      </Flex>
    </Container>
  )
}

export { CollectionsPage }
