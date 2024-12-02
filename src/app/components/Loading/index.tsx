import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={styles.indicator.color} />
    </View>
  );
}
