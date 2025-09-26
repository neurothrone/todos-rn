import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import mainStyle from "./ui/styles/main-style";

const App = () => {
  const handleClick = (value: number) => {
    console.warn(value);
  }

  return (
    <>
      <View style={[mainStyle.container, styles.container]}>
        <Text style={[styles.text, { fontSize: 30 }]}>Todos</Text>
        <Button
          color="purple"
          title="Click Me"
          onPress={() => handleClick(7)}
        />
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
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "purple",
  }
});

export default App;
