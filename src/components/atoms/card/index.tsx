import { Props, defaultProps } from "./types";
import { Container } from './style'


const Card = ({ children, ...props }: Props) => (
    <Container {...props}>
        {children}
    </Container>

);

Card.defaultProps = defaultProps

export { Card };