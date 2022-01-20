import { Avatar } from "components/atoms";
import {
  HeaderMain,
  AvatarContainer,
  TextContainer,
  DotsContainer,
  Text,
} from "./style";
import { colors } from 'styles'
import { Props } from "./types";
import { Icon } from "@iconify/react";
import { useThemeStore } from "services/stores/theme";

const LivechatHeader = ({ title = "", onCloseChat = () => { } }: Props) => {
  const { colorMode } = useThemeStore()

  const colorLayout = {
    color: colors.generalText[colorMode]
  }

  return (
    <HeaderMain height={"81px"} width={"100%"} display="flex" {...{ colorMode }}>
      <AvatarContainer flex={3} width={"100%"}>
        <Avatar src="" colorScheme="#000" />
      </AvatarContainer>
      <TextContainer flex={10}>
        <Text fontSize={24} fontWeight={500} {...colorLayout}>
          {title}
        </Text>
      </TextContainer>
      <DotsContainer flex={2}>
        <Icon
          width={36}
          icon="ci:close-big"
          style={{ cursor: "pointer" }}
          {...colorLayout}
          onClick={() => onCloseChat()}
        />
      </DotsContainer>
    </HeaderMain>
  )
}

export { LivechatHeader };
