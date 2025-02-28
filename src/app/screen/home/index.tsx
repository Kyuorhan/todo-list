import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Text,
  View,
  Alert,
  TextInput,
  SafeAreaView,
} from "react-native";
import * as Notifications from "expo-notifications";
import styles from "./styles";
import { TaskDTO } from "../../../dtos/TaskDTO";
import { UUID } from "../../../utils/uuid";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { Empty } from "../../components/Empty";
import { BaseContainer } from "app/components/BaseContainer";
import { colors } from "theme";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTask, setNewTask] = useState("");
  const [finishTasks, setFinishTasks] = useState(false);
  const newTaskInputRef = useRef<TextInput>(null);

  useEffect(() => {
    const requestNotificationPermissions = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        await Notifications.requestPermissionsAsync();
      }
    };

    requestNotificationPermissions();

    if (finishTasks) {
      handleCallNotifications();
    }
  }, [finishTasks]);

  const handleCallNotifications = async () => {
    const trigger: Notifications.TimeIntervalTriggerInput = {
      seconds: 10,
      repeats: true,
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
    };

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Tarefas finalizadas",
        body: "Parabéns, você finalizou todas as tarefas",
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
      },
      trigger: trigger,
    });
  };

  // Adicionar tarefa
  function handleTaskAdd() {
    if (newTask !== "" && newTask.length >= 5) {
      // setTasks((tasks) => [
      //   ...tasks,
      //   { id: UUID(), isCompleted: false, title: newTask.trim() },
      // ]);
      setTasks((tasks) => {
        const updatedTasks = [
          ...tasks,
          { id: UUID(), isCompleted: false, title: newTask.trim() },
        ];
        if (updatedTasks.length >= 2) {
          setFinishTasks(updatedTasks.every((task) => task.isCompleted));
        }
        return updatedTasks;
      });

      setNewTask("");
      newTaskInputRef.current?.blur();
    } else {
      Alert.alert("Atenção", "A tarefa deve conter no mínimo 5 caracteres.", [
        { text: "OK" },
      ]);
    }
  }

  // Fechar a tarefa
  function handleTaskDone(id: string) {
    // setTasks((task) =>
    //   task.map((task) => {
    //     task.id === id ? (task.isCompleted = !task.isCompleted) : null;
    //     return task;
    //   })
    // );
    setTasks((tasks) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
      if (updatedTasks.length >= 2) {
        setFinishTasks(updatedTasks.every((task) => task.isCompleted));
      }
      return updatedTasks;
    });
  }

  // Deletar tarefa
  function handleTaskDeleted(id: string) {
    Alert.alert("Excluir tarefa", "Desejar excluir essa tarefa?", [
      {
        text: "Sim",
        style: "default",
        // onPress: () =>
        //   setTasks((tasks) => tasks.filter((task) => task.id !== id)),
        onPress: () =>
          setTasks((tasks) => {
            const updatedTasks = tasks.filter((task) => task.id !== id);
            if (updatedTasks.length >= 2) {
              setFinishTasks(updatedTasks.every((task) => task.isCompleted));
            } else {
              setFinishTasks(false);
            }
            return updatedTasks;
          }),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  // Finalizar todas as tarefas
  function handleTaskFinish() {
    Alert.alert("Finalizar tarefas", "Deseja finalizar todas as tarefas?", [
      {
        text: "Sim",
        style: "default",
        onPress: () =>
          setTasks((tasks) => {
            const updatedTasks = tasks.map((task) => {
              task.isCompleted = true;
              return task;
            });
            setFinishTasks(true);
            return updatedTasks;
          }),
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
      <FlatList
        data={tasks}
        contentContainerStyle={styles.listContent}
        keyExtractor={(tasks) => tasks.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={
          <>
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
                    <Text style={styles.counterText}>
                      {totalTasksCompleted}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </>
        }
        ListFooterComponent={
          finishTasks ? (
            <View style={styles.taskFooter}>
              <Text style={styles.footerText}>
                {"Parabéns, você finalizou todas as tarefas!"}
              </Text>
              <Text style={styles.footerText}>{"🎉"}</Text>
            </View>
          ) : null
        }
        renderItem={({ item }) => (
          <Task
            key={item.id}
            onTaskDone={() => handleTaskDone(item.id)}
            onTaskDeleted={() => handleTaskDeleted(item.id)}
            {...item}
          />
        )}
        windowSize={5} // Limita a renderização para economizar memória
        initialNumToRender={10} // Renderiza inicialmente 10 itens
        maxToRenderPerBatch={10} // Lida com no máximo 10 itens por lote
        removeClippedSubviews={true} // Melhora o desempenho em listas grandes
        ListEmptyComponent={<Empty />}
      />
    </BaseContainer>
  );
}
