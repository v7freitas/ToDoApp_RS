import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type TaskProps = {
  taskName: string;
  containerStyle?: object;
  onRemoveTask: () => void;
  isChecked?: boolean;
  onPressCheck?: () => void;
};

export function Task({
  taskName,
  containerStyle,
  onRemoveTask,
  isChecked,
  onPressCheck,
}: TaskProps) {
  return (
    <View
      style={
        isChecked ? [containerStyle, styles.containerChecked] : containerStyle
      }
    >
      <TouchableOpacity onPress={onPressCheck} activeOpacity={0.8}>
        <Image
          source={
            isChecked
              ? require("../../assets/images/check/check.png")
              : require("../../assets/images/emptyCheck/check.png")
          }
        />
      </TouchableOpacity>
      <Text style={isChecked ? [styles.taskMarked, styles.text] : styles.text}>
        {taskName}
      </Text>
      <TouchableOpacity onPress={onRemoveTask} activeOpacity={0.8}>
        <Image source={require("../../assets/images/trash/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
