// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFh6T7PG55aohwp0C68wg8DLeaQlyCJYU",
  authDomain: "baku-store.firebaseapp.com",
  projectId: "baku-store",
  storageBucket: "baku-store.appspot.com",
  messagingSenderId: "246842881908",
  appId: "1:246842881908:web:05b74e2c16f6fda2459e21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
