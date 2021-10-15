import { useState } from "react";
import { Button, Stack } from "@chakra-ui/react";
import { Container, Text, Input } from "components";

import { tabs } from "./settings";
import { colors } from "styles";
import { TabContainer } from "./styles";
import { Line } from "../../styles";

const FormBilling = () => {
  const [selected, setSelected] = useState("credit-cards");

  const handleSelected = (id: string) => setSelected(id);

  const renderBillingForm = () => {
    switch (selected) {
      case "credit-cards":
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
      <Container alignItems="center" mb={4}>
        {tabs.map((tab) => (
          <TabContainer mr={3} onClick={() => handleSelected(tab.id)}>
            <Text
              key={tab.id}
              style={{ textTransform: "uppercase" }}
              color={colors.white}
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
