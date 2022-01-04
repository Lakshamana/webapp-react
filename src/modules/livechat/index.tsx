import { useState } from "react";
import { MainLayout } from "components";
import { Box, Flex } from "@chakra-ui/react"
import { useThemeStore } from "services/stores/theme";

import { VideoPlayer } from "components/molecules";
import { Text, VideoBadge } from "components/atoms";
import { Bar, BoxCustom } from "./style";
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
    <MainLayout py={0}>
      <Box display="flex" flexDirection={'column'}>
        <Box display="flex" flexDirection={{ ssm: 'column', lg: 'row' }} position={'relative'}>
          <Flex position={'absolute'} zIndex={100} w={'146px'} mt={'16px'} ml={'16px'} justifyContent="space-between">
            <VideoBadge kind={'live'}>LIVE</VideoBadge>
            <VideoBadge>999k</VideoBadge>
          </Flex>
          <Box w={'100%'} my={{ ssm: '2', md: '0' }} h={{ ssm: '300px', lg: '70vh', xl: '80vh' }}>
            {initialLivestream && initialLivestream?.src && (
              <VideoPlayer {...{ ...initialLivestream }} skin={"facebook-skin"} />
            )}
          </Box>
          <Box w={{ ssm: '100%', lg: '50%', xl: '30%' }} h={{ ssm: '60vh', lg: '70vh', xl: '80vh' }}>
            <Livechat
              dataChat={optionsState}
              onChangeChat={(e) => setOptionsState(e)}
              title="Live chat"
            />
          </Box>
        </Box>
        <BoxCustom px={{ ssm: '4', lg: '150px',xl: '300px' }} py={'2em'} m='0'>
          <Text fontWeight={700} fontSize={36} {...colorLayout}>
            Title lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt 
          </Text>
          <Text fontWeight={300} fontSize={16} {...colorLayout}>
            Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.
          </Text>
          <Bar/>
        </BoxCustom >
      </Box>
    </MainLayout >
  );
};

export { LiveChat };
