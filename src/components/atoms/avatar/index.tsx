import React, { ReactElement, useMemo } from "react";
import { Main, Image } from "./style";

import { Props } from "./types";

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

const Avatar = ({ size = "large", src = "" }: Props): ReactElement => {
  const getSizeImage = (): any => {
    if (src === "") return objImage[size];
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
    [size]
  );

  return (
    <Main width={dimensionsProps.width} height={dimensionsProps.height}>
      <Image
        src={src === "" ? "/img/avatar.png" : src}
        width={dimensionsProps.sizeImage}
        height={dimensionsProps.sizeImage}
      />
    </Main>
  );
};

export default Avatar;
