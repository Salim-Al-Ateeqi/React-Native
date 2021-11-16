import React from "react";
import { StyleSheet, Text, View } from "react-native";
import shopStore from "../../stores/shopStore";

const ShopDetail = () => {
  const shop = shopStore.shops[0];
  return (
    <View style={styles.shopDetailWrapper}>
      <Image style={styles.shopDetailImage} source={{ uri: shop.image }} />
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
    </View>
  );
};
export default ShopDetail;

const styles = StyleSheet.create({
  shopDetailWrapper: {
    marginTop: 50,
  },
  shopDetailImage: {
    width: 150,
    height: 150,
  },
  shopDetailTitle: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
