import React, { Component } from "react";
import { Header, Icon, Badge } from "react-native-elements";

export default class MyHeader extends Component {
  render() {
    return (
      <Header
        centerComponent={{
          text: props.title,
          style: { color: "#90A5A9", fontSize: 20, fontWeight: "bold" },
        }}
        backgroundColor="#eaf8fe"
      />
    );
  }
}
