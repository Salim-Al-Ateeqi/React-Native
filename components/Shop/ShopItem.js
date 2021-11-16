import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { HStack } from "native-base";
import { baseURL } from "../../stores/instance";

const ShopItem = ({ shop, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ShopDetail"), { shop: shop };
        console.log("click");
      }}
    >
      <HStack w="100%" alignItems="center" space="3">
        <Image
          source={{
            uri: baseURL + shop.image,
          }}
          alt="image"
          style={{ width: 100, height: 100 }}
        />
        <Text>{shop.name}</Text>
      </HStack>
    </TouchableOpacity>
  );
};

export default ShopItem;

const styles = StyleSheet.create({});
