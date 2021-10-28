import { Container, MainLayout } from "components";
import { Breadcrumb } from "components/atoms";

import { useTranslation } from "react-i18next";
import { Input, Modal } from "components/molecules";

import i18next from "i18next";

const LiveChat = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <Container flexDirection="column" width={["100%"]} minHeight={["100vh"]}>
        <Breadcrumb
          options={[
            { name: "Home", onClick: () => {}, isCurrentPage: false },
            { name: "Live Events", onClick: () => {}, isCurrentPage: false },
            { name: "Live chat", onClick: () => {}, isCurrentPage: true },
          ]}
        />
        <Input onChange={() => {}} />
        <Input onChange={() => {}} error={true} errorMessage="Invalid value." />
        <Input
          onChange={() => {}}
          rightIcon="send"
          onEnterPress={() => alert("enter")}
        />
        <Input onChange={() => {}} placeholder="Password" type="password" />
        <Input onChange={() => {}} error={true} errorMessage="Invalid value." />

        <Modal title="Modal teste" onClose={() => {}} show={false}>
          <span>modal body</span>
        </Modal>
        <span>{t("example")}</span>
        <button onClick={() => i18next.changeLanguage("en")}>
          Change language
        </button>
      </Container>
    </MainLayout>
  );
};

export { LiveChat };
