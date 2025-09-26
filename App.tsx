// import { StatusBar } from 'expo-status-bar';
// import mainStyle from "./ui/styles/main-style";
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./ui/screens/HomeScreen";
import TaskListScreen from "./ui/screens/TaskListScreen";
import AddTaskScreen from "./ui/screens/AddTaskScreen";
import TaskDetailScreen from "./ui/screens/TaskDetailScreen";
import { RootStackParamList } from "./ui/navigation";


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="TaskList" component={TaskListScreen}/>
      <Stack.Screen name="AddTask" component={AddTaskScreen}/>
      <Stack.Screen name="TaskDetail" component={TaskDetailScreen}/>
    </Stack.Navigator>
  );
}

const App = () => {
  const handleClick = (value: number) => {
    console.warn(value);
  }

  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
    // <>
    //   <View style={[mainStyle.container, styles.container]}>
    //     <Text style={[styles.text, { fontSize: 30 }]}>Todos</Text>
    //     <Button
    //       color="purple"
    //       title="Click Me"
    //       onPress={() => handleClick(7)}
    //     />
    //   </View>
    // </>
    // {<View style={styles.container}>}
    //   {/*<Text>Todos</Text>*/}
    //   {/*<StatusBar style="auto"/>*/}
    // {/*</View>*/}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "purple",
  }
});

export default App;
