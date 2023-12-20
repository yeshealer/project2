import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import {
  baseInputFieldStyle,
  customVariantInputFieldStyle,
  defaultPropsStyle,
  outlineNumberRounedInputField,
  xlStyle
} from '@/theme/components/input';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle(props => {
  const { colorScheme: c } = props;

  return {
    field: {
      ...baseInputFieldStyle,
      _focusVisible: {
        color: `${c}.500`,
      },
    },
  };
});

const customVariant = defineStyle({
  field: customVariantInputFieldStyle,
});

const outlineNumberRounded = defineStyle({
  field: outlineNumberRounedInputField,
});

const xl = defineStyle(xlStyle);

const sizes = {
  xl: definePartsStyle({ field: xl, addon: xl }),
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: {
    primary: customVariant,
  },
  defaultProps: defaultPropsStyle as inputDefaultProps,
});

export const numberInputTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    primary: customVariant,
    outline: outlineNumberRounded,
  },
  defaultProps: defaultPropsStyle as inputDefaultProps,
});
