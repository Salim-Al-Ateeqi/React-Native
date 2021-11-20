import { observer } from "mobx-react";
import { Button } from "native-base";
import React from "react";
import { View, Alert } from "react-native";
import authStore from "../../stores/authStore";
import cartStore from "../../stores/cartStore";
import CartItem from "./CartItem";

const Cart = ({ navigation }) => {
  const cartList = cartStore.items.map((item) => (
    <CartItem key={item.product._id} item={item} />
  ));

  const handleCheckout = () => {
    if (authStore.user) {
      cartStore.checkout();
    } else {
      Alert.alert("Sign-in", "Please sign-in to checkout!", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Sign-in", onPress: () => navigation.navigate("Signin") },
      ]);
    }
  };

  return (
    <View>
      {cartList}
      <Button onPress={handleCheckout}>Checkout</Button>
    </View>
  );
};

export default observer(Cart);
