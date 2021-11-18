import { Logo, LanguageSelector, Container } from "components";
import { ExternalHeaderProps } from "./types";
import { BoxHeader, HeaderItems } from "./style";

const ExternalHeader = ({
  rightContent,
  rightContentStyle,
}: ExternalHeaderProps) => (
  <BoxHeader display="flex" px={4} alignItems="center" justifyContent="center">
    <HeaderItems>
      <Logo marginRight={[3, 4]} py={20}></Logo>
      <LanguageSelector></LanguageSelector>
      <Container {...rightContentStyle}>
        {rightContent ? rightContent() : <></>}
      </Container>
    </HeaderItems>
  </BoxHeader>
);

export { ExternalHeader };
