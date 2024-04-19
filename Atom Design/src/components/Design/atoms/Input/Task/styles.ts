import { StyleSheet } from 'react-native'
import { theme } from '../../../../../theme'

export const styles = StyleSheet.create({
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
})
