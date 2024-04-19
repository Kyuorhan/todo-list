import { useRef, useState } from 'react'
import { View, Image, Text, TextInput } from 'react-native'
import { styles } from './styles'
import logoImage from '../../../../assets/logo.png'
import { TaskDTO } from '../../../../dtos/TaskDTO'
import { UUID } from '../../../../utils/uuid'
import { HeaderMlcs } from '../../molecules/Header'



export function HeaderOrgs () {
	const [tasks, setTasks] = useState<TaskDTO[]>([])
	const [newTask, setNewTask] = useState('')
	const newTaskInputRef = useRef<TextInput>(null)

	function handleTaskAdd() {
		if (newTask !== '' && newTask.length >= 5) {
			setTasks((tasks) => [
				...tasks,
				{ id: UUID(), isCompleted: false, title: newTask.trim() },
			])

			setNewTask('')

			newTaskInputRef.current?.blur()
		}
	}

	return (
		<View style={styles.container}>
			<Image source={logoImage} />
			<View style={styles.form}>
				<HeaderMlcs 
					inputRef={newTaskInputRef}
					task={newTask}
					onChangeText={setNewTask}
					onPress={handleTaskAdd}
				/>		
			</View>
		</View>
	)
}
