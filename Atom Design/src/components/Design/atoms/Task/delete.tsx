import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TaskDTO } from "../../../../dtos/TaskDTO";
import { theme } from "../../../../theme";

type TaskDeleteProps = TaskDTO & {
	onTaskDeleted: (id: string) => void
}

export function TaskDelete ({ 
	id,
  onTaskDeleted, 
}: TaskDeleteProps) {
  return (
    <TouchableOpacity onPress={() => onTaskDeleted(id)}>
      <MaterialCommunityIcons 
        name="trash-can-outline"
        size={20}
        color={theme.colors.delete}								
      />
    </TouchableOpacity>
  )
}