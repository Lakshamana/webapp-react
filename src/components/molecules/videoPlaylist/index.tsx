import { useState } from 'react'
import { Flex, Text } from '@chakra-ui/react';
import { List } from './style'
import { VideoPlaylistProps } from "./types";
import { ToggleButton } from '../../atoms';
import { PlaylistPostCard } from "../playlistPostCard";

const VideoPlaylist = ({ title, videos, autoplay }: VideoPlaylistProps) => {
  const [checked, setChecked] = useState(!!autoplay)

  return (
    <List>
      <Flex mb="12px">
        <Text fontSize="22px" isTruncated fontWeight={500}>
          {title}
        </Text>
      </Flex>
      <Flex alignItems="center">
        <ToggleButton isChecked={checked} onChange={() => setChecked(!checked)} />
        <Text ml="12px">Autoplay next video</Text>
      </Flex>
      <PlaylistPostCard videos={videos} />
    </List>
  )
}

export { VideoPlaylist };
