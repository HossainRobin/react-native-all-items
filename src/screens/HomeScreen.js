import { View, StyleSheet, ActivityIndicator, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <ActivityIndicator color={"green"} size={"large"} />
      <Button
        title="Click here"
        color={"green"}
        onPress={() => alert("Button clicked")}
        // disabled
      />
    </View>
  );
};

export default HomeScreen;
