import { Props } from "./types";
import { Container } from './style'


const CardContainer = ({ children, ...props }: Props) => {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
};

export { CardContainer };
