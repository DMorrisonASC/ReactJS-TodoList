import firebase from "firebase/app";
import "firebase/analytics"; // Uncomment if you plan to use analytics
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database"; // Uncomment if you plan to use the real-time database

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(config);

// Uncomment the following line if you plan to use analytics
// firebase.analytics();

export default firebase;
