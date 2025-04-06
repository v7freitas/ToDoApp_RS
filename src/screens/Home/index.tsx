import { View, Image, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { ButtonAddTask } from "../../components/Button";
import { NotificationItem } from "../../components/NotificationItem";
import { Task } from "../../components/Task";
import { useState } from "react";
import { EmptyListItem } from "../../components/EmptyListItem";

type TaskType = {
  name: string;
  checked: boolean;
};

export function Home() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  function handleCheck(index: number) {
    setTaskList((prevState) =>
      prevState.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleTaskAdd() {
    setTaskList((prevState) => [...prevState, { name: task, checked: false }]);
    setTask("");
  }

  function handleTaskRemove(taskName: string) {
    Alert.alert("Apagar tarefa", `Deseja apagar a tarefa ${taskName}?`, [
      {
        text: "Sim",
        onPress: () => {
          setTaskList((prevState) =>
            prevState.filter((task) => task.name !== taskName)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/images/logo/Logo.png")} />
      </View>
      <View style={styles.content}>
        <View style={styles.inputForm}>
          <Input onChangeText={setTask} value={task} />
          <ButtonAddTask onPress={handleTaskAdd} />
        </View>
        <View style={styles.notifications}>
          <NotificationItem title={"Criadas"} count={taskList.length} />
          <NotificationItem
            title={"Concluídas"}
            count={taskList.filter((task) => task.checked).length}
          />
        </View>

        <FlatList
          data={taskList}
          renderItem={({ item, index }) => (
            <Task
              onPressCheck={() => handleCheck(index)}
              isChecked={item.checked}
              key={index}
              taskName={item.name}
              onRemoveTask={() => handleTaskRemove(item.name)}
              containerStyle={
                index === 0
                  ? [styles.taskContainer, styles.firstTaskContainer]
                  : styles.taskContainer
              }
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 8,
                width: "100%",
              }}
            />
          )}
          ListEmptyComponent={() => <EmptyListItem />}
        />
      </View>
    </View>
  );
}
