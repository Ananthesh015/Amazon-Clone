import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPDquZMKNyNFxjPVs-eRAC_URXtN8bZfE",
  authDomain: "clone-6ae17.firebaseapp.com",
  databaseURL: "https://clone-6ae17.firebaseio.com",
  projectId: "clone-6ae17",
  storageBucket: "clone-6ae17.appspot.com",
  messagingSenderId: "306067356007",
  appId: "1:306067356007:web:aa7414f871194bc21297c2",
  measurementId: "G-6ZN11D3Y96"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
  
export { db, auth };