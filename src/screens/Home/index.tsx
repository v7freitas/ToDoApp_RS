import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { ButtonAddTask } from "../../components/Button";
import { NotificationItem } from "../../components/NotificationItem";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/images/logo/Logo.png")} />
      </View>
      <View style={styles.content}>
        <View style={styles.input}>
          <Input />
          <ButtonAddTask />
        </View>
        <View style={styles.notifications}>
          <NotificationItem title={"Criadas"} count={1} />
          <NotificationItem title={"Concluídas"} count={0} />
        </View>

        <FlatList
          data={[]}
          renderItem={() => null}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Image
                source={require("../../assets/images/emptyList/empty.png")}
              />
              <Text
                style={[
                  styles.emptyMessage,
                  { fontWeight: "bold", marginTop: 16 },
                ]}
              >
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyMessage}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
