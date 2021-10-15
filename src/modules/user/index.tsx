import { useState } from "react";
import { Container, Text, Layout } from "components";
import { FormSettings, FormProfile, FormBilling } from "./components";

import { options } from "./settings";
import { MenuOption } from "./types";

import { colors } from "styles";
import { OptionContainer } from "./styles";

const User = () => {
  const [selected, setSelected] = useState<MenuOption>(options[0]);

  const isSelected = (option: MenuOption) => selected.id === option.id;

  const handleSelected = (option: MenuOption) => {
    setSelected(option);
  };

  const renderContent = () => {
    switch (selected.id) {
      case "settings":
        return <FormSettings />;
      case "profile":
        return <FormProfile />;
      case "billing":
        return <FormBilling />;
      default:
        return <></>;
    }
  };

  return (
    <Layout p={4} backgroundColor={colors.backgroundLayout}>
      <Container
        flexDirection={["column", "column", "column", "row"]}
        width={1}
        height="100%"
        alignItems="stretch"
      >
        <Container
          flexDirection="column"
          backgroundColor={colors.grey["900"]}
          mr={4}
          py={2}
          height="100%"
          width={1 / 4}
        >
          {options.map((option) => (
            <OptionContainer
              display="flex"
              px={4}
              py={3}
              width={1}
              selected={isSelected(option)}
              onClick={() => handleSelected(option)}
            >
              {option.icon}
              <Text ml={2} style={{ textTransform: "uppercase" }}>
                {option.label}
              </Text>
            </OptionContainer>
          ))}
        </Container>
        <Container
          backgroundColor={colors.grey["900"]}
          width={3 / 4}
          flexDirection="column"
          py={4}
          px={5}
        >
          {renderContent()}
          {renderContent()}
          {renderContent()}
          {renderContent()}
        </Container>
      </Container>
    </Layout>
  );
};

export { User };
