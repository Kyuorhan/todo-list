import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export const colors = {
  primary: "#FF941A",
  secondary: "#FFC380",
  background: "#FFFFFF",
  delete: "#E83F5B",
  heading: "#585666",
  body: "#706E7A",
  danger: "#E25858",
  shape: "#FAFAFC",
  stroke: "#E3E3E6",
  base: {
    gray100: "#F2F2F2",
    gray200: "#D9D9D9",
    gray300: "#808080",
    gray400: "#333333",
    gray500: "#262626",
    gray600: "#1A1A1A",
    gray700: "#0D0D0D",
  },
  brand: {
    purple: "#8284FA",
    purple_dark: "#5E60CE",
    blue: "#4EA8DE",
    blue_dark: "#1E6F9F",
  },
} as const;

// const lightColors = {
//   primary: "#FF941A",
//   secondary: "#FFC380",
//   background: "#FFFFFF",
//   delete: "#E83F5B",
//   heading: "#585666",
//   body: "#706E7A",
//   danger: "#E25858",
//   shape: "#FAFAFC",
//   stroke: "#E3E3E6",
//   base: {
//     gray100: "#F2F2F2",
//     gray200: "#D9D9D9",
//     gray300: "#808080",
//     gray400: "#333333",
//     gray500: "#262626",
//     gray600: "#1A1A1A",
//     gray700: "#0D0D0D",
//   },
//   brand: {
//     purple: "#8284FA",
//     purple_dark: "#5E60CE",
//     blue: "#4EA8DE",
//     blue_dark: "#1E6F9F",
//   },
// };

// const darkColors = {
//   primary: "#FF941A",
//   secondary: "#FFC380",
//   background: "#000000",
//   delete: "#E83F5B",
//   heading: "#FFFFFF",
//   body: "#D9D9D9",
//   danger: "#E25858",
//   shape: "#1A1A1A",
//   stroke: "#333333",
//   base: {
//     gray100: "#0D0D0D",
//     gray200: "#1A1A1A",
//     gray300: "#262626",
//     gray400: "#333333",
//     gray500: "#808080",
//     gray600: "#D9D9D9",
//     gray700: "#F2F2F2",
//   },
//   brand: {
//     purple: "#8284FA",
//     purple_dark: "#5E60CE",
//     blue: "#4EA8DE",
//     blue_dark: "#1E6F9F",
//   },
// };
