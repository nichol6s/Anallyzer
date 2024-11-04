import { initializeApp } from "firebase/app"
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import AsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
	apiKey: "AIzaSyD8fHx_kTcfaVsMp_7ATKEeHvKW6nynvkA",
	authDomain: "anallyzer-backend-e3546.firebaseapp.com",
	projectId: "anallyzer-backend-e3546",
	storageBucket: "anallyzer-backend-e3546.appspot.com",
	messagingSenderId: "184381103311",
	appId: "1:184381103311:web:0e6b843fd5e19787442bba",
}

const app = initializeApp(firebaseConfig)

// Use `initializeAuth` para inicializar o Auth com `AsyncStorage`
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
})

const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }
