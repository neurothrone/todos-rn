import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskDetail'>;

const TaskDetailScreen = ({ route, navigation }: Props) => {
  const { taskId } = route.params;

  return (
    <>
      <View>
        <Text style={styles.text}>Task {taskId} Details</Text>
        <Button
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Go Back to Home"
          onPress={() => navigation.popToTop()}
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

export default TaskDetailScreen;
