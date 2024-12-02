import { StyleSheet } from "react-native";
import { colors, fontFamily, fontSize } from "theme";

export const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTopColor: colors.stroke,
    borderEndColor: colors.stroke,
    borderStartColor: colors.stroke,
    borderBottomColor: colors.stroke,
    borderRadius: 8,
    borderWidth: 1,
  },
  image: {
    marginBottom: 32,
  },
  textBold: {
    width: "100%",
    textAlign: "center",
    fontSize: fontSize.md,
    fontFamily: fontFamily.inter.bold,
    color: colors.heading,
  },
  textRegular: {
    paddingVertical: 10,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.inter.regular,
  },
});
