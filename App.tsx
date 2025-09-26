import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const handleClick = (value: number) => {
    console.warn(value);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Todos</Text>
        <Button title="Click Me" onPress={() => handleClick(7)}/>
      </View>
    </>
    // {<View style={styles.container}>}
    //   {/*<Text>Todos</Text>*/}
    //   {/*<StatusBar style="auto"/>*/}
    // {/*</View>*/}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "purple",
  }
});

export default App;
