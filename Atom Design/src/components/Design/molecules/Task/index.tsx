import { TouchableOpacity, View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '../../../../theme'
import { TaskDTO } from '../../../../dtos/TaskDTO'
import { TaskCheckout } from '../../atoms/Task/checkout'
import { TaskDelete } from '../../atoms/Task/delete'


type TasksProps = TaskDTO & {
	onTaskDone: (id: string) => void
	onTaskDeleted: (id: string) => void
}

export function TaskMlcs({
	id,
	title,
	isCompleted,
	onTaskDone,
	onTaskDeleted,
}: TasksProps ) {
	return (
		<View style={styles.container}>
			<TaskCheckout 
				id={id}								
				onTaskDone={() => onTaskDone(id)}
			/>			

			<View style={styles.textContainer}>
				<Text
					style={isCompleted ? styles.textDone : styles.textCreated}
				>
					{title}
				</Text>
			</View>


			<TaskDelete 
				id={id}
				onTaskDeleted={() => onTaskDeleted(id)}
			/>
		</View>
	)
}