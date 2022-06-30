import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Ubra4Gi-JKg7hg7mqyp8lXpVkCQxxTw",
  authDomain: "formclassproject.firebaseapp.com",
  databaseURL: "https://formclassproject-default-rtdb.firebaseio.com",
  projectId: "formclassproject",
  storageBucket: "formclassproject.appspot.com",
  messagingSenderId: "594806060335",
  appId: "1:594806060335:web:7ae2c8d9ee90357dba9dda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app