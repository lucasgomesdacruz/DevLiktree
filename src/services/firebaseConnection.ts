import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGuLXPlWzpd6Qho0ithPyJ07R-Hi4p77U",
  authDomain: "reactlinks-d8dc6.firebaseapp.com",
  projectId: "reactlinks-d8dc6",
  storageBucket: "reactlinks-d8dc6.appspot.com",
  messagingSenderId: "14941284825",
  appId: "1:14941284825:web:d01482b56e96de7a0f91c8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db };