import { useState } from 'react'
import { Flex, Text } from '@chakra-ui/react';
import { List } from './style'
import { VideoPlaylistProps } from "./types";
import { ToggleButton } from '../../atoms';
import { PlaylistPostCard } from "../playlistPostCard";
import { theme } from "styles/theme"
import { useThemeStore } from 'services/stores/theme';

const VideoPlaylist = ({ title, videos, autoplay }: VideoPlaylistProps) => {
  const [checked, setChecked] = useState(!!autoplay)

  const { colorMode } = useThemeStore();

  return (
    <List>
      <Flex mb={theme.pxToRem(12)} paddingX={theme.pxToRem(12)}>
        <Text 
          fontSize={theme.pxToRem(22)} 
          isTruncated 
          fontWeight={500} 
          color={colorMode !== 'dark' ? 'black' : 'white'}
        >
          {title}
        </Text>
      </Flex>
      <Flex alignItems="center" paddingX={theme.pxToRem(12)}>
        <ToggleButton isChecked={checked} onChange={() => setChecked(!checked)} />
        <Text ml={theme.pxToRem(12)} color={colorMode !== 'dark' ? 'black' : 'white'}>
          Autoplay next video
        </Text>
      </Flex>
      <PlaylistPostCard videos={videos} />
    </List>
  )
}

export { VideoPlaylist };
