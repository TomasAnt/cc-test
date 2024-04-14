import "styled-components";
import {
  AppColorsType,
  AppBreakpointsType,
  AppFontWeightType,
  AppLineHeightsType,
  AppFSType,
  AppSpacingType,
} from "./DesignVariables";

declare module "styled-components" {
  export interface DefaultTheme {
    theme: "appTheme";
    colors: AppColorsType;
    media: AppBreakpointsType;
    fontWeights: AppFontWeightType;
    fontSizes: AppFSType;
    lineHeights: AppLineHeightsType;
    spacings: AppSpacingType;
  }
}
