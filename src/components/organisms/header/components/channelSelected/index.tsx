import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { Container, Text } from "components";
import { PropsChannelSelected } from "../../types";
import { colors } from "styles";
import { ChannelIcon, IconContainer, TextContainer } from "./styles";

const ChannelSelected = ({
  selected,
  open,
  colorMode,
}: PropsChannelSelected) => {
  const { t } = useTranslation();
  return (
    <Container alignItems="center">
      <TextContainer alignItems="flex-start" flexDirection="column" mr={2}>
        <Text
          lineHeight={1}
          fontSize={14}
          color={colors.secondaryText[colorMode]}
        >
          {t("header.channel_selected.select")}
        </Text>
        <Text
          lineHeight={1}
          fontSize={14}
          color={colors.secondaryText[colorMode]}
        >
          {t("header.channel_selected.channel")}
        </Text>
      </TextContainer>
      {selected ? (
        <Container alignItems="center">
          <ChannelIcon height={48} width={48} src={selected.url} />
        </Container>
      ) : (
        <></>
      )}
      <IconContainer {...{ open }}>
        <Icon
          width={24}
          height={24}
          icon="mdi:chevron-down"
          color={colors.secondaryText[colorMode]}
        />
      </IconContainer>
    </Container>
  );
};

export { ChannelSelected };
