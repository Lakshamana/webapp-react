import { SocialSigninButtonProps } from './types';
import { BoxButton } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebookSquare, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const SocialSigninButton = ({ type, ...props }: SocialSigninButtonProps) => {
    const renderSocialSigninButton = () => {
        switch (type) {
            case "facebook":
                return <BoxButton  {...props}><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></BoxButton>
            case "apple":
                return <BoxButton  {...props}><FontAwesomeIcon icon={faApple} size="2x" /></BoxButton>
            case "google":
                return <BoxButton  {...props}><FontAwesomeIcon icon={faGoogle} size="2x" /></BoxButton>
            case "linkedin":
                return <BoxButton  {...props}><FontAwesomeIcon icon={faLinkedin} size="2x" /></BoxButton>
            default:
                return <BoxButton  {...props}><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></BoxButton>
        }
    }

    return renderSocialSigninButton();
};

export { SocialSigninButton }
