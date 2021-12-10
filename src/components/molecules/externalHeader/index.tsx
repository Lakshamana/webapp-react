import { Logo, LanguageSelector, Container } from "components";
import { Box } from '@chakra-ui/layout';
import { ExternalHeaderProps } from "./types";
import { BoxHeader, HeaderItems } from "./style";

const ExternalHeader = ({
  rightContent,
  rightContentStyle,
}: ExternalHeaderProps) => (
  <BoxHeader display="flex" alignItems="center" justifyContent="center">
    <HeaderItems>
      <Logo width={140} marginRight={[3, 4]} py={20}></Logo>
      <Box marginLeft={'auto'}>
        <LanguageSelector></LanguageSelector>
      </Box>
      <Container {...rightContentStyle}>
        {rightContent ? rightContent() : <></>}
      </Container>
    </HeaderItems>
  </BoxHeader>
);

export { ExternalHeader };
