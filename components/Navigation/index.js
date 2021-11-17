import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../Shop";
import ShopDetail from "../ShopDetail";

const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#50bfc3",
          },
        }}
      />
      <Screen
        name="ShopList"
        component={ShopList}
        options={{
          headerStyle: {
            backgroundColor: "#1784b2",
          },
        }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={
          (({ route }) => {
            const { shop } = route.params;
            return {
              title: shop.name,
            };
          },
          {
            headerStyle: {
              backgroundColor: "#356290",
            },
          })
        }
      />
    </Navigator>
  );
};

export default RootNavigator;
