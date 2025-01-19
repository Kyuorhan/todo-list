import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "theme";
import { scaleFont, scaleHeight } from "utils/scale";
const { height } = Dimensions.get("window");

// const HEIGHT_INPUT_BTN = 56;
const HEIGHT_INPUT_BTN = scaleHeight(45);
// const HEIGHT_INPUT_BTN = height * 0.065;

export const styles = StyleSheet.create({
  container: {
    height: "17.5%",
    width: "100%",
    backgroundColor: colors.primary,
  },
  img: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: HEIGHT_INPUT_BTN / 2,
  },
  logo: {
    width: scaleHeight(76),
    height: scaleHeight(76),
  },
  form: {
    width: "100%",
    flexDirection: "row",
    height: HEIGHT_INPUT_BTN,
    bottom: -HEIGHT_INPUT_BTN / 2,
    paddingHorizontal: height * 0.042,
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
