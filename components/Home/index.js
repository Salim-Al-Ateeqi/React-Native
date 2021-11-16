import { Button, Text } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.flexi}>Welcome to the Homepage</Text>
      <Button onPress={() => navigation.navigate("ShopList")}>Hellooo</Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flexi: {
    display: "flex",
  },
});
