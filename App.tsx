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

  if (!fontsLoaded) {
    return <Loading />;
  }

  return <Home />;
}
