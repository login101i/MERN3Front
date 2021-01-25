// import * as firebase from "firebase/app"; // old way, wont work anymore
import firebase from "firebase/app";
import "firebase/auth";


// firebase config
var firebaseConfig = {
  apiKey: "AIzaSyDcLaPqHqUB-kcGpS0ov95yj6BzhfmtpDo",
  authDomain: "ecommerce-mern3.firebaseapp.com",
  projectId: "ecommerce-mern3",
  storageBucket: "ecommerce-mern3.appspot.com",
  messagingSenderId: "502808569334",
  appId: "1:502808569334:web:6dc3fe5c7d4f52cb2a13d7",
  measurementId: "G-4D1KKHM7YY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();