import { useState } from 'react'
import { View, FlatList, TextInput, Alert } from 'react-native'
import { styles } from './styles'
import { TaskDTO } from '../../../../dtos/TaskDTO'
import { Empty } from '../../../Empty'
import { TaskMlcs } from '../../molecules/Task'

export function TaskOrg() {
  const [tasks, setTasks] = useState<TaskDTO[]>([])
	function handleTaskDone(id: string) {
		setTasks((task) =>
			task.map((task) => {
				task.id === id ? (task.isCompleted = !task.isCompleted) : null
				return task
			}),
		)
	}

	function handleTaskDeleted(id: string) {
		Alert.alert('Excluir tarefa', 'Desejar excluir essa tarefa?', [
			{
				text: 'Sim',
				style: 'default',
				onPress: () =>
					setTasks((tasks) => tasks.filter((task) => task.id !== id)),
			},
			{
				text: 'Não',
				style: 'cancel',
			},
		])
	}

	return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(tasks) => tasks.id}
        renderItem={({ item }) => (
          <TaskMlcs
            key={item.id}
            onTaskDone={() => handleTaskDone(item.id)}
            onTaskDeleted={() => handleTaskDeleted(item.id)}
            {...item}
          />
        )}
        ListEmptyComponent={<Empty />}
      />
    </View>
	)
}