import { Text, Button } from "native-base";
import React from "react";
import { StyleSheet, View, Alert } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Welcome to the Homepage</Text>
      <Button
        onPress={() => {
          Alert.alert("Displaying Shop List");
        }}
      >
        Shops List
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
