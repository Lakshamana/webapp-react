import { ButtonProps, defaultProps } from './types';
import { BoxButton } from './style';
import { Icon } from '@iconify/react-with-api';

const Button = ({ label, type, iconName, ...props }: ButtonProps) => {
    const getButtonStyle = () => {
        switch (type) {
            case 'submit':
                return <BoxButton variant="primary" borderRadius={4} {...props}>{label}</BoxButton>
            case 'reset':
                return <BoxButton variant="secondary" borderRadius={4} {...props}>{label}</BoxButton>
            case 'billboard':
                return <BoxButton borderRadius={6} {...props}>
                    <Icon width={20} icon={`mdi:${iconName}`}></Icon>
                    {label}
                </BoxButton>
            case 'disabled':
                return <BoxButton variant="grey" borderRadius={4} {...props}>{label}</BoxButton>
            case 'cancel':
                return <BoxButton variant="cancel" {...props}>{label}</BoxButton>
            default:
                return <BoxButton variant="primary" {...props}>{label}</BoxButton>
        }
    }
    return getButtonStyle();
};

Button.defaultProps = defaultProps

export { Button }