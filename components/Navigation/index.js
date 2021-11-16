import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../Shop";
import ShopDetail from "../Shop/ShopDetail";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="ShopList">
      <Screen name="Home" component={Home} />
      <Screen name="ShopList" component={ShopList} />
      <Screen name="ShopDetail" component={ShopDetail} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
