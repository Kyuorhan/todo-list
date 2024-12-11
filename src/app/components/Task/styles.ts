import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "theme";
import { scaleHeight } from "utils/scale";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: scaleHeight(45),
    backgroundColor: colors.background,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scaleHeight(15),
    borderRadius: scaleHeight(5),
    borderWidth: scaleHeight(1),
    borderColor: colors.stroke,
  },
  textContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: scaleHeight(8.5),
  },
  textDone: {
    fontFamily: fontFamily.inter.medium,
    fontSize: fontSize.md,
    color: colors.base.gray300,
    textDecorationLine: "line-through",
  },
  textCreated: {
    fontFamily: fontFamily.inter.medium,
    fontSize: fontSize.md,
    color: colors.heading,
    textDecorationLine: "none",
  },
  icon: {
    height: scaleHeight(15),
  },
});
