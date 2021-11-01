import { Container, MainLayout } from "components";
import { Breadcrumb } from "components/atoms";

import { useTranslation } from "react-i18next";
import { Input, Modal, VideoRelated } from "components/molecules";

import i18next from "i18next";
import { dataVideoRelated } from "./mock";

const LiveChat = () => {
  const { t } = useTranslation();
  return (
    <MainLayout>
      <Container flexDirection="column" width={["100%"]} minHeight={["100vh"]}>
        {dataVideoRelated.map((e) => (
          <VideoRelated title={e.title} description={e.description} />
        ))}
      </Container>
    </MainLayout>
  );
};

export { LiveChat };
