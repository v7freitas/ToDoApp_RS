import { TextInput } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type InputProps = {
  onChangeText: (text: string) => void;
  value: string;
};

export function Input({ onChangeText, value }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={isFocused ? styles.inputFocused : styles.input}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={"#808080"}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={onChangeText}
      value={value}
    />
  );
}
