import { Container, MainLayout } from "components";

import { useTranslation } from "react-i18next";
import { Input } from "components/molecules";

import i18next from "i18next";

const LiveChat = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <Container flexDirection="column" width={["100%"]} minHeight={["100vh"]}>
        <Input onChange={() => {}} />
        <Input onChange={() => {}} error={true} errorMessage="Invalid value." />
        <Input
          onChange={() => {}}
          error={false}
          sendIcon
          onEnterPress={() => alert("enter")}
        />
        <span>{t("example")}</span>
        <button onClick={() => i18next.changeLanguage("en")}>Change language</button>
      </Container>
    </MainLayout>
  );
};

export { LiveChat };
