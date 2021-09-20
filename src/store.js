import firebase from "firebase";

const store = {
  products: {},

  getData() {
    // debugger
    const db = firebase.database();
    const products = db.ref("products");
    products.on("value", (elem) => (this.products = elem.val()));
    console.log(Object.values(store.products));
    return Object.values(store.products);
  },
};

export default store;
