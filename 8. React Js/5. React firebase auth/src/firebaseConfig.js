import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuWU7vXI2b6Q3Y87rFod6EjkpMq7XwoAI",
  authDomain: "react-firebase-auth-2024-43a89.firebaseapp.com",
  projectId: "react-firebase-auth-2024-43a89",
  storageBucket: "react-firebase-auth-2024-43a89.appspot.com",
  messagingSenderId: "840471156070",
  appId: "1:840471156070:web:9b3c2d24d88dbb9e5724a7",
  measurementId: "G-K27VH4WM27",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
