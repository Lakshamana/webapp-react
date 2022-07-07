import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor'
import { useThemeStore } from 'services/stores';

export const ImageUpload = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useThemeStore()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='full' isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Escolha a imagem</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ImageEditor
              includeUI={{
                loadImage: {
                  path: 'img/sampleImage.jpg',
                  name: 'SampleImage',
                },
                // theme: myTheme,
                menu: [
                  'crop',
                  'flip',
                  'rotate',
                  'draw',
                  'shape',
                  'icon',
                  'text',
                  'mask',
                  'filter',
                ],
                initMenu: 'crop',
                uiSize: {
                  width: '100%',
                  height: '80vh',
                },
                menuBarPosition: 'bottom',
              }}
              cssMaxHeight={500}
              cssMaxWidth={700}
              selectionStyle={{
                cornerSize: 20,
                rotatingPointOffset: 70,
              }}
              usageStatistics={true}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}