import {
  HeaderMain,
  Text,
} from "./style";
import { colors } from 'styles'
import { Props } from "./types";
import { useThemeStore } from "services/stores/theme";

const LivechatHeader = ({ title = "", onCloseChat = () => { } }: Props) => {
  const { colorMode } = useThemeStore()

  const colorLayout = {
    color: colors.generalText[colorMode]
  }

  return (
    <HeaderMain height="48px" width={"100%"} display="flex" {...{ colorMode }}>
        <Text fontSize={20} fontWeight={500} {...colorLayout}>
          {title}
        </Text>
    </HeaderMain>
  )
}

export { LivechatHeader };
