import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

/**
 * Escala o tamanho com base na largura do dispositivo.
 * @param size O tamanho base.
 * @returns O tamanho escalado.
 */
export function scaleWidth(size: number): number {
  const guidelineBaseWidth = 375; // Largura base do design (pode ser ajustada conforme necessário)
  return (width / guidelineBaseWidth) * size;
}

/**
 * Escala o tamanho com base na altura do dispositivo.
 * @param size O tamanho base.
 * @returns O tamanho escalado.
 */
export function scaleHeight(size: number): number {
  const guidelineBaseHeight = 667; // Altura base do design (pode ser ajustada conforme necessário)
  return (height / guidelineBaseHeight) * size;
}

/**
 * Escala o tamanho da fonte com base na escala do dispositivo, com um valor máximo.
 * @param size O tamanho base da fonte.
 * @param maxScale O valor máximo da escala da fonte.
 * @returns O tamanho escalado da fonte.
 */
export function scaleFont(size: number, maxScale: number = 1.2): number {
  const scale = PixelRatio.getFontScale();
  console.log("scale>>> ", scale);
  const scaledSize = size * scale;
  return Math.min(scaledSize, size * maxScale);
}
