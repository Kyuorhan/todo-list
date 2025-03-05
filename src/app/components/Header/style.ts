import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "theme";
import { scaleFont, scaleHeight } from "utils/scale";
const { height } = Dimensions.get("window");

const PADDING_HORIZONTAL = scaleHeight(30);
// const HEIGHT_INPUT_BTN = 56;
const HEIGHT_INPUT_BTN = scaleHeight(42);
export const ICON_SIZE = scaleFont(20);
// const HEIGHT_INPUT_BTN = height * 0.065;

const styles = StyleSheet.create({
  container: {
    height: height * 0.15,
    width: "100%",
    backgroundColor: colors.primary,
    zIndex: 999,
  },
  img: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: HEIGHT_INPUT_BTN / 2,
  },
  logo: {
    width: HEIGHT_INPUT_BTN * 2.15,
    height: HEIGHT_INPUT_BTN * 2.15,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    height: HEIGHT_INPUT_BTN,
    bottom: -HEIGHT_INPUT_BTN / 2,
    paddingHorizontal: PADDING_HORIZONTAL,
    position: "absolute",
    gap: scaleHeight(7.5),
  },
  input: {
    flex: 1,
    height: HEIGHT_INPUT_BTN,
    backgroundColor: colors.heading,
    borderRadius: scaleHeight(5),
    paddingHorizontal: scaleHeight(15),

    color: colors.background,
    shadowColor: colors.background,
    fontSize: fontSize.md,
    fontFamily: fontFamily.inter.medium,
  },
  inputBorder: {
    borderColor: colors.heading,
  },
  button: {
    height: HEIGHT_INPUT_BTN,
    width: HEIGHT_INPUT_BTN,
    borderRadius: scaleHeight(5),
    backgroundColor: colors.heading,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
