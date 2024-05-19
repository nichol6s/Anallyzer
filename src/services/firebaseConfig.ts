import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8fHx_kTcfaVsMp_7ATKEeHvKW6nynvkA",
    authDomain: "anallyzer-backend-e3546.firebaseapp.com",
    projectId: "anallyzer-backend-e3546",
    storageBucket: "anallyzer-backend-e3546.appspot.com",
    messagingSenderId: "184381103311",
    appId: "1:184381103311:web:0e6b843fd5e19787442bba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };