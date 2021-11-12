import React, { useMemo } from "react";
import { Main } from "./style";

import { Icon } from "@iconify/react";
import { Props, defaultProps } from "./types";

const objWithImage: any = {
  small: 38,
  medium: 46,
  large: 52,
};
const objImage: any = {
  small: 12,
  medium: 16,
  large: 20,
};

const Avatar = ({
  size = "large",
  icon = "bx:bx-user",
  colorIcon = "#000",
  backgroundAvatar = "#e1e1e1",
}: Props) => {
  const getSizeImage = (): any => {
    if (icon === "") return objImage[size];
    return objWithImage[size];
  };

  const getSize = (): any => {
    return objWithImage[size];
  };

  const dimensionsProps = useMemo(
    () => ({
      height: getSize(),
      width: getSize(),
      sizeImage: getSizeImage(),
    }),
    // eslint-disable-next-line
    [size]
  );

  return (
    <Main
      width={dimensionsProps.width}
      height={dimensionsProps.height}
      background={backgroundAvatar}
    >
      <Icon
        icon={icon === "" ? "bx:bx-user" : icon}
        width={dimensionsProps.sizeImage - 24}
        height={dimensionsProps.sizeImage}
        color={colorIcon}
      />
    </Main>
  );
};

Avatar.defaultProps = defaultProps;

export { Avatar };