import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, View } from "react-native";
import shopStore from "../../stores/shopStore";
import ShopItem from "./ShopItem";
import { Spinner } from "native-base";

const ShopList = ({ navigation }) => {
  if (shopStore.isLoading) {
    return <Spinner />;
  }

  const shopList = shopStore.shops.map((shop) => (
    <ShopItem navigation={navigation} shop={shop} key={shop._id} />
  ));
  return <View>{shopList}</View>;
};

export default observer(ShopList);

const styles = StyleSheet.create({});
