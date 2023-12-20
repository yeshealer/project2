import { popoverBaseTheme } from '@/theme/components/popover';
import { popoverAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle(props => {
  const { colorScheme: c } = props;

  return popoverBaseTheme;
});

export const popoverTheme = defineMultiStyleConfig({
  baseStyle,
});
