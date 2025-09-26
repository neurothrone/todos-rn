import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskList'>;

const TaskListScreen = ({ route, navigation }: Props) => {

  return (
    <>
      <View>
        <Text style={styles.text}>Tasks</Text>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "seagreen",
  }
});

export default TaskListScreen;
