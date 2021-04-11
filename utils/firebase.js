import firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBNO8OrzITqSGvYhm0UwM0-ZHTJ9Ibo6-w",
    authDomain: "scheduler-tutorial.firebaseapp.com",
    databaseURL: "https://scheduler-tutorial-default-rtdb.firebaseio.com",
    projectId: "scheduler-tutorial",
    storageBucket: "scheduler-tutorial.appspot.com",
    messagingSenderId: "626064118537",
    appId: "1:626064118537:web:b4045b8746a29e70eef9d8",
    measurementId: "G-KB49PBNXHW"
};

firebase.initializeApp(firebaseConfig);

export { firebase };