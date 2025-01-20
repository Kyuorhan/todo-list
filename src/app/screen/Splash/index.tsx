import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Animated, Image, Easing } from "react-native";
// import * as SplashScreen from "expo-splash-screen";
import { scaleHeight, scaleWidth } from "utils/scale";
import { Asset } from "expo-asset";

// Previne que o Splash nativo desapareça automaticamente
// SplashScreen.preventAutoHideAsync();

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreenComponent({ onFinish }: SplashScreenProps) {
  // useEffect(() => {
  //   const prepare = async () => {
  //     await SplashScreen.preventAutoHideAsync();
  //     setTimeout(async () => {
  //       await SplashScreen.hideAsync();
  //       onFinish();
  //     }, 5000); // Tempo de exibição da tela de splash
  //   };

  //   prepare();
  // }, []);
  const rocketPosition = useRef(new Animated.Value(0)).current; // Posição inicial do foguete
  const opacity = useRef(new Animated.Value(1)).current; // Opacidade inicial

  useEffect(() => {
    const preloadImages = async () => {
      console.log("Iniciando carregamento das imagens...");
      await Asset.loadAsync([require("../../../assets/rocket.png")]);
      console.log("Carregamento concluído.");
    };

    const startAnimation = async () => {
      console.log("Iniciando animação...");
      Animated.sequence([
        // Movimenta o foguete para baixo
        Animated.timing(rocketPosition, {
          toValue: scaleHeight(20), // Move 20px para baixo
          duration: 800,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        // Move o foguete para cima até sair da tela
        Animated.timing(rocketPosition, {
          toValue: scaleHeight(-300), // Sai da tela
          duration: 1000,
          easing: Easing.in(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start(() => {
        console.log("Foguete subiu.");
      });

      // Gradualmente desaparece a tela
      Animated.timing(opacity, {
        toValue: 0, // Desaparece
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(async () => {
        console.log("Animação de opacidade concluída.");
        // await SplashScreen.hideAsync(); // Esconde o Splash Screen nativo
        onFinish(); // Notifica o componente pai
      });
    };
    preloadImages()
      .then(() => {
        console.log("Carregamento concluído, iniciando animação...");
        startAnimation();
      })
      .catch((error) => console.error("Erro ao carregar imagens:", error));

    // Adiciona logs para depuração
    // rocketPosition.addListener(({ value }) => {
    //   console.log("Posição do foguete:", value);
    // });
    // opacity.addListener(({ value }) => {
    //   console.log("Opacidade:", value);
    // });

    return () => {
      rocketPosition.removeAllListeners();
      opacity.removeAllListeners();
    };
  }, [onFinish, rocketPosition, opacity]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Animated.Image
        source={require("../../../assets/rocket.png")} // Substitua pelo caminho do foguete
        style={[
          styles.rocket,
          { transform: [{ translateY: rocketPosition }], opacity: opacity },
        ]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF941A",
    width: "100%", // Garante que ocupa a largura total
    height: "100%", // Garante que ocupa a altura total
  },

  rocket: {
    resizeMode: "contain",
  },
});
