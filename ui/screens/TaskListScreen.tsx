import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { useState } from "react";

type Props = NativeStackScreenProps<RootStackParamList, 'TaskList'>;

const TaskListScreen = ({ navigation }: Props) => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");

  const addTask = (title: string) => {
    const newTitle = title.trim();
    if (newTitle === "") return;

    setTasks([...tasks, newTitle]);
    setTaskTitle("");
  }

  return (
    <ScrollView>
      <Button
        title="Go to Details for Task 1"
        onPress={() => navigation.navigate("TaskDetail", { taskId: "1" })}
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}></Button>
      <Button
        title="Add Task"
        onPress={() => navigation.navigate("AddTask")}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Task title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <TouchableOpacity
        style={styles.button}
        // disabled={!taskTitle.trim()}
        onPress={() => addTask(taskTitle)}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>

      {tasks.map((task, index) => (
        <Text key={index} style={styles.text}>{task}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "seagreen",
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: "gray",
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
    margin: 16,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
    margin: "auto",
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default TaskListScreen;
