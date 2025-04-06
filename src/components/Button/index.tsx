import { styles } from "./styles";
import { Image, TouchableOpacity, View } from "react-native";

type ButtonAddTaskProps = {
  onPress: () => void;
};

export function ButtonAddTask({ onPress }: ButtonAddTaskProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Image source={require("../../assets/images/plus/plus.png")} />
      </View>
    </TouchableOpacity>
  );
}
