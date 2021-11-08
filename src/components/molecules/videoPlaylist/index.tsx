import { useState } from 'react'
import { Flex, Text } from '@chakra-ui/react';
import { List } from './style'
import { VideoPlaylistProps } from "./types";
import { ToggleButton } from '../../atoms';
import { PlaylistPostCard } from "../playlistPostCard";
import { theme } from "styles/theme"

const VideoPlaylist = ({ title, videos, autoplay }: VideoPlaylistProps) => {
  const [checked, setChecked] = useState(!!autoplay)

  return (
    <List>
      <Flex mb={theme.pxToRem(12)}>
        <Text fontSize={theme.pxToRem(22)} isTruncated fontWeight={500}>
          {title}
        </Text>
      </Flex>
      <Flex alignItems="center">
        <ToggleButton isChecked={checked} onChange={() => setChecked(!checked)} />
        <Text ml={theme.pxToRem(12)}>
          Autoplay next video
        </Text>
      </Flex>
      <PlaylistPostCard videos={videos} />
    </List>
  )
}

export { VideoPlaylist };
