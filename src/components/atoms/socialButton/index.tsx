import { SocialSigninButtonProps } from './types';
import { BoxButton } from './styles';
import { ReactComponent as AppleIcon } from "assets/companies/apple.svg";
import { ReactComponent as FacebookIcon } from "assets/companies/facebook.svg";
import { ReactComponent as GoogleIcon } from "assets/companies/google.svg";

const SocialSigninButton = ({ kind, ...props }: SocialSigninButtonProps) => {
    const icons: any = {
        facebook: <FacebookIcon width={24} />,
        apple: <AppleIcon width={24} />,
        google: <GoogleIcon width={24} />
    };
    return (
        <BoxButton {...props}>
            { icons[kind] }
        </BoxButton>
    )
};

export { SocialSigninButton }
