import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { thumbStyle, trackStyle } from '@/theme/components/switch';
import { yellowColorTheme } from '@/theme/theme';

const baseStyle = defineStyle(props => {
  const { colorScheme: c } = props;
  return {
    thumb: {
      ...thumbStyle,
      _checked: {
        bg: `${c}.500`,
      },
    },
    track: {
      ...trackStyle,
      _checked: {
        bg: `${c}.500`,
      },
    },
  };
});

export const switchTheme = defineStyleConfig({
  baseStyle,
  defaultProps: yellowColorTheme,
});
