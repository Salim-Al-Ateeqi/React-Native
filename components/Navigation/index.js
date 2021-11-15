import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../Shop";

const Navigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <View>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="ShopList" component={ShopList} />
        {/* <Screen name="ShopDetail" component={ShopDetail} /> */}
      </Navigator>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
