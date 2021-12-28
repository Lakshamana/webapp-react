import { SimpleGrid, Flex } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from "@iconify/react";

import { VideoBadge } from 'components';

export default {
  title: 'WEBAPP/VideoBadge',
  component: VideoBadge,
} as ComponentMeta<typeof VideoBadge>;

const Template: ComponentStory<typeof VideoBadge> = (args) => (
  <SimpleGrid columns={2} spacing={12}>
    <div>
      <SimpleGrid columns={2} spacing={'10px'}>
        <VideoBadge kind='live'>LIVE</VideoBadge>
        <VideoBadge>999k</VideoBadge>
      </SimpleGrid>
    </div>
    <Flex direction={'column'}>
      <VideoBadge kind={'social'}>
        <Icon icon="bx:bxl-telegram" color="white" width="21" height="24" />
      </VideoBadge>
      <VideoBadge kind={'social-end'}>
        <Icon icon="bx:bxs-share-alt" color="white" width="21" height="24" />
      </VideoBadge>
    </Flex>
  </SimpleGrid>
);

export const Component = Template.bind({});
Component.args = {
  children: 'LIVE',
  kind: 'live',
};