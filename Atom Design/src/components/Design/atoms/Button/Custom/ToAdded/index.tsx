import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from "../../../../../../theme";
import { styles } from "./styles";

type IconName = "plus-circle" | "plus-circle-outline";

// Exemplo para button personalizado com paramentros etc
type BtnCustmToAddedProps = TouchableOpacityProps & {
	iconName: IconName,
  onPress: () => void
}

export function BtnCustmToAdded({ 
  iconName, onPress, ...rest
}: BtnCustmToAddedProps ) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}>
    <MaterialCommunityIcons
      name={iconName}
      size={22}
      color={theme.colors.base.gray200}
    />
  </TouchableOpacity>

  )
}