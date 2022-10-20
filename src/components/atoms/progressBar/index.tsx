import { Box } from '@chakra-ui/react';
import { useThemeStore } from 'services/stores/theme';
import { colors } from 'styles';

const ProgressBar = ({ value }) => {
  const { colorMode } = useThemeStore()

  return (
    <Box
      h={2}
      w={'100%'}
      bg={colors.secondaryText[colorMode]}
    >
      <Box
        h={2}
        w={value}
        bg={colors.brand.indicator[colorMode]}
      />
    </Box>
  );
};

export { ProgressBar };
