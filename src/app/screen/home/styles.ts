import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tasksContainer: {
    flex: 1,
    marginTop: 55,
    marginHorizontal: 30,
  },
  tasksCreated: {
    color: colors.heading,
    fontSize: fontSize.md,
    fontFamily: fontFamily.inter.semibold,
    marginLeft: 5,
  },
  tasksDone: {
    color: colors.primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.inter.semibold,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    marginRight: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterContainer: {
    backgroundColor: colors.stroke,
    width: 30,
    height: 20,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
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
