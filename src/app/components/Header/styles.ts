import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "23.5%",
  },
  form: {
    position: "absolute",
    bottom: -56 / 2,
    height: 56,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  input: {
    height: 56,
    width: "70%",
    backgroundColor: colors.heading,
    borderRadius: 5,
    paddingVertical: 16,
    paddingHorizontal: 25,
    color: colors.background,
    shadowColor: colors.background,
    // marginRight: 4,
    fontSize: fontSize.md,
    fontFamily: fontFamily.inter.medium,
    borderColor: colors.heading,
    borderWidth: 1,
  },
  inputBorder: {
    borderColor: colors.heading,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: colors.heading,
    alignItems: "center",
    justifyContent: "center",
  },
});
