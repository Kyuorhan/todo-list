import { TextInput, View } from "react-native";
import { styles } from "./styles";
import { InputTask } from "../../atoms/Input/Task";
import { ButtonToAdded } from "../../atoms/Button/ToAdded";

type HeaderMlcsProps = {
	task: string
	inputRef: React.RefObject<TextInput>
	onChangeText: (task: string) => void
	onPress: () => void
}

export function HeaderMlcs({ task, inputRef, onChangeText, onPress }: HeaderMlcsProps) {
  return (
    <View style={styles.container}>
			<InputTask value={task} onChangeText={onChangeText} onPress={onPress}  />
      <ButtonToAdded onPress={onPress}/>
    </View>
  )
}