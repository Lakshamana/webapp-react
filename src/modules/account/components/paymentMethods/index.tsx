import { Container, Radio } from "components";

import { colors } from "styles";
import { PaymentMethodsProps } from "./settings";
import { PaymentMethodType } from "../../types";
import { ActionLink, Separator } from "../../styles";

const PaymentMethods = ({
  data,
  onDelete,
  onUpdate,
  onSelect,
}: PaymentMethodsProps) => (
  <Container flexDirection="column" mt={2}>
    {data?.map((method: PaymentMethodType, index: any) => (
      <>
        <Container
          justifyContent="space-between"
          alignItems="center"
          width={1}
          flexWrap="wrap"
        >
          <Container width={2 / 3}>
            <Radio
              spacing={{ py: 2 }}
              color={colors.black}
              font={{ fontSize: 14 }}
              key={method.id}
              name="defaultPaymentMethod"
            >
              {method.type} {method.number}
            </Radio>
          </Container>
          <Container width={1 / 3} justifyContent="flex-end">
            {!!index ? (
              <ActionLink
                fontSize={12}
                fontWeight="bold"
                onClick={() => onDelete(method)}
              >
                DELETE
              </ActionLink>
            ) : (
              <></>
            )}
            <ActionLink
              fontSize={12}
              fontWeight="bold"
              onClick={() => onUpdate(method)}
              ml={2}
            >
              UPDATE
            </ActionLink>
          </Container>
          {!!index ? <></> : <Separator my={3} />}
        </Container>
      </>
    ))}
  </Container>
);

export { PaymentMethods };
