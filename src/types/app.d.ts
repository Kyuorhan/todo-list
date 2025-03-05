declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.FunctionComponent<SvgProps>;
  export default content;
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.ttf";
