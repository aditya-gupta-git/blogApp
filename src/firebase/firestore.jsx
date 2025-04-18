
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAncjZtnzZvSb1lplofW_wMGsGKlIRx29c",
  authDomain: "hello-9a4a1.firebaseapp.com",
  projectId: "hello-9a4a1",
  storageBucket: "hello-9a4a1.firebasestorage.app",
  messagingSenderId: "79255568906",
  appId: "1:79255568906:web:34b35d6a591c73f79015f3",
  measurementId: "G-7ZJBQWFP1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
