import { Text, Container, Logo } from "components";
import { TextFooter } from "./style";
import { colors } from "styles";

const InternalFooter = () => (
    <Container
        display="flex"
        width={1}
        px={3}
        alignItems="center"
        backgroundColor={colors.black}
        flexDirection={["column", "row"]}
        justifyContent={["center", "space-between"]}
        minHeight={["250px", "100px"]}
    >
        <Logo py={[3, 0]} width={161} height={44} />
        {/* TO-DO: Get text from i18n */}
        <TextFooter >
            <Text color={colors.white} py={[3, 0]} fontSize={[16, 12]}>
                FanHero © Copyright 2021.
            </Text>
            <Text color={colors.white} py={[3, 0]} fontSize={["16px", "12px"]}>
                All rights reserved.
            </Text>
        </TextFooter>
        <div>{/**/}</div>
    </Container>
);

export { InternalFooter };