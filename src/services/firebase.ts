import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6_G7VrKOYJnfNSiMguM56-krY6JDHaZU",
  authDomain: "anallyzer-backend.firebaseapp.com",
  projectId: "anallyzer-backend",
  storageBucket: "anallyzer-backend.appspot.com",
  messagingSenderId: "542399931138",
  appId: "1:542399931138:web:db4a6012e8e3a5dbaf581b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db, doc, setDoc, addDoc, collection } 