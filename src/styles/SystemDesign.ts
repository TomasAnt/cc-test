import { DefaultTheme } from "styled-components";

import {
  colors,
  fontWeights,
  fontSizes,
  lineHeights,
  responsiveBreakPoints,
  spacings,
} from "./DesignVariables";

export const appTheme: DefaultTheme = {
  theme: "appTheme",
  colors: colors,
  media: responsiveBreakPoints,
  fontSizes: fontSizes,
  spacings: spacings,
  lineHeights: lineHeights,
  fontWeights: fontWeights,
};
