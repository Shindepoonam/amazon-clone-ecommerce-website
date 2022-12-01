import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkZIdlxiyqkpcZRp7Zev4arSELoIY7fUc",
  authDomain: "e-coomerce-17406.firebaseapp.com",
  databaseURL: "https://e-coomerce-17406-default-rtdb.firebaseio.com",
  projectId: "e-coomerce-17406",
  storageBucket: "e-coomerce-17406.appspot.com",
  messagingSenderId: "1432238020",
  appId: "1:1432238020:web:2a09ae2cf9a41a77641691",
  measurementId: "G-XHLNE5WLJM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };