
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC3XRYi3IQriDWaOPkzbZucHfIo9Jlr2Q",
  authDomain: "siteveterinaria-8a47a.firebaseapp.com",
  projectId: "siteveterinaria-8a47a",
  storageBucket: "siteveterinaria-8a47a.appspot.com",
  messagingSenderId: "236737412965",
  appId: "1:236737412965:web:a2b7e8a336c274eb52eb8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;