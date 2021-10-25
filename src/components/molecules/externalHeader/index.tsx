import { Logo, LanguageSelector } from "components"
import { BoxHeader, HeaderItems } from "./style"

const ExternalHeader = () => (
    <BoxHeader display={"flex"} px={4} alignItems={"center"} justifyContent={"center"}>
        <HeaderItems>
            <Logo marginRight={[3, 4]} py={20}></Logo>
            <LanguageSelector></LanguageSelector>
        </HeaderItems>
    </BoxHeader>
)

export { ExternalHeader }
