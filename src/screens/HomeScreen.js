import {
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
  Text,
  FlatList,
} from "react-native";

const HomeScreen = () => {
  const user = [
    {
      id: 1,
      name: "robin",
    },
    {
      id: 2,
      name: "robin",
    },
    {
      id: 3,
      name: "robin",
    },
  ];
  return (
    <View style={{ marginTop: 50 }}>
      <ActivityIndicator color={"green"} size={"large"} />
      <Button
        title="Click here"
        color={"green"}
        onPress={() => alert("Button clicked")}
        // disabled
      />
      <FlatList
        data={user}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "#ddd",
                padding: 15,
                margin: 10,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 22 }}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
