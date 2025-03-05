import {
  Platform,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import Constants from "expo-constants";

const statusBarHeight =
  Platform.OS === "ios" ? Constants.statusBarHeight : StatusBar.currentHeight;

export function CustomStatusBar({
  children,
  style,
  barStyle,
  backgroundColor,
  translucent,
}: ViewProps & StatusBarProps) {
  const baseStyles = {
    flex: 1,
  };
  const flattenedStyle = StyleSheet.flatten([baseStyles, style]);

  const barStyles: StatusBarProps = {
    animated: true,
    showHideTransition: `none`,
    barStyle: barStyle || `dark-content`,
    backgroundColor: `transparent`,
    // backgroundColor: backgroundColor || `transparent`,
    translucent: translucent || true,
  };
  return (
    <View style={flattenedStyle}>
      <View
        style={{
          height: statusBarHeight,
          backgroundColor: backgroundColor ? backgroundColor : "transparent",
        }}
      />
      <StatusBar {...barStyles} />
      {children}
    </View>
  );
}
