import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();
//to get db collection in firebase
firestore
  .collection("users")
  .doc("sS6Xj880L8LEEFbeySSL")
  .collection("cartItems")
  .doc("GNqt8kq0peHFka04fdXX");
firestore.doc("/users/sS6Xj880L8LEEFbeySSL/cartItems/GNqt8kq0peHFka04fdXX");
firebase.collection("/users/sS6Xj880L8LEEFbeySSL/cartItems");
