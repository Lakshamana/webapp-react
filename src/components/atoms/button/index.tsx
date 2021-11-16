import { ButtonProps, defaultProps } from "./types";
import { BoxButton } from "./style";
import { Icon } from "@iconify/react-with-api";

const Button = ({ ...props }: ButtonProps) => {
    const getButtonStyle = () => {
        switch (props.type) {
            case 'submit':
                return <BoxButton variant="primary" type={'submit'} borderRadius={4} {...props}>{props.label}</BoxButton>
            case 'reset':
                return <BoxButton variant="secondary" borderRadius={4} {...props}>{props.label}</BoxButton>
            case 'billboard':
                return <BoxButton borderRadius={6} {...props}>
                    <Icon width={20} icon={`mdi:${props.iconName}`}></Icon>
                    {props.label}
                </BoxButton>
            case 'disabled':
                return <BoxButton type='submit' variant="grey" borderRadius={4} {...props}>{props.label}</BoxButton>
            case 'cancel':
                return <BoxButton variant="cancel" {...props}>{props.label}</BoxButton>
            case "children":
                return (
                    <BoxButton variant="primary" borderRadius={4} {...props}>
                        {props.children}
                    </BoxButton>
                );
            default:
                return <BoxButton variant="primary" {...props}>{props.label}</BoxButton>
        }
    };
    return getButtonStyle();
};

Button.defaultProps = defaultProps;

export { Button };
