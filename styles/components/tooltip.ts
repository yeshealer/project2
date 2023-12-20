import { defaultProps, tooltipcustomVariantTheme } from '@/theme/components/tooltip';
import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

// Defining a custom variant
const customVariant = defineStyle(tooltipcustomVariantTheme);

export const tooltipTheme = defineStyleConfig({
  defaultProps: defaultProps,
  variants: {
    primary: customVariant,
  },
});
