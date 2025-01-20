import { useRef, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Alert,
  TextInput,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { TaskDTO } from "../../../dtos/TaskDTO";
import { UUID } from "../../../utils/uuid";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { Empty } from "../../components/Empty";
import { BaseContainer } from "app/components/BaseContainer";
import { colors } from "theme";
import { scaleHeight } from "utils/scale";

export default function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTask, setNewTask] = useState("");
  const newTaskInputRef = useRef<TextInput>(null);

  function handleTaskAdd() {
    if (newTask !== "" && newTask.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: UUID(), isCompleted: false, title: newTask.trim() },
      ]);

      setNewTask("");

      newTaskInputRef.current?.blur();
    }
  }

  function handleTaskDone(id: string) {
    setTasks((task) =>
      task.map((task) => {
        task.id === id ? (task.isCompleted = !task.isCompleted) : null;
        return task;
      })
    );
  }

  function handleTaskDeleted(id: string) {
    Alert.alert("Excluir tarefa", "Desejar excluir essa tarefa?", [
      {
        text: "Sim",
        style: "default",
        onPress: () =>
          setTasks((tasks) => tasks.filter((task) => task.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const totalTasksCreated = tasks.length;
  const totalTasksCompleted = tasks.filter(
    ({ isCompleted }) => isCompleted
  ).length;

  return (
    <BaseContainer backgroundColor={colors.primary} barStyle={"light-content"}>
      <Header
        inputRef={newTaskInputRef}
        task={newTask}
        onChangeText={setNewTask}
        onPress={handleTaskAdd}
      />
      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Total</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasksCreated}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluídas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasksCompleted}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={tasks}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: scaleHeight(10),
            // backgroundColor: "red",
          }}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              onTaskDone={() => handleTaskDone(item.id)}
              onTaskDeleted={() => handleTaskDeleted(item.id)}
              {...item}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </BaseContainer>
  );
}
