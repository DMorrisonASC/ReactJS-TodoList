import firebase from "firebase"
const config = {
    apiKey: "AIzaSyBfKIgcdralsTcFirx40RrfbgL_APKHp3Y",
    authDomain: "react-todo-list-1d0f8.firebaseapp.com",
    databaseURL: "https://react-todo-list-1d0f8.firebaseio.com",
    projectId: "react-todo-list-1d0f8",
    storageBucket: "react-todo-list-1d0f8.appspot.com",
    messagingSenderId: "81120153975",
    appId: "1:81120153975:web:7eadb86517a58870459172",
    measurementId: "G-P1WSJDDNNW"
};
// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();
export default firebase;
