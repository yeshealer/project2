import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import {
  buttonbaseStyle,
  customButtonStyle,
  filledButtonStyle,
  filledVariantSecondaryStyle,
  outlineVariantStyle,
  outlineSelectedTheme
} from '@/theme/components/button';
import { primaryVariant } from '@/theme/theme';

const baseStyle = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    ...buttonbaseStyle,
    color: `${c}.800`,
    borderColor: `${c}.500`,
  };
});

// Defining a custom variant
const customVariant = defineStyle(customButtonStyle);

const filledVariant = defineStyle(filledButtonStyle);

const filledVariantSecondary = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    ...filledVariantSecondaryStyle,
    bg: `${c}.500`,
  };
});

const outlineVariant = defineStyle(props => {
  const { colorScheme: c } = props;
  const outlineVarianttheme = outlineVariantStyle(c)
  return outlineVarianttheme
});

const outlineSelectedVariant = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    ...outlineSelectedTheme,
    color: `${c}.500`,
    borderColor: `${c}.500`,
  };
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants: {
    primary: customVariant,
    secondary: filledVariant,
    outline: outlineVariant,
    outlineSelected: outlineSelectedVariant,
    filled: filledVariantSecondary,
  },
  defaultProps: primaryVariant,
});
