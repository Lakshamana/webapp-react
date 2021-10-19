import { useState } from "react";
import { Container, Button, Text } from "components";

import { tabs } from "./settings";
import { colors } from "styles";
import { Line, TabContainer } from "../../styles";

const FormBilling = () => {
  const [selected, setSelected] = useState("credit-cards");

  const handleSelected = (id: string) => setSelected(id);

  const renderBillingForm = () => {
    switch (selected) {
      case "credit-cards":
        return (
          <Container flexDirection="column">
            <Container mt={2}>
              <Button type="submit" label="Add Card" />
            </Container>
            <Container mt={4}>
              <Button type="submit" label="Add Account" />
            </Container>
          </Container>
        );
        return;
      case "expiration":
        return;
      case "billing-address":
        return;
      default:
        <></>;
    }
  };

  return (
    <>
      <Container alignItems="flex-start" mb={4}>
        {tabs.map((tab) => (
          <TabContainer
            key={tab.id}
            mr={3}
            onClick={() => handleSelected(tab.id)}
          >
            <Text
              style={{ textTransform: "uppercase" }}
              color={colors.white}
              fontSize={[10, 12, 14]}
              textAlign="center"
            >
              {tab.label}
            </Text>
            <Line selected={selected === tab.id} />
          </TabContainer>
        ))}
      </Container>

      {renderBillingForm()}
    </>
  );
};

export { FormBilling };
