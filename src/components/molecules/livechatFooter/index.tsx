import { useState } from "react";
import {
  LivechatFooterMain,
  IconContainer,
  InputContainer,
  AnimatedIcon,
  PopoverIcon,
  Reaction,
} from "./style";
import { colors } from 'styles'
import { Props } from "./types";
import { Input } from "components/molecules";
import { availableReactions } from "./settings";
import { useThemeStore } from "services/stores/theme";

const LivechatFooter = ({
  onPressIcon = () => { },
  value = "",
  onChange = () => { },
  onEnter = () => { },
}: Props) => {
  const [show, setShow] = useState(false);
  const { colorMode } = useThemeStore()

  const colorLayout = {
    color: colors.generalText[colorMode]
  }

  return (
    <LivechatFooterMain {...{ colorMode }}>
      <IconContainer flex={2} justifyContent="center">
        <AnimatedIcon
          width={32}
          icon="majesticons:emoji-happy-line"
          style={{ cursor: "pointer" }}
          {...colorLayout}
          onClick={() => {
            setShow(!show);
            onPressIcon();
          }}
        />
        {show && (
          <PopoverIcon gridTemplateColumns="1fr 1fr 1fr">
            {availableReactions.map((reaction) => (
              <Reaction key={`${reaction.value}-popover`} p={1} m={1}>
                {reaction.value}
              </Reaction>
            ))}
          </PopoverIcon>
        )}
      </IconContainer>
      <InputContainer flex={8} justifyContent="center">
        <Input
          value={value}
          onChange={onChange}
          inverted
          rightIcon="send"
          onEnterPress={() => onEnter()}
        />
      </InputContainer>
    </LivechatFooterMain>
  );
};

export { LivechatFooter };