import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CU</Text>
        <Image source={require('./src/biscoito.png')} style={styles.img}/>
        <Text>Terceito olho Inexplorado</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },

  img: {
    width: 250,
    height: 250,
  },
});

export default App;
