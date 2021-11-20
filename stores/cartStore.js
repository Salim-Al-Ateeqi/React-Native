import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable } from "mobx";
import { Alert } from "react-native";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCart = async () => {
    try {
      const cart = await AsyncStorage.getItem("myCart");
      this.items = cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.log(
        "🚀 ~ file: cartStore.js ~ line 42 ~ CartStore ~ fetchCart= ~ error",
        error
      );
    }
  };

  addItemToCart = async (product, quantity) => {
    const foundItem = this.items.find(
      (item) => item.product._id === product._id
    );

    if (foundItem) {
      foundItem.quantity = quantity;
    } else {
      const newItem = { product: product, quantity: quantity };
      this.items.push(newItem);
    }

    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  removeItemFromCart = async (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  checkout = async () => {
    this.items.splice(0, this.items.length);
    await AsyncStorage.removeItem("myCart");
    return Alert.alert("Thank you for your purchase!");
  };

  get totalQuantity() {
    let total = 0;

    this.items.forEach((item) => (total = total + item.quantity));

    return total;
  }
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
