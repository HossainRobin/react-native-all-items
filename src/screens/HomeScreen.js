import {
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
  Text,
  FlatList,
  ScrollView,
  SectionList,
} from "react-native";

const HomeScreen = () => {
  const user = [
    {
      id: 1,
      name: "one",
      data: ["1", "2", "3"],
    },
    {
      id: 2,
      name: "two",
      data: ["1", "2", "3"],
    },
    {
      id: 3,
      name: "three",
      data: ["1", "2", "3"],
    },
  ];
  return (
    <View style={{ marginTop: 50 }}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={user}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={{ fontSize: 30, color: "green", marginLeft: 20 }}>
            {name}
          </Text>
        )}
        renderItem={({ item }) => <Text style={styles.gridBox}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridBox: {
    fontSize: 20,
    backgroundColor: "green",
    height: 100,
    width: 100,
    margin: 10,
  },
});

export default HomeScreen;
