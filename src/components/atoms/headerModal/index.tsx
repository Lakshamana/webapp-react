import React from "react";

import { BoxWrapper, Title } from "./styles";

import { Props } from "./types";
import { defaultProps } from "./settings";

const HeaderModal = ({ title }: Props): any => {
  return (
    <BoxWrapper>
      <Title>{title}</Title>
    </BoxWrapper>
  );
};

HeaderModal.defaultProps = defaultProps;

export { HeaderModal };
