import { useState } from "react";
import { Container, MainLayout } from "components";
import { useThemeStore } from "services/stores/theme";

import { VideoPlayer } from "components/molecules";
import { Text } from "components/atoms";
import { Bar } from "./style";
import { colors } from 'styles'

import { options, initialLivestream } from "./mock";
import { Livechat } from "components/molecules/livechat";

const LiveChat = () => {
  const [optionsState, setOptionsState] = useState(options);
  const { colorMode } = useThemeStore()

  const colorLayout = {
    color: colors.generalText[colorMode]
  }

  return (
    <MainLayout flexDirection="column">
      <Container flexDirection={["column", "column", "row"]} width={["100%"]}>
        <Container flex={5}>
          {initialLivestream && initialLivestream?.src && (
            <VideoPlayer {...{ ...initialLivestream }} skin={"facebook-skin"} />
          )}
        </Container>
        <Container flex={2} alignSelf={'stretch'}>
          <Livechat
            dataChat={optionsState}
            onChangeChat={(e) => setOptionsState(e)}
            title="Livechat"
          />
        </Container>
      </Container>
      <Container alignSelf={["left", "center"]} flexDirection={["column"]} mt={32} mx={64} mb={32}>
        <Text fontWeight={700} fontSize={36} {...colorLayout}>
          Quasar Supabase - 01 Configurando projeto
        </Text>
        <Text fontWeight={300} fontSize={16} {...colorLayout}>
          Neste vídeo mostro uma estratégia interessante para padronizar as cores e estilos dos inputs da aplicação em um único arquivo. Excelente para utilizar em grandes projetos e dar mais escalabilidade e personalização à eles.
        </Text>
      </Container>
      <Bar />
    </MainLayout >
  );
};

export { LiveChat };
