import { useState } from "react";
import { Container, MainLayout } from "components";
import { useThemeStore } from "services/stores/theme";

import { Box, Grid } from "@chakra-ui/react"
import { Flex, Center  } from '@chakra-ui/react'


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
    <MainLayout>
      <Grid templateColumns='auto auto' templateRows={{ base: '81vh auto', lg: 'auto auto'}} templateAreas={["video chat","title title"]}>
        <Flex  area='video' bg='black'>
          <Center w='100%'>            
            {initialLivestream && initialLivestream?.src && (
              <VideoPlayer {...{ ...initialLivestream }} skin={"facebook-skin"} />
            )}
          </Center>
        </Flex >
        <Box area='chat' style={{
          // maxHeight: '70vh'
        }}>
          <Livechat
            dataChat={optionsState}
            onChangeChat={(e) => setOptionsState(e)}
            title="Livechat"
          />
        </Box>
        <Box area='title'>
          <Text fontWeight={700} fontSize={36} {...colorLayout}>
            Quasar Supabase - 01 Configurando projeto
          </Text>
          <Text fontWeight={300} fontSize={16} {...colorLayout}>
            Neste vídeo mostro uma estratégia interessante para padronizar as cores e estilos dos inputs da aplicação em um único arquivo. Excelente para utilizar em grandes projetos e dar mais escalabilidade e personalização à eles.
          </Text>
        </Box>
      </Grid  >
    </MainLayout>
  );
};

export { LiveChat };
