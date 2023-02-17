import { getFirestore, collection, getDocs } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjTS5xlwCldanOzNGdLLrRyCRiQCdDNG8",
  authDomain: "rafizedu.firebaseapp.com",
  projectId: "rafizedu",
  storageBucket: "rafizedu.appspot.com",
  messagingSenderId: "317265241326",
  appId: "1:317265241326:web:db2a860f0643a5b5063fff",
  measurementId: "G-CPSRHEPL2R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
