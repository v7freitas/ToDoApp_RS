import { Text, View } from "react-native";
import { styles } from "./styles";

type NotificationItemProps = {
  title: string;
  count: number;
  variant?: "created" | "completed";
};

export function NotificationItem({ title, count }: NotificationItemProps) {
  return (
    <View style={styles.container}>
      <Text
        style={
          title === "Criadas"
            ? [styles.title, styles.variantCreated]
            : [styles.title, styles.variantCompleted]
        }
      >
        {title}
      </Text>
      <View style={styles.countContainer}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  );
}
