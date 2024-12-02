import { StyleSheet } from "react-native";
import { colors } from "theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.base.gray600,
  },
  indicator: {
    color: colors.primary,
  },
});
