import { useMemo } from "react";
import { Container, Text, LoginLayout, UserInfo } from "components";

import {
  ContentBlock,
  AccountInformation,
  SingleConfiguration,
  ConfigBox,
  PaymentMethods,
  Subscription,
  Navbar,
} from "./components";

import { colors } from "styles";
import { ACCOUNT_INFO, PAYMENT_METHODS, DEFAULT_USER } from "./settings";
import { formatAccountInfo } from "./utils";

const Account = () => {
  const accountInfo = useMemo(() => formatAccountInfo(ACCOUNT_INFO), []);

  return (
    <LoginLayout
      backgroundImage=""
      mode="light"
      rightContent={() => (
        <UserInfo delimited={false} mode="dark" user={DEFAULT_USER} />
      )}
      rightContentStyle={{
        display: ["none", "none", "flex"],
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <Container
        width={1}
        my={2}
        mx={4}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Navbar onClick={() => {}} />
        <ContentBlock title="Your Account Information" idented>
          <ConfigBox>
            <AccountInformation data={accountInfo} />
          </ConfigBox>
          <ConfigBox>
            <Text color={colors.grey["800"]} fontWeight="bold" mb={2}>
              Language Selection
            </Text>
          </ConfigBox>
          <ConfigBox>
            <SingleConfiguration text="Push" children={<></>} />
          </ConfigBox>
          <ConfigBox>
            <SingleConfiguration
              text="Delete Account"
              action={{ text: "DELETE", onClick: () => {}, fontWeight: "bold" }}
            />
          </ConfigBox>
        </ContentBlock>

        <ContentBlock
          title="Your Billing Information"
          action={{
            text: "View Billing History",
            underline: true,
            fontWeight: 400,
            fontSize: 14,
          }}
          idented
        >
          <ConfigBox>
            <SingleConfiguration
              text="Your Subscription"
              fontStyle={{ fontWeight: "bold", fontSize: 18 }}
              action={{
                text: "Manage Your Subscription",
                onClick: () => {},
                fontWeight: "bold",
                underline: true,
                fontSize: 14,
              }}
            />
            <Container flexDirection="column">
              <Subscription
                title="ABS Monthly Plan"
                subtitle="Flamengo - Campeonato Carioca"
                value="$12.99/mo"
                fontStyle={{ fontSize: 20 }}
                fontValueStyle={{ fontSize: 20 }}
              />
              <Subscription
                title="Next Billing Date"
                value="$12.99/mo on 08/12/21"
                fontValueStyle={{ fontSize: 14, color: colors.grey["800"] }}
              />
              <Subscription
                title="Last Billing Date"
                value="$12.99/mo on 08/12/21"
                separator={false}
                fontStyle={{ fontSize: 16, color: colors.grey["650"] }}
                fontValueStyle={{ fontSize: 14, color: colors.grey["650"] }}
              />
            </Container>
          </ConfigBox>
          <ConfigBox>
            <SingleConfiguration
              text="Pause Subscription"
              action={{ text: "PAUSE", onClick: () => {}, fontWeight: "bold" }}
            />
          </ConfigBox>
          <ConfigBox>
            <SingleConfiguration
              text="Cancel your subscriptions"
              action={{ text: "CANCEL", onClick: () => {}, fontWeight: "bold" }}
            />
          </ConfigBox>
        </ContentBlock>

        <ContentBlock
          title="Your Payment Information"
          action={{
            text: "Add Payment Method",
            underline: true,
            fontWeight: 400,
            fontSize: 14,
          }}
          idented
        >
          <ConfigBox>
            <Text fontWeight="bold" color={colors.black} mb={3} fontSize={18}>
              Payment Method
            </Text>
            <Text fontWeight="bold" fontSize={12} color={colors.black}>
              DEFAULT
            </Text>
            <PaymentMethods
              data={PAYMENT_METHODS}
              onDelete={() => {}}
              onUpdate={() => {}}
              onSelect={() => {}}
            />
          </ConfigBox>
        </ContentBlock>
      </Container>
    </LoginLayout>
  );
};

export { Account };
