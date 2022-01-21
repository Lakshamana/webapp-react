import { Center, Button } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CookieConsent } from "components/organisms/cookieConsent";
import { useThemeStore } from "services/stores/theme";

export default {
  title: "WEBAPP/Cookie Consent",
  component: CookieConsent,
} as ComponentMeta<typeof CookieConsent>;

const Template: ComponentStory<typeof CookieConsent> = (args) => {
  const { colorMode, toggleColorMode } = useThemeStore()

  return (
    <Center 
      width="600px" 
      bgColor={colorMode !== 'dark' ? 'white' : 'black'} 
      flexDir="column"
      padding={12}
    >
      <Center my="20px">
        <Button onClick={toggleColorMode}>
          Toggle colorMode
        </Button>
      </Center>

      <CookieConsent {...args}>
        {(onOpen) =>
          <Button onClick={onOpen}>
            Open cookie consent drawer
          </Button>
        }
      </CookieConsent>
    </Center>
  )
}

export const Component = Template.bind({});
Component.args = {
  domain: 'Fanhero.com'
};
