import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC8lla4qbQEPkLwnPOd-NPo6LwAdy-KIgk",
  authDomain: "ecommerce-db-f29aa.firebaseapp.com",
  databaseURL: "https://ecommerce-db-f29aa.firebaseio.com",
  projectId: "ecommerce-db-f29aa",
  storageBucket: "ecommerce-db-f29aa.appspot.com",
  messagingSenderId: "859751530185",
  appId: "1:859751530185:web:1e7c128e4c47d3dfd01718",
  measurementId: "G-LSBJC2FC1K",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
