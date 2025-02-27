import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "theme";
import { scaleHeight } from "utils/scale";

const { height } = Dimensions.get("window");

const PADDING = scaleHeight(30);

const styles = StyleSheet.create({
  listContent: {
    flexGrow: 1,
    paddingVertical: PADDING,
    paddingHorizontal: PADDING,
  },
  tasksContainer: {
    flex: 1,
    paddingTop: PADDING * 0.45,
    paddingBottom: PADDING * 0.75,
    paddingHorizontal: PADDING * 0.1,
  },
  tasksCreated: {
    color: colors.heading,
    fontSize: fontSize.md,
    fontFamily: fontFamily.inter.semibold,
  },
  tasksDone: {
    color: colors.primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.inter.semibold,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterContainer: {
    backgroundColor: colors.stroke,
    paddingHorizontal: scaleHeight(10),
    paddingVertical: scaleHeight(1.5),
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: scaleHeight(7.5),
  },
  counterText: {
    color: colors.heading,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.inter.bold,
  },
  separator: {
    marginVertical: 8.5,
  },
  taskFooter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: PADDING * 0.25,
    gap: PADDING * 0.15,
  },
  footerText: {
    color: colors.heading,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.inter.regular,
    textAlign: "center",
  },
});

export default styles;
