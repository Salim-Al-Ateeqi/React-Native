import { observer } from "mobx-react";
import { Spinner, Image } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import shopStore from "../../stores/shopStore";
import { baseURL } from "../../stores/instance";
import ProductList from "../../components/ProductList";

const ShopDetail = ({ route }) => {
  const { shop } = route.params;

  if (shopStore.isLoading) {
    return <Spinner />;
  }

  return (
    <View style={styles.shopDetailWrapper}>
      <Image
        style={styles.shopDetailImage}
        source={{ uri: baseURL + shop.image }}
      />
      <Text style={styles.shopDetailTitle}>{shop.name}</Text>
      <ProductList products={shop.products} />
    </View>
  );
};
export default observer(ShopDetail);

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
