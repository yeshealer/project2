import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { customVariantTheme, defaultPropsStyle } from '@/theme/components/divider';

const customVariant = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    ...customVariantTheme,
    borderColor: `${c}.900`,
  };
});

export const dividerTheme = defineStyleConfig({
  variants: {
    thick: customVariant,
  },
  defaultProps: defaultPropsStyle as dividerDefaultProps,
});
