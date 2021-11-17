import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { baseURL } from "../../stores/instance";
import NumericInput from "react-native-numeric-input";
import { HStack } from "native-base";
import cartStore from "../../stores/cartStore";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = (value) => {
    cartStore.addItemToCart(product, value);
    setQuantity(value);
  };
  return (
    <View>
      <HStack>
        <Image
          source={{
            uri: baseURL + product.image,
          }}
          alt="image"
          style={{ width: 100, height: 100 }}
        />
        <Text>{product.name}</Text>
        <NumericInput
          totalWidth={80}
          totalHeight={30}
          minValue={1}
          maxValue={product.quantity}
          textColor="green"
          value={quantity}
          onChange={(value) => handleAdd(value)}
        />
      </HStack>
    </View>
  );
};

export default ProductItem;
