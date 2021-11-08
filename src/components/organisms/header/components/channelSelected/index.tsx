import { Icon } from "@iconify/react-with-api";
import { useTranslation } from "react-i18next";
import { Container, Text } from "components";
import { PropsChannelSelected } from "../../types";
import { ChannelIcon, IconContainer } from "./styles";
import { colors } from "styles";

const ChannelSelected = ({ selected, open }: PropsChannelSelected) => {
  const { t } = useTranslation();
  return (
    <Container alignItems="center">
      <Container alignItems="flex-start" flexDirection="column" mr={2}>
        <Text lineHeight={1} fontSize={14} color={colors.white}>
          {t("header.channel_selected.select")}
        </Text>
        <Text lineHeight={1} fontSize={14} color={colors.white}>
          {t("header.channel_selected.channel")}
        </Text>
      </Container>
      {selected ? (
        <Container alignItems="center">
          <ChannelIcon height={48} width={48} src={selected.url} />
        </Container>
      ) : (
        <></>
      )}
      <IconContainer {...{ open }}>
        <Icon width={24} height={24} icon="mdi:chevron-down" color="white" />
      </IconContainer>
    </Container>
  );
};

export { ChannelSelected };
