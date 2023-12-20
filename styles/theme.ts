import { StyleFunctionProps, extendTheme, keyframes } from '@chakra-ui/react';
import {
  buttonTheme,
  dividerTheme,
  inputTheme,
  modalTheme,
  numberInputTheme,
  // radioTheme,
  // switchTheme,
} from './components';
import { boxTheme } from './components/box';
import { popoverTheme } from './components/popover';
import { switchTheme } from './components/switch';
import { tabsTheme } from './components/tabs';
import { radioTheme } from './components/radio';
import { tooltipTheme } from './components/tooltip';
import { themeColors, bodyStyle, bodyFont } from '@/theme/theme';

const gradient = keyframes({
  '0%': {
    backgroundPosition: '0% 0%',
  },
  '50%': {
    backgroundPosition: '30% 40%',
  },
  '100%': {
    backgroundPosition: '0% 0%',
  },
});
const config = {
  initialColorMode: 'dark',
};

export const colors = themeColors;

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      ...bodyStyle,
      animation: `${gradient} 10s ease infinite`,
    },
  }),
};
const components = {
  Modal: modalTheme,
  Button: buttonTheme,
  Switch: switchTheme,
  Input: inputTheme,
  NumberInput: numberInputTheme,
  Radio: radioTheme,
  Tabs: tabsTheme,
  Divider: dividerTheme,
  Box: boxTheme,
  Popover: popoverTheme,
  Tooltip: tooltipTheme,
};
const theme = extendTheme({
  config,
  styles,
  colors,
  fonts: bodyFont,
  components,
});

export default theme;
