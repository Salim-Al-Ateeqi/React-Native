import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../Shop";
import ShopDetail from "../ShopDetail";
import CartList from "../Cart";
import CartIcon from "../Icons/Cart";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";

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
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "#1784b2",
          },
          headerRight: () => <CartIcon navigation={navigation} />,
        })}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ navigation, route }) => {
          return {
            headerStyle: {
              backgroundColor: "#356290",
            },
            title: route.params.shop.name,
            headerRight: () => <CartIcon navigation={navigation} />,
          };
        }}
      />
      <Screen
        name="CartList"
        component={CartList}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};

export default RootNavigator;
