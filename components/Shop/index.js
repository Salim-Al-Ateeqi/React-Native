import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, View } from "react-native";
import shopStore from "../../stores/shopStore";
import ShopItem from "./ShopItem";
import { Text } from "native-base";

const ShopList = () => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} />
  ));
  return (
    <View>
      <Text>{shopList}</Text>
    </View>
  );
};

export default observer(ShopList);

const styles = StyleSheet.create({});
