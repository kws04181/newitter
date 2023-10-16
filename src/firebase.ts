import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeF7kT_mJOleAirbwIq9H7KUOtBW9iDOQ",
  authDomain: "nwitter-75fde.firebaseapp.com",
  projectId: "nwitter-75fde",
  storageBucket: "nwitter-75fde.appspot.com",
  messagingSenderId: "1073340562565",
  appId: "1:1073340562565:web:80dc2c23f4c396c1277dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app); 