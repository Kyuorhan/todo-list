import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "theme";
import { scaleHeight } from "utils/scale";

const { height } = Dimensions.get("window");

const MARGIN_HORIZONTAL = height * 0.005;

const styles = StyleSheet.create({
  tasksContainer: {
    flex: 1,
    paddingTop: scaleHeight(45),
    paddingBottom: scaleHeight(25),
    paddingHorizontal: height * 0.042,
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
    marginBottom: scaleHeight(25),
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
});

export default styles;
