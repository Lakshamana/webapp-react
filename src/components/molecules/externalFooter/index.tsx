import { Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next'
import { Logo, Text, Container } from 'components/atoms'
import { useThemeStore } from 'services/stores/theme';
import { BoxFooter, FooterItems, TextFooter } from "./style";
import { colors } from 'styles';

const ExternalFooter = () => {
    const { t } = useTranslation();
    const { colorMode } = useThemeStore();
    return (
        <BoxFooter display={'flex'} alignItems={'center'}>
            <FooterItems width={1} py={20}>
                <TextFooter>
                    <Link to="" fontSize={[16]}>{t('common.terms')}</Link>
                    <Text mx={1} fontSize={[16]}>&</Text>
                    <Link to="" fontSize={[16]}>{t('common.privacy')}</Link>
                </TextFooter>
                <Container marginLeft={['none', 'none', 'auto']} display={'block'} textAlign={'center'}>
                    <Text fontSize={14} kind={'subheading'} color={colors.secondaryText[colorMode]}> Powered by </Text>
                    <Logo alignItems={'center'} justifyContent={'right'} mb={[4, 4, 0, 0]} width={161} height={44} />
                </Container>
            </FooterItems>
        </BoxFooter>
    )
}

export { ExternalFooter };
