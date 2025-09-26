import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'AddTodo'>;

const AddTodoScreen = ({ route, navigation }: Props) => {
  return (
    <>
      <View>
        <Text style={styles.text}>Add Task</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "seagreen",
  }
});

export default AddTodoScreen;
