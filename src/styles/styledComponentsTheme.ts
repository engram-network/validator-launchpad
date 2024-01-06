export const colors = {
  transparent: 'transparent',
  white: '#437cf1',
  gray: {
    lightest: '#000000',
    light: '#CFEA77', // text deposit
    medium: '#000000',
    dark: '#000000',
  },
  black: '#ebe7eb',
  blue: {
    lightest: '#ebe7eb',
    light: '#CFEA77',
    medium: '#20aa5e',
    dark: '#000000',
  },
  green: {
    light: '#ebe7eb',
    medium: '#00d361',
    dark: '#00d361',
  },
  red: {
    lightest: '#ebe7eb',
    light: '#437cf1',
    medium: '#437cf1',
  },
  orange: '#ebe7eb',
  purple: {
    light: '#ebe7eb',
    medium: '#ebe7eb',
    dark: '#CFEA77',
  },
  yellow: {
    light: '#fff0a8',
    dark: '#f0ad4d',
    darkest: '#8a6d3b',
  },
};

export const details = {
  borderRadius: '3px',
};

export const rainbowColors = [
  '#ebe7eb', // light
];

export const rainbowBGColors = [
  '#ebe7eb', // green
  '#ebe7eb', // green
  '#ebe7eb', // green
];

export const rainbowLightColors = [
  '#ebe7eb', // light
];

export const rainbow = rainbowColors.join(', ');
export const rainbowLight = rainbowLightColors.join(', ');

export const screenSizes = {
  smaller: '420px',
  small: '576px',
  medium: '768px',
  large: '992px',
  larger: '1200px',
  largest: '1440px',
  huge: '1820px',
};

export const styledComponentsTheme = {
  ...colors,
  screenSizes,
  ...details,
  rainbow,
  rainbowLight,
  rainbowLightColors,
};
