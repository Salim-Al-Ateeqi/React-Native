import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShopItem = ({ shop }) => {
  return (
    <View>
      <Text>{shop.name}</Text>
    </View>
  );
};

export default ShopItem;

const styles = StyleSheet.create({});
