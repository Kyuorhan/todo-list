import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "theme";
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
import Home from "./src/app/screen/Home";
import SplashScreenComponent from "app/screen/Splash";
import { Loading } from "./src/app/components/Loading";

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
  const [isSplashVisible, setSplashVisible] = useState(true);

  if (!fontsLoaded || !colors) {
    return <Loading />;
  }

  // Função chamada quando a animação do Splash termina
  const handleSplashFinish = () => {
    setSplashVisible(false); // Atualiza o estado para esconder o Splash
  };

  return (
    <View style={styles.container}>
      {isSplashVisible ? (
        <SplashScreenComponent onFinish={handleSplashFinish} />
      ) : (
        <Home />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
