import { StyleSheet } from "react-native";
import { colors, fontSize } from "theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    backgroundColor: colors.background,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.stroke,
  },
  textContainer: {
    width: "80%",
    height: 40,
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  textDone: {
    fontSize: fontSize.md,
    color: colors.base.gray300,
    textDecorationLine: "line-through",
  },
  textCreated: {
    fontSize: fontSize.md,
    color: colors.heading,
    textDecorationLine: "none",
  },
});
