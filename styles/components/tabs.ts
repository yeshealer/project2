import { tabsAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
} from '@chakra-ui/styled-system';
import { enClosedTabListTheme, enClosedTabTheme, enClosedTabPanelTheme, customLineTabTheme, customLineTabListTheme } from '@/theme/components/tabs';
import { pinkColorTheme } from '@/theme/theme';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const customEnclosedVariant = definePartsStyle(props => {
  const { colorScheme: c } = props;

  return {
    tab: {
      ...enClosedTabTheme,
      _hover: {
        borderTopColor: `${c}.400`,
        borderLeftColor: `${c}.400`,
        borderRightColor: `${c}.400`,
        color: `${c}.400`,
      },
      _selected: {
        borderColor: `${c}.500`,
        color: `${c}.500`,
      },
    },
    tablist: enClosedTabListTheme,
    tabpanel: enClosedTabPanelTheme,
  };
});

const customLineVariant = definePartsStyle(props => {
  const { colorScheme: c } = props;

  return {
    tab: {
      ...customLineTabTheme,
      _hover: {
        color: `${c}.400`,
      },
      _selected: {
        color: `${c}.500`,
      },
    },
    tablist: customLineTabListTheme,
    tabpanel: {},
  };
});

export const tabsTheme = defineMultiStyleConfig({
  variants: {
    enclosed: customEnclosedVariant,
    line: customLineVariant,
  },
  defaultProps: pinkColorTheme as tabDefaultProps,
});
