import React from "react";
import { Pressable, Text } from "react-native";
import { HStack, Image } from "native-base";
import { baseURL } from "../../stores/instance";

const ShopItem = ({ shop, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ShopDetail", { shop: shop });
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
    </Pressable>
  );
};

export default ShopItem;
