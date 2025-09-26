import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { useEffect } from "react";

type Props = NativeStackScreenProps<RootStackParamList, 'AddTask'>;

const AddTaskScreen = ({ route, navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ marginRight: 16 }}>
          <Button
            color="magenta"
            title="Save"
            onPress={() => alert("Task Saved!")}
          />
        </View>
      )
    });
  }, [navigation]);

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

export default AddTaskScreen;
