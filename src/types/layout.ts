import { ViewStyle } from "react-native";

// WhiteSpace props
export type WhiteSpaceSizeProps =
  | "0"
  | "2"
  | "4"
  | "6"
  | "8"
  | "10"
  | "12"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "48"
  | "56"
  | "64"
  | "72"
  | "80"
  | "88"
  | "96";

export type WhiteSpaceProps = {
  size: WhiteSpaceSizeProps;
  style?: ViewStyle;
};
