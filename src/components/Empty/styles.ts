import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
	emptyContainer: {
		flex: 1,
		alignItems: 'center',
		width: '100%',
		paddingVertical: 48,
		paddingHorizontal: 20,
		borderTopColor: theme.colors.stroke,
		borderEndColor: theme.colors.stroke,
		borderStartColor: theme.colors.stroke,
		borderBottomColor: theme.colors.stroke,
		borderRadius: 8,
		borderWidth: 1,
	},
	image: {
		marginBottom: 32,
	},
	textBold: {
		fontSize: theme.fonts.size.md,
		fontFamily: theme.fonts.family.bold,
		color: theme.colors.heading,
	},
	textRegular: {
		fontFamily: theme.fonts.family.regular,
	},
})
