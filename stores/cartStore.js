import { makeAutoObservable } from "mobx";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItemToCart = (product, quantity) => {
    const foundItem = this.items.find(
      (item) => item.product._id === product._id
    );

    if (foundItem) {
      foundItem.quantity = quantity;
    } else {
      const newItem = { product: product, quantity: quantity };
      this.items.push(newItem);
    }
  };

  removeItemFromCart = (productId) => {
    const removedItem = this.items.filter(
      (item) => item.product._id !== productId
    );
    this.items = removedItem;
  };

  get totalQuantity() {
    let total = 0;

    this.items.forEach((item) => (total = total + item.quantity));

    return total;
  }
}

const cartStore = new CartStore();
export default cartStore;
