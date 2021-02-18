import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import WelcomeScreen from "./screens/WelcomeScreen";
import SearchScreen from "./screens/SearchScreen";
import MyHeader from "./components/MyHeader";

export default function App() {
  // return <AppContainer />;
  <MyHeader></MyHeader>;
}
// const switchNavigator = createSwitchNavigator({
//   WelcomeScreen: {
//     screen: WelcomeScreen,
//   },
//   SearchScreen: {
//     screen: SearchScreen,
//   },
//   Drawer: {
//     screen: AppDrawerNavigator,
//   },
// });

// const AppContainer = createAppContainer(switchNavigator);
