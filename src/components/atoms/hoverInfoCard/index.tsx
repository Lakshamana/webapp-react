import { useTranslation } from "react-i18next";
import { useThemeStore } from "services/stores";
import { Flex, Box } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { colors } from 'styles'

import { HoverInfoCardProps } from "./types";
import { Title } from "./style"

const HoverInfoCard = ({ ...props }: HoverInfoCardProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore();

  return (
    <>
      <Icon
				className='addMyListIcon'
				icon="bi:plus-circle-fill"
				width="25"
				height="25"
				color={colors.grey['800']}
				style={{ position: "absolute", zIndex: 3, right: 3, top: 3, display: 'none' }}
			/>
      <Box
        className="addMyListIconBg"
        width="15px" 
        height="15px" 
        bgColor={colors.brand.primary.dark} 
        position="absolute" 
        top="8px"
        right="8px"
        display="none"
      />

			<Flex flex={1} display={'none'} className="infoCard" bgColor="black">
				<Title color={colors.generalText[colorMode]}>
          {props.postTitle}
				</Title>
				<Flex 
					color={colors.generalText[colorMode]}
					display="inline-block" 
					fontSize="0.7rem" 
					padding="23px 12px" 
					width="100%"
				>
          {props.views && (
            <Flex
              justifyContent="flex-end"
              alignItems="flex-end"
              height="100%"
            >
              {`${props.views} ${t('page.home.cardInfoViews')}`}
            </Flex>
          )}
				</Flex>
			</Flex>
    </>
  )
}

export { HoverInfoCard }