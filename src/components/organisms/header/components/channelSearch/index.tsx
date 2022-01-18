import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { Container, InputInline } from "components";
import { PropsChannelSearch } from "../../types";
import { SearchContainer } from "./styles";
import { colors } from "styles";

const ChannelSearch = ({ search, onChange, colorMode }: PropsChannelSearch) => {
  const { t } = useTranslation();
  return (
    <SearchContainer
      display="flex"
      justifyContent="center"
      width="95%"
      mx={2}
      py={3}
    >
      <Container width="85%">
        <InputInline
          placeholder={t("header.channel_search")}
          background={colors.channel.background[colorMode]}
          value={search}
          {...{ onChange }}
        />
      </Container>
      <Container ml={2}>
        <Icon
          width={18}
          height={18}
          icon="bx:bx-search"
          color={colors.channel.searchIcon[colorMode]}
        />
      </Container>
    </SearchContainer>
  );
};

export { ChannelSearch };
