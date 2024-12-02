import { scaleFont } from "utils/scale";

export const fontFamily = {
  inter: {
    regular: "Inter_400Regular",
    medium: "Inter_500Medium",
    semibold: "Inter_600SemiBold",
    bold: "Inter_700Bold",
    black: "Inter_900Black",
  },
  poppins: {
    regular: "Poppins_400Regular",
    medium: "Poppins_500Medium",
    semibold: "Poppins_600SemiBold",
    bold: "Poppins_700Bold",
    black: "Poppins_900Black",
  },
} as const;

interface FontSize {
  /** Extra Small: 12px */
  xs: number;
  /** Small: 14px */
  sm: number;
  /** Medium: 16px */
  md: number;
  /** Large: 18px */
  lg: number;
  /** Extra Large: 20px */
  xl: number;
  /** Extra Large 2: 22px */
  xl2: number;
  /** Extra Large 2.1: 24px */
  xl2_1: number;
  /** Extra Large 3: 26px */
  xl3: number;
  /** Extra Large 3.1: 28px */
  xl3_1: number;
  /** Extra Large 4: 30px */
  xl4: number;
  /** Extra Large 4.1: 32px */
  xl4_1: number;
  /** Extra Large 5: 36px */
  xl5: number;
}

/**
 * Objeto que contém os tamanhos de fonte.
 * @type {FontSize}
 */
export const fontSize: FontSize = {
  xs: scaleFont(12),
  sm: scaleFont(14),
  md: scaleFont(16),
  lg: scaleFont(18),
  xl: scaleFont(20),
  xl2: scaleFont(22),
  xl2_1: scaleFont(24),
  xl3: scaleFont(26),
  xl3_1: scaleFont(28),
  xl4: scaleFont(30),
  xl4_1: scaleFont(32),
  xl5: scaleFont(36),
};

// export const fonts = {
//   family: {
//     regular: "Inter_400Regular",
//     medium: "Inter_500Medium",
//     semibold: "Inter_600SemiBold",
//     bold: "Inter_700Bold",
//     // regular: "Poppins_400Regular",
//     // medium: "Poppins_500Medium",
//     // semibold: "Poppins_600SemiBold",
//     // bold: "Poppins_700Bold",
//   },
//   size: {
// 		sm: 12,
// 		md: 14,
// 		lg: 16,
//   },
// }
