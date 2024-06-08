import { View, Text, StyleSheet } from "react-native";
import React from "react";
import appStyles from "./../utility/AppStyles";

const Card = (props) => {
  const name = props.name;
  return (
    <View>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Text style={styles.textBox}>Subtitle</Text>
      <Text style={appStyles.cardBox}>More title</Text>
      <Text style={[appStyles.cardBox, styles.textBox, { marginTop: 20 }]}>
        New all text
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    fontSize: 25,
    color: "green",
    backgroundColor: "lightgray",
    padding: 15,
    height: 100,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default Card;
