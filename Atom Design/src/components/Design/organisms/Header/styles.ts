import { StyleSheet } from 'react-native'
import { theme } from '../../../../theme'

export const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: 173,
		position: 'relative',
	},
	form: {
		position: 'absolute',
		bottom: -54 / 2,
		height: 54,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		height: 54,
		width: '75%',
		backgroundColor: theme.colors.heading,
		borderRadius: 5,
		paddingVertical: 16,
		paddingHorizontal: 20,
		color: theme.colors.background,
		shadowColor: theme.colors.background,
		marginRight: 4,
		fontSize: theme.fonts.size.md,
		fontFamily: theme.fonts.family.medium,
		borderColor: theme.colors.heading,
		borderWidth: 1,
	},
	inputBorder: {
		borderColor: theme.colors.heading,
	},
	button: {
		height: 54,
		width: 54,
		borderRadius: 5,
		backgroundColor: theme.colors.heading,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
