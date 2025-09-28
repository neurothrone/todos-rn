import { Button, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { MaterialIcons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <>
      <View>
        <MaterialIcons name="task" size={24} color="green"/>
        <Button
          title="See your Tasks"
          onPress={() => navigation.navigate("TaskList")}
        />
      </View>
    </>
  );
}

export default HomeScreen;
