import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TaskDTO } from "../../../../dtos/TaskDTO";
import { theme } from "../../../../theme";

type TaskCheckoutProps = TaskDTO & {
  onTaskDone: (id: string) => void
}

export function TaskCheckout ({ 
  id,
  isCompleted,  
  onTaskDone 
}: TaskCheckoutProps) {
  return (
    <TouchableOpacity onPress={() => onTaskDone(id)}>
      <MaterialCommunityIcons
        name={
          isCompleted
            ? 'checkbox-marked-circle-outline'
            : 'checkbox-blank-circle-outline'
        }
        size={22}
        color={
          isCompleted
            ? theme.colors.primary
            : theme.colors.heading
        }
      />
    </TouchableOpacity>
  )
}