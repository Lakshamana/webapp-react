import { Flex, FormControl, FormLabel, Switch, Text } from "@chakra-ui/react"
import { Button } from "components"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useThemeStore } from "services/stores"
import { colors } from "styles"
import { Props } from "./types"

export const SubscriptionCard = (
  {
    checked,
    disabled,
    onChange,
    label = 'ABS Monthly Plan',
    subtitle = 'Flameng - Campeonato Carioca',
    price = '$12,99/mo',
    description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  }: Props
) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const [openDetail, setopenDetail] = useState(false)
  return (
    <Flex
      bg={colors.cardBg[colorMode]}
      color={colors.generalText[colorMode]}
      borderRadius='4px'
      maxW="558px"
      w="100%"
      h="100%"
      p={25}
      pt={33}
      flexDir='column'
    >
      <Flex
        w='100%'
        gridGap={2}
        justifyContent={[
          'flex-start',
          'flex-start',
          'flex-start',
          'space-between',
        ]}
        flexDir={[
          'column',
          'column',
          'column',
          'row'
        ]}
      >
        <Flex flexDir='column' gridGap='4px'>
          <Text fontWeight='400' fontSize='1.25rem' lineHeight='24px'>{label}</Text>
          <Text fontWeight='400' fontSize='0.875rem' lineHeight='17px'>{subtitle}</Text>
        </Flex>
        <Text fontWeight='400' fontSize='1.25rem' lineHeight='24px'>{price}</Text>
      </Flex>
      <Flex mt='33px' justifyContent='space-between' w="100%">
        <Button
          variant='unstyled'
          fontSize='0.875rem'
          fontWeight='600'
          color='#0660f9'
          _focus={{
            outline: 'none'
          }}
          disabled={openDetail}
          onClick={() => setopenDetail(!openDetail)}
          label={t('page.account.subscription_card_plan_detail')}
          w="fit-content"
        />
        <FormControl display='flex' alignItems='center' w='auto'>
          <FormLabel htmlFor='active' mb='0'>
            {checked ? 'Active' : 'Inactive'}
          </FormLabel>
          <Switch
            id='active'
            isChecked={checked}
            isDisabled={disabled}
            onChange={onChange}
          />
        </FormControl>
      </Flex>
      {
        openDetail && (
          <Flex flexDir='column' gridGap="28px" mt="40px">
            <Flex flexDir='column' gridGap="28px">
              <Text fontWeight='400' fontSize='1.25rem' lineHeight='24px'>Plan detail</Text>
              <Text>{description}</Text>
              <Text fontWeight='400' fontSize='0.875rem' lineHeight='17px'>{subtitle}</Text>
            </Flex>
            <Flex w='100%' justifyContent='center'>
              <Button
                variant='unstyled'
                fontSize='14px'
                fontWeight='600'
                _focus={{
                  outline: 'none'
                }}
                onClick={() => setopenDetail(!openDetail)}
                label={t('page.account.subscription_card_plan_detail_close')}
              />
            </Flex> 
          </Flex>
        )
      }
    </Flex>
  )
}