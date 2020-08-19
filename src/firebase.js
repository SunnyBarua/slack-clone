import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFRkeqqXQ4wc4W9Al4kl-REMpyegRkhFs",
  authDomain: "slack-clone-872b7.firebaseapp.com",
  databaseURL: "https://slack-clone-872b7.firebaseio.com",
  projectId: "slack-clone-872b7",
  storageBucket: "slack-clone-872b7.appspot.com",
  messagingSenderId: "920748973246",
  appId: "1:920748973246:web:9169a3e132857af8a312ef",
  measurementId: "G-K7J6EV7C3P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
