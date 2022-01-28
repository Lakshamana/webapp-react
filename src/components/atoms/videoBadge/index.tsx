import { VideoBadgeProps, defaultProps } from "./types";

import { Box, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const VideoBadge = ({ children, kind, bg='#444444' }: VideoBadgeProps) => {
  const getBadgeStyle = () => {
    switch (kind) {
      case 'social':
        return (
          <Flex w={'40px'} py={'10px'} bg={'#4d4d4d'} justifyContent={'center'}>
            {children}
          </Flex>
        )
      case 'social-end':
        return (
          <Flex w={'40px'} py={'10px'} bg={'#4d4d4d'} mt={'1px'} justifyContent={'center'} roundedBottomStart={'4px'}>
            {children}
          </Flex>
        )
      case 'live':
        return (
          <Box textAlign={'center'} px={'10px'} rounded={4} fontSize={14} bg={'#FF0000'} color={'white'} fontWeight={700}>
            {children}
          </Box>
        )
      case 'view-counter':
        return (
          <Box display="flex" justifyContent="center" alignItems="center" px={'10px'} rounded={4} fontSize={14} bg={'#444444'} color={'white'} fontWeight={500}>
            <Icon
              icon="mdi:account"
              width="16"
              height="16"
              style={{ color: '##fff' }}
            />
            {children}
          </Box>
        )
      default:
        return (
          <Box textAlign={'center'} w={'68px'} py={'7px'} rounded={4} fontSize={14} bg={bg} color={'white'} fontWeight={500}>
            {children}
          </Box>
        )
    }
  };

  return getBadgeStyle();
};

VideoBadge.defaultProps = defaultProps;

export { VideoBadge };
