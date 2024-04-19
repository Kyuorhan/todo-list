import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	tasksContainer: {
		flex: 1,
		marginTop: 55,
		marginHorizontal: 24,
	},
	tasksCreated: {
		color: theme.colors.heading,
		fontSize: theme.fonts.size.md,
		fontFamily: theme.fonts.family.bold,
		marginLeft: 5,
	},
	tasksDone: {
		color: theme.colors.primary,
		fontSize: theme.fonts.size.md,
		fontFamily: theme.fonts.family.bold,
		
	},
	info: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 20,
		marginRight: 5,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	counterContainer: {
		backgroundColor: theme.colors.stroke,
		width: 25,
		height: 19,
		borderRadius: 999,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 8,
	},
	counterText: {
		color: theme.colors.heading,
		fontSize: theme.fonts.size.sm,
		fontFamily: theme.fonts.family.bold,
	},
})
