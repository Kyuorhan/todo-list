import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { theme } from "../../../../../theme";

type InputTaskProps = TextInputProps & {
	value: string
	inputRef?: React.RefObject<TextInput>
	onChangeText: (value: string) => void
	onPress: () => void
}


export function InputTask({ 
  value, inputRef, onChangeText, onPress 
}: InputTaskProps) {
  return (
    <TextInput
    // style={[
    //   styles.input,
    //   inputRef!.current?.isFocused() && value
    //     ? styles.inputBorder
    //     : null,
    // ]}
    placeholder="Adicione uma nova tarefa"
    placeholderTextColor={theme.colors.base.gray200}
    value={value}
    onChangeText={onChangeText}
    ref={inputRef}
    autoCorrect={false}
    onSubmitEditing={onPress}
    returnKeyType="done"
  />
  )
}