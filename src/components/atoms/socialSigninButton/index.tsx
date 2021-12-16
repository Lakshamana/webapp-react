import { SocialSigninButtonProps } from './types';
import { Icon } from "@iconify/react";
import { useThemeStore } from 'services/stores/theme';
import { BoxButton } from './styles';
import { colors } from 'styles';

const SocialSigninButton = ({ kind, ...props }: SocialSigninButtonProps) => {
    const { colorMode } = useThemeStore();
    const icons = { facebook: 'fa-brands:facebook-square', apple: 'fa-brands:apple', google: 'fa-brands:google' }
    return (
        <BoxButton {...props}><Icon width={28} color={colors.generalText[colorMode]} icon={icons[kind]} /></BoxButton>
    )
};

export { SocialSigninButton }
