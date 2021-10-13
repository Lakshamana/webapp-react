import { Props, defaultProps } from "./types";
import { Container } from './style'


const CardContainer = ({ children, ...props }: Props) => (
    <Container {...props}>
        {children}
    </Container>

);

CardContainer.defaultProps = defaultProps

export { CardContainer };