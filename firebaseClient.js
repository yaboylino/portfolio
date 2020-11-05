const firebase = require("firebase")

const FIREBASE_CONFIG = {
  // Your web app's Firebase configuratio
  apiKey: "AIzaSyCIsMBRYE31FYGsUv5XZkfdPFbfBylbf3E",
  authDomain: "auth-52105.firebaseapp.com",
  databaseURL: "https://auth-52105.firebaseio.com",
  projectId: "auth-52105",
  storageBucket: "auth-52105.appspot.com",
  messagingSenderId: "488133716822",
  appId: "1:488133716822:web:7df5798ac935653f8ec4f7"
}

export default function firebaseClient() {
  if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(FIREBASE_CONFIG)
  }
}
