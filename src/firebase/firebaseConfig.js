import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKG6OS8GmRb6fam_8KwmsGShoNvJBtOpM",
  authDomain: "contactdb-7d318.firebaseapp.com",
  databaseURL: "https://contactdb-7d318-default-rtdb.firebaseio.com",
  projectId: "contactdb-7d318",
  storageBucket: "contactdb-7d318.appspot.com",
  messagingSenderId: "443215298208",
  appId: "1:443215298208:web:d67136a8476df3d6a1d3c5"
};

 const app =initializeApp(firebaseConfig);
 const db = getFirestore(app);

 export {
  db
 }