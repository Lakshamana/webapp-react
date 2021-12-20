import { useState } from "react";
import { MainLayout } from "components";
import { useThemeStore } from "services/stores/theme";

import { Box, Grid } from "@chakra-ui/react"
import { Flex, Center, GridItem } from '@chakra-ui/react'


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
      <Grid w={'100%'} px={[0, 10]} templateColumns={['auto auto', '80% 20%', '70% 30%']} templateRows={['40vh auto', '50vh auto']} templateAreas={["video chat", "title title"]} justifyContent={'center'}>
        <Flex area='video' bg={'black'}>
          <Center w={'100%'}>
            {initialLivestream && initialLivestream?.src && (
              <VideoPlayer {...{ ...initialLivestream }} skin={"facebook-skin"} />
            )}
          </Center>
        </Flex >
        <Box area='chat'>
          <Livechat
            dataChat={optionsState}
            onChangeChat={(e) => setOptionsState(e)}
            title="Livechat"
          />
        </Box>
        <GridItem area='title' mt={10} colSpan={2}>
          <Text fontWeight={700} fontSize={36} {...colorLayout}>
            Quasar Supabase - 01 Configurando projeto
          </Text>
          <Text fontWeight={300} fontSize={16} {...colorLayout}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </GridItem >
      </Grid  >
    </MainLayout >
  );
};

export { LiveChat };
