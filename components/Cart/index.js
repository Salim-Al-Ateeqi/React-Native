import { observer } from "mobx-react";
import { Button } from "native-base";
import React from "react";
import { View } from "react-native";
import cartStore from "../../stores/cartStore";
import CartItem from "./CartItem";

const Cart = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem key={item.product._id} item={item} />
  ));

  const handleCheckout = () => {
    cartStore.checkout();
  };

  return (
    <View>
      {cartList}
      <Button onPress={handleCheckout}>Checkout</Button>
    </View>
  );
};

export default observer(Cart);
