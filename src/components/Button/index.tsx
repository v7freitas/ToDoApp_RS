import { styles } from "./styles";
import { Image, TouchableOpacity, View } from "react-native";

export function ButtonAddTask() {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Image source={require("../../assets/images/plus/plus.png")} />
      </View>
    </TouchableOpacity>
  );
}
