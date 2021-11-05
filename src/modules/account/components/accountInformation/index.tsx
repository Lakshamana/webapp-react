import { Container, Text } from "components";

import { colors } from "styles";
import { AccountInformationProps, Information } from "./types";
import { ActionLink, TextWrapper, Label } from "../../styles";

const AccountInformation = ({ data }: AccountInformationProps) => {
  if (!data?.length) return <></>;

  return (
    <>
      {data.map((item: Information) => (
        <Container justifyContent="space-between" alignItems="center">
          <TextWrapper minWidth={["100px"]}>
            <Text
              ellipsis
              color={colors.grey["650"]}
              style={{ lineHeight: "2.5rem" }}
            >
              <Label fontWeight="bold">{item.label}: </Label>
              {`${item.format ? item.format(item.value) : item.value}`}
            </Text>
          </TextWrapper>
          <ActionLink
            color={colors.blue["300"]}
            fontWeight={700}
            fontSize={12}
            onClick={item?.onClick ? item.onClick : () => {}}
          >
            UPDATE
          </ActionLink>
        </Container>
      ))}
    </>
  );
};

export { AccountInformation };
