// import { StatusBar } from 'expo-status-bar';
// import mainStyle from "./ui/styles/main-style";
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./ui/screens/HomeScreen";
import TodoListScreen from "./ui/screens/TodoListScreen";
import AddTodoScreen from "./ui/screens/AddTodoScreen";
import TodoDetailScreen from "./ui/screens/TodoDetailScreen";
import { RootStackParamList } from "./ui/navigation";


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="TodoList" component={TodoListScreen}/>
      <Stack.Screen name="AddTodo" component={AddTodoScreen}/>
      <Stack.Screen name="TodoDetail" component={TodoDetailScreen}/>
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
