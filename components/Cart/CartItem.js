import React, { useState } from "react";
import { Text } from "react-native";
import { Button, HStack, Image, VStack } from "native-base";
import { baseURL } from "../../stores/instance";
import NumericInput from "react-native-numeric-input";
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleAdd = (value) => {
    setQuantity(value);
    cartStore.addItemToCart(item.product, value);
  };

  const handleDelete = () => {
    cartStore.removeItemFromCart(item.product._id);
  };

  return (
    <HStack w="100%" alignItems="center" space="3">
      <Image
        source={{
          uri: baseURL + item.product.image,
        }}
        alt="image"
        style={{ width: 100, height: 100 }}
      />
      <VStack>
        <Text bold>{item.product.name}:</Text>
        <Text>{item.quantity} </Text>
        <Text bold>Total Price:</Text>
        <Text>{item.quantity * item.product.price} KD</Text>
      </VStack>
      <VStack>
        <NumericInput
          totalWidth={80}
          totalHeight={30}
          minValue={1}
          maxValue={item.product.quantity}
          textColor="green"
          value={quantity}
          onChange={(value) => handleAdd(value)}
        />
        <Button onPress={handleAdd}>Add</Button>
        <Button onPress={handleDelete}>Delete</Button>
      </VStack>
    </HStack>
  );
};

export default observer(CartItem);
