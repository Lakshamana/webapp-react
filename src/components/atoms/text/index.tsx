import { Props, defaultProps } from "./types";
import { HeadlineText, TitleText, SubheadingText, RegularText } from "./styles";

const Text = ({ children, kind, ...props }: Props) => {
  const getTextStyle = () => {
    switch (kind) {
      case "headline":
        return <HeadlineText {...props}>{children}</HeadlineText>;
      case "title":
        return <TitleText {...props}>{children}</TitleText>;
      case "subheading":
        return <SubheadingText {...props}>{children}</SubheadingText>;
      default:
        return <RegularText {...props}>{children}</RegularText>;
    }
  };

  return getTextStyle();
};

Text.defaultProps = defaultProps;

export { Text };
