import React from "react";

import { BoxWrapper, Title } from "./styles";
import { Props, defaultProps } from "./types";

const HeaderModal = ({ title }: Props): any => {
  return (
    <BoxWrapper>
      <Title fontSize={["24px", "32px"]}>{title}</Title>
    </BoxWrapper>
  );
};

HeaderModal.defaultProps = defaultProps;

export { HeaderModal };
