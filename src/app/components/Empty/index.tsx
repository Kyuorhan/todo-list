import { Image, Text, View } from "react-native";
import Clipboard from "../../../assets/clipboard.svg";
import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Clipboard height={styles.image.height} width={styles.image.width} />
        <View style={styles.textContainer}>
          <Text style={styles.textBold}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={[styles.textBold, styles.textRegular]}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      </View>
    </View>
  );
}
