import { Colors, getDefaultThemeColors } from '../raw/colors';
import { getContext } from '../raw/context';
import { ThemeConfig } from '../raw/theme-config';
import { anchor } from './anchor';
import { primaryButton, secondaryButton } from './buttons';
import checkbox from './checkbox';
import { panel } from './panels';
import radiobutton from './radiobutton';
import { toggles } from './toggles';

export interface Theme {
  panel: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  toggles: {
    label: string;
    input: string;
    slider: string;
    sliderChecked: string;
  };
  checkbox: {
    checked: string;
    unchecked: string;
    label: string;
  };
  anchor: string;
  radiobutton: {
    selected: string;
    unselected: string;
    label: string;
  };
}

const defaultConfig: ThemeConfig = {
  basePx: 16,
  colors: getDefaultThemeColors(),
};

export function getTheme(config?: ThemeConfig): Theme {
  const realConfig = Object.assign({}, defaultConfig, config);
  const context = getContext(realConfig);
  return {
    panel: panel(context),
    buttons: {
      primary: primaryButton(context),
      secondary: secondaryButton(context),
    },
    toggles: {
      label: toggles.label(context),
      input: toggles.input(context),
      slider: toggles.slider(context),
      sliderChecked: toggles.sliderChecked(context),
    },
    checkbox: {
      checked: checkbox.checked(context),
      unchecked: checkbox.unchecked(context),
      label: checkbox.label(context),
    },
    radiobutton: {
      selected: radiobutton.selected(context),
      unselected: radiobutton.unselected(context),
      label: radiobutton.label(context),
    },
    anchor: anchor(context),
  };
}
