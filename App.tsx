import { Loading } from "./src/app/components/Loading";
import {
  useFonts as userFontPoppins,
  Poppins_900Black,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import {
  useFonts as userFontsInter,
  Inter_900Black,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

import Home from "./src/app/screen/home";
import { StyleSheet, useColorScheme, View } from "react-native";
import { colors } from "theme";

export default function App() {
  const [fontsLoaded] =
    userFontPoppins({
      Poppins_900Black,
      Poppins_700Bold,
      Poppins_600SemiBold,
      Poppins_500Medium,
      Poppins_400Regular,
    }) &&
    userFontsInter({
      Inter_900Black,
      Inter_700Bold,
      Inter_600SemiBold,
      Inter_500Medium,
      Inter_400Regular,
    });

  if (!fontsLoaded || !colors) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
