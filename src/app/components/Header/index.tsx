import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "theme";
import logoImage from "../../../assets/logo.png";
import { scaleHeight } from "utils/scale";

type HeaderProps = {
  task: string;
  inputRef: React.RefObject<TextInput>;
  onChangeText: (task: string) => void;
  onPress: () => void;
};

export function Header({ task, inputRef, onChangeText, onPress }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Image source={logoImage} />
      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            inputRef.current?.isFocused() && task ? styles.inputBorder : null,
          ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.base.gray200}
          value={task}
          onChangeText={onChangeText}
          ref={inputRef}
          autoCorrect={false}
          onSubmitEditing={onPress}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <MaterialCommunityIcons
            name="plus"
            size={scaleHeight(20)}
            color={colors.base.gray200}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
