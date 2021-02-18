import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyHeader from "../components/MyHeader";

export default class SearchScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyHeader title="Home" />
        <Text>Hello this is Search Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
