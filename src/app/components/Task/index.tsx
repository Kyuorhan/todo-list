import { TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { colors } from "theme";
import { TaskDTO } from "dtos/TaskDTO";
type TasksProps = TaskDTO & {
  onTaskDone: (id: string) => void;
  onTaskDeleted: (id: string) => void;
};

export function Task({
  id,
  title,
  isCompleted,
  onTaskDone,
  onTaskDeleted,
}: TasksProps) {
  return (
    <TouchableOpacity onPress={() => onTaskDone(id)} style={styles.container}>
      <View>
        <MaterialCommunityIcons
          name={
            isCompleted
              ? "checkbox-marked-circle-outline"
              : "checkbox-blank-circle-outline"
          }
          size={styles.icon.height}
          color={isCompleted ? colors.primary : colors.heading}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={isCompleted ? styles.textDone : styles.textCreated}>
          {title}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onTaskDeleted(id)} style={styles.delete}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={styles.icon.height}
          color={colors.delete}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
