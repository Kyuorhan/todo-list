import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Loading } from './src/components/Loading';

import {
  useFonts as userFontPoppins,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular
} from '@expo-google-fonts/poppins'
import {
  useFonts as userFontsInter,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular
} from '@expo-google-fonts/inter'

import { theme } from './src/theme';
import { HomeScreen } from './src/screnns/home';

export default function App() {
  const [poppinsLoaded] = userFontPoppins({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular,
  });  
  const [interLoaded] = userFontsInter({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
  });

  if (!poppinsLoaded || !interLoaded) {
    return <Loading />
}

  return (poppinsLoaded && interLoaded) ? (
    <HomeScreen /> 
  ) : null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base.gray600,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
