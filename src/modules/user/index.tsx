import { useState } from "react";
import { Container, RadioGroup, Text, MainLayout } from "components";

import { options, RADIO_LANGUAGES } from "./settings";
import { MenuOption } from "./types";
import { OptionContainer } from "./styles";
import { colors } from "styles";

const User = () => {
  const [selected, setSelected] = useState<MenuOption>(options[0]);

  const isSelected = (option: MenuOption) => selected.id === option.id;

  const handleSelected = (option: MenuOption) => {
    setSelected(option);
  };

  return (
    <MainLayout p={4} backgroundColor={colors.backgroundLayout}>
      <Container
        flexDirection={["column", "column", "column", "row"]}
        width={1}
        height="100%"
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
          <Text style={{ textTransform: "uppercase" }} color={colors.white}>
            Delete Account
          </Text>

          <Container>
            <RadioGroup
              size="sm"
              name="language"
              title="Language"
              radios={RADIO_LANGUAGES}
              onChange={(radio: any) => console.log(radio)}
            />
          </Container>
        </Container>
      </Container>
    </MainLayout>
  );
};

export { User };
