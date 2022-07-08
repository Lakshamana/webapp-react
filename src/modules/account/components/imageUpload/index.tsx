import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
  useDisclosure
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import { useThemeStore } from 'services/stores';
import { colors } from 'styles';
import { getCroppedImg } from './canvasUtils';
import { Container } from './styles';

export const ImageUpload = () => {
  const [imageSrc, setImageSrc] = useState<any>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useThemeStore()
  const [showTooltipZoom, setShowTooltipZoom] = useState(false)
  const [showTooltipRotation, setShowTooltipRotation] = useState(false)
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file)
      setImageSrc(imageDataUrl)
    }
  }

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      )
      console.log({ croppedImage })
    } catch (e) {
      console.error(e)
    }
  }, [imageSrc, croppedAreaPixels, rotation])

  return (
    <>
      <Button onClick={onOpen} variant='link' _focus={{ outline: 'none'}}>
        <Icon fontSize='24px' icon='eva:edit-outline' color='white'/>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}  isCentered>
        <ModalOverlay />
        <ModalContent
          color={colors.generalText[colorMode]}
          background={colors.cardBg[colorMode]}
        >
          <ModalHeader
            textColor={colors.generalText[colorMode]}
            fontSize={'1.5rem'}
            textAlign={'center'}
            fontWeight={500}
          >
            Edit Image
          </ModalHeader>
          <ModalBody>
            <Container>
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                rotation={rotation}
                aspect={1}
                onCropChange={onCropChange}
                onZoomChange={onZoomChange}
                onCropComplete={onCropComplete}
                objectFit="contain"
              />
            </Container>
          </ModalBody>

          <ModalFooter>
            <Flex flexDirection='column' w="100%" gridGap='1em'>
              <input type="file" onChange={onFileChange} accept="image/*"/>

              <Flex flexDirection='column' gridGap='1em'>
                <Text>Zoom: {zoomPercent(zoom)}</Text>
                <Slider
                  defaultValue={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(zoom) => setZoom(zoom)}
                  onMouseEnter={() => setShowTooltipZoom(true)}
                  onMouseLeave={() => setShowTooltipZoom(false)}
                >
                  <Tooltip
                    hasArrow
                    color='white'
                    placement='top'
                    isOpen={showTooltipZoom}
                    label={zoomPercent(zoom)}
                  >
                    <SliderThumb />
                  </Tooltip>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Flex>

              <Flex flexDirection='column' gridGap='1em'>
                <Text>Rotation: {rotation + '°'}</Text>
                <Slider
                  defaultValue={rotation}
                  min={0}
                  max={360}
                  value={rotation}
                  onChange={(rotation) => setRotation(rotation)}
                  onMouseEnter={() => setShowTooltipRotation(true)}
                  onMouseLeave={() => setShowTooltipRotation(false)}
                >
                  <Tooltip
                    hasArrow
                    color='white'
                    placement='top'
                    isOpen={showTooltipRotation}
                    label={rotation + '°'}
                  >
                    <SliderThumb />
                  </Tooltip>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Flex>

              <Flex>
                <Button colorScheme='red' mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button colorScheme='blue' onClick={showCroppedImage}>Crop Image</Button>
              </Flex>

            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const zoomPercent = (value) => {
  return `${Math.round(value * 100)}%`;
};

const readFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}