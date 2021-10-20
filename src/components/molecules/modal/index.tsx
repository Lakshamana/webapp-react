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
      pb={["400px", "150px", "300px"]}
    >
      <ModalMain
        width={["60%", "50%", "60%"]}
        height={["300px", "200px", "400px"]}
      >
        <HeaderModal title={title} />
        <BodyModal>{children}</BodyModal>
      </ModalMain>
    </BackgroundModal>
  );
};

export { Modal };
