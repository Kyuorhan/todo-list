import { Dimensions, PixelRatio, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

// Defina as alturas e larguras base para diferentes dispositivos
const baseDimensions = {
  iphone7: { width: 375, height: 667 },
  iphone8: { width: 375, height: 667 },
  iphoneX: { width: 375, height: 812 },
  iphone11: { width: 414, height: 896 },
  iphone12: { width: 390, height: 844 },
  iphone13: { width: 390, height: 844 },
  iphone14: { width: 390, height: 844 },
  iphone15: { width: 390, height: 844 },
  iphone16: { width: 390, height: 844 },
  androidSamsung: { width: 360, height: 800 },
  androidXiaomi: { width: 360, height: 800 },
  androidMotorola: { width: 360, height: 800 },
  // Adicione outras dimensões base conforme necessário
};

// const scale = PixelRatio.getFontScale();
const guidelineBaseHeight =
  Platform.OS === "ios"
    ? baseDimensions.iphone7.height
    : baseDimensions.iphone7.height;
// Largura base do design (pode ser ajustada conforme necessário)
const guidelineBaseWidth =
  Platform.OS === "ios"
    ? baseDimensions.iphone7.width
    : baseDimensions.iphone7.width;

/**
 * Escala o tamanho com base na largura do dispositivo.
 * @param size O tamanho base.
 * @returns O tamanho escalado.
 */
export function scaleWidth(size: number): number {
  return (width / guidelineBaseWidth) * size;
}

/**
 * Escala o tamanho com base na altura do dispositivo.
 * @param size O tamanho base.
 * @returns O tamanho escalado.
 */
export function scaleHeight(size: number): number {
  // Altura base do design (pode ser ajustada conforme necessário)
  return (height / guidelineBaseHeight) * size;
}

/**
 * Escala o tamanho da fonte com base na escala do dispositivo, com um valor máximo.
 * @param size O tamanho base da fonte.
 * @param maxScale O valor máximo da escala da fonte.
 * @returns O tamanho escalado da fonte.
 */
export function scaleFont(size: number, maxScale: number = 1.1): number {
  const fontScale = PixelRatio.getFontScale();
  const scaledSize = size * fontScale;
  return Math.min(scaledSize, size * maxScale);
}
