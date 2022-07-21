import { useDisclosure } from "@chakra-ui/react";

export interface ImageUploadProps {
  image: string,
  uploadImage: (image: string | null) => void,
  useDisclosureProps: ReturnType<typeof useDisclosure>
}
