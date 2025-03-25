import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { ButtonAddTask } from "../../components/Button";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/images/logo/Logo.png")} />
      </View>
      <View style={styles.content}>
        <View style={styles.addTask}>
          <Input />
          <ButtonAddTask />
        </View>
      </View>
    </View>
  );
}
