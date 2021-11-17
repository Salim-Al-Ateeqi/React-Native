import { observer } from "mobx-react";
import React from "react";
import { View } from "react-native";
import cartStore from "../../stores/cartStore";
import CartItem from "./CartItem";

const Cart = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem key={item.product._id} item={item} />
  ));
  return <View>{cartList}</View>;
};

export default observer(Cart);
