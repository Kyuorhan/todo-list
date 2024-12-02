import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "theme";
import { scaleHeight } from "utils/scale";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopColor: colors.stroke,
    borderEndColor: colors.stroke,
    borderStartColor: colors.stroke,
    borderBottomColor: colors.stroke,
    borderRadius: scaleHeight(7.5),
    borderWidth: scaleHeight(1),
    paddingHorizontal: scaleHeight(25),
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: scaleHeight(1),
  },
  image: {
    height: scaleHeight(42),
    width: scaleHeight(42),
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: scaleHeight(20),
    gap: scaleHeight(5),
  },
  textBold: {
    width: "100%",
    textAlign: "center",
    fontSize: fontSize.md,
    fontFamily: fontFamily.inter.bold,
    color: colors.heading,
  },
  textRegular: {
    width: "100%",

    fontSize: fontSize.sm,
    fontFamily: fontFamily.inter.medium,
    color: colors.base.gray300,
  },
});
