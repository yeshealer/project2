import { boxCustomVariantStyle } from '@/theme/components/box';
import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

// Defining a custom variant
const customVariant = defineStyle(boxCustomVariantStyle);

export const boxTheme = defineStyleConfig({
  variants: {
    primary: customVariant,
  },
});
