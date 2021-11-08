import { Center, Textarea, Button, Select } from '@chakra-ui/react'
import { MainLayout, Container, VideoPlayer } from "components";
import { useState } from 'react';

const PlayerPage = () => {
  const initial = {
    src: "https://d2px8cfctghvms.cloudfront.net/5ed95110e04f4c0004b37ed3/ba77504d-2687-40f4-b75f-fdadaf1828a5/cmaf/5ed95110e04f4c0004b37ed3_5ed964dce04f4c000415fecf_6116d80199bea6002c59561a.m3u8",
    vttSrc: "https://s3.amazonaws.com/ondemand-prod.destination/5ed95110e04f4c0004b37ed3/ba77504d-2687-40f4-b75f-fdadaf1828a5/thumbnails/80p.vtt",
    title: "Video Title",
    subtitle: "Video Subtitle",
    options: {
      muted: true,
    },
    overlays: [
      {
        start: 1,
        end: 15,
        content: 'AAAAAAAAA',
        align: 'left'
      }
    ],
    muxConfig: {
      env_key:  'f79842543033c226c5d396a7d',
      viewer_user_id: 'viewer_user_id',
      video_id: 'video_id',
      video_title: 'title',
      video_series: 'series',
      player_name: 'Clappr-ContentVideo',
      player_init_time: Date.now(),
      video_stream_type: 'on-demand',
    },
  }

  const [value, setValue] = useState(JSON.stringify(initial, undefined, 4))
  const [skin, setSkin] = useState('')
  const [config, setConfig] = useState<any>(initial)

  const handleInputChange = (e) => setValue(e?.target?.value)
  const handleSelectChange = (e) => {
    setSkin(e?.target?.value)

    const conf = {...config}
    setConfig(false)

    setTimeout(() => setConfig(conf), 500)
  }

  const updateConfig = (newConfig) => {
    try {
      const parsed = JSON.parse(newConfig)

      setConfig(false)

      setTimeout(() => {
        setConfig(parsed)
      }, 500)

    } catch (e) {
      alert('Error to parse config')
    }
  }

  return (
    <MainLayout>
      <Container flexDirection="column" width="100%">
        <Center flex="1" padding={5} border="0 solid red">
          <Center width={700} height={400} border="0 solid blue">
            {(config && config?.src) && (
              <VideoPlayer
                src={config?.src}
                isLiveStream={true}
                vttSrc={config?.vttSrc}
                title={config?.title}
                subtitle={config?.subtitle}
                overlays={config?.overlays}
                muxConfig={config?.muxConfig}
                options={config?.options}
                skin={skin}
              />
            )}
          </Center>
        </Center>

        <Center width="100%" padding={1}>
          <Select onChange={handleSelectChange}>
            <option value="">Default</option>
            <option value="facebook-skin">Facebook</option>
            <option value="magnified-skin">Magnified</option>
            <option value="rotten-tomatoes-skin">Rotten Tomatoes</option>
            <option value="sunrise-skin">Sunrise</option>
            <option value="techskin-skin">Techskin</option>
            <option value="twitch-tv-skin">Twitch.tv</option>
            <option value="twitter-skin">Twitter</option>
            <option value="vsg-skin">VSG</option>
            <option value="youtube-skin">Youtube</option>
          </Select>
        </Center>
        <Center width="100%" padding={1}>
          <Textarea
            rows={16}
            width="100%"
            value={value}
            onChange={handleInputChange}
            placeholder="Enter de config"
            size="sm"
          />
        </Center>

        <Center pt={3}>
          <Button onClick={() => value && updateConfig(value)}>
            Save config
          </Button>
        </Center>

      </Container>
    </MainLayout>
  )
};

export { PlayerPage }
