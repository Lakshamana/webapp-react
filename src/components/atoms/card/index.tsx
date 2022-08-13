import { Container } from './style';
import { defaultProps, Props } from "./types";


const Card = ({ children, ...props }: Props) => (
    <Container data-testid="card-atom" {...props}>
        {children}
    </Container>

);

Card.defaultProps = defaultProps

export { Card };
