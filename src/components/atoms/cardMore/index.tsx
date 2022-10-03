import { Flex, Link } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { Props } from './types'

const CardMore = ({ sectionUrl }: Props) => {
    const history = useHistory()
    const { t } = useTranslation()
    const { colorMode } = useThemeStore()

    const handleAction = () => history.push(sectionUrl)

    return (
        <Link>
            <Flex
                color={colors.generalText[colorMode]}
                bg={colors.cardBg[colorMode]}
                w={302}
                h={170}
                marginTop={0}
                alignItems={'center'}
                justifyContent={'center'}
                onClick={handleAction}
            >
                {t('common.scroller.more')}
            </Flex>
        </Link>
    )
}

export { CardMore }

