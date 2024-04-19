import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from "../../../../../theme";
import { styles } from "./styles";

type ButtonToAddedProps = TouchableOpacityProps & {
	onPress: () => void
}

export function ButtonToAdded({ onPress }: ButtonToAddedProps ) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}>
    <MaterialCommunityIcons
      name="plus-circle-outline"
      size={22}
      color={theme.colors.base.gray200}
    />
  </TouchableOpacity>

  )
}