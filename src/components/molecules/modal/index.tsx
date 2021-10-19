import React from "react";
import { HeaderModal } from "components/atoms";

import { BackgroundModal, ModalMain, BodyModal } from "./style";
import { Props } from "./types";

const Modal = ({
  title,
  width = "40%",
  onClose = () => {},
  show = false,
  children,
}: Props) => {
  return (
    <BackgroundModal
      onClick={() => onClose()}
      style={{ display: show ? "flex" : "none" }}
    >
      <ModalMain width={width}>
        <HeaderModal title={title} />
        <BodyModal>{children}</BodyModal>
      </ModalMain>
    </BackgroundModal>
  );
};

export { Modal };
