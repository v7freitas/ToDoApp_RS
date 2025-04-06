import { View, Image, Text } from "react-native";
import { styles } from "./styles";

export function EmptyListItem() {
  return (
    <View style={styles.emptyList}>
      <Image source={require("../../assets/images/emptyList/empty.png")} />
      <Text
        style={[styles.emptyMessage, { fontWeight: "bold", marginTop: 16 }]}
      >
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.emptyMessage}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
