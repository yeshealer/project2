import { radioAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
} from '@chakra-ui/styled-system';
import { radioControlTheme, radioLabelTheme } from '@/theme/components/radio';
import { yellowColorTheme } from '@/theme/theme';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle(props => {
  const { colorScheme: c } = props;

  return {
    control: {
      ...radioControlTheme,
      _checked: {
        bg: `${c}.500`,
        borderColor: `${c}.500`,
        color: `${c}.500`,
      },
    },
    label: {
      ...radioLabelTheme,
      _checked: {
        color: `${c}.500`,
      },
    },
  };
});

export const radioTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: yellowColorTheme,
});
