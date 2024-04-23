export const colors = {
  inputColor: "#828282",
  paragraphColor: "#5C5C5C",
  dividers: "#FAFAFA",
  background: "#fff",
  textWithBackround: "#fff",
  lightGrey: "#F5F5F5",
  darkGrey: "#333",
  border: "#E0E0E0",
  greenButton: "#009900",
  greenButtonHover: "#007E00",
  redButton: "#DC624E",
  redButtonHover: "#CC513D",
  blueButton: "#4C7DDE",
  blueButtonHover: "#3266CA",
  borderFocus: "#3362ab",
};

export type AppColorsType = typeof colors;

export const responsiveBreakPoints = {
  maxSmallPhone: "(max-width: 380px)",
  maxPhone: "(max-width: 480px)",
  maxTablet: "(max-width: 768px)",
  maxSmallDesktop: "(max-width: 992px)",
  maxDefaultDesktop: "(max-width: 1200px)",
  maxMediumDesktop: "(max-width: 1440px)",
};

export type AppBreakpointsType = typeof responsiveBreakPoints;

export const fontSizes = {
  h3: "24px",
  h4: "18px",
  paragraph: "12px",
  input: "14px",
};

export type AppFSType = typeof fontSizes;

export const lineHeights = {
  h3: "32px",
  h4: "24px",
  paragraph: "16px",
  input: "20px",
};

export type AppLineHeightsType = typeof lineHeights;

export const spacings = {
  s8: "8px",
  s12: "12px",
  s14: "14px",
  s16: "16px",
  s24: "24px",
  s32: "32px",
};

export type AppSpacingType = typeof spacings;

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

export type AppFontWeightType = typeof fontWeights;
