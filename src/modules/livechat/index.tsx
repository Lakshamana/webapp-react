import { useState } from "react";
import { MainLayout } from "components";
import { useThemeStore } from "services/stores/theme";

import { Box } from "@chakra-ui/react"


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
      <Box display="flex" flexDirection={'column'}>
        <Box display="flex" flexDirection={{ ssm: 'column', lg: 'row' }} position={'relative'}>
          <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
            padding: 20,
            zIndex: 100,
          }}>Ao Vivo</div>
          <Box w={'100%'} my={{ ssm: '2', md: '0' }} h={{ ssm: '300px', lg: '70vh', xl: '80vh' }}>
            {initialLivestream && initialLivestream?.src && (
              <VideoPlayer {...{ ...initialLivestream }} skin={"facebook-skin"} />
            )}
          </Box>
          <Box w={{ ssm: '100%', lg: '50%', xl: '30%' }} h={{ ssm: '60vh', lg: '70vh', xl: '80vh' }}>
            <Livechat
              dataChat={optionsState}
              onChangeChat={(e) => setOptionsState(e)}
              title="Livechat"
            />
          </Box>
        </Box>
        <Box px={{ ssm: '4', xl: '12' }} mt={10}>
          <Text fontWeight={700} fontSize={36} {...colorLayout}>
            Quasar Supabase - 01 Configurando projeto
          </Text>
          <Text fontWeight={300} fontSize={16} {...colorLayout}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </Box >
      </Box>
    </MainLayout >
  );
};

export { LiveChat };
