import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyA_ytQnn9AaQr587Am3hBsAlKIolFJXtZQ",
    authDomain: "e-ride-8a923.firebaseapp.com",
    projectId: "e-ride-8a923",
    storageBucket: "e-ride-8a923.appspot.com",
    messagingSenderId: "468551838234",
    appId: "1:468551838234:web:92f7296e24a9f1fad33fa3"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
