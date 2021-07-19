const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyDHCfk-EgfTGvB84zwQhfnmtnXflkdpMLw",
    authDomain: "todo-list-cddfd.firebaseapp.com",
    projectId: "todo-list-cddfd",
    storageBucket: "todo-list-cddfd.appspot.com",
    messagingSenderId: "941346005257",
    appId: "1:941346005257:web:7610ad8f3d63e6b5f7b3d8",
    measurementId: "G-X5NL0M5PCR"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;

