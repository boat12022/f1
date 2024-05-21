import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyADXgCjnwr4K2kdgw72SylakzcMHlQJwLM",
    authDomain: "b123-f39b6.firebaseapp.com",
    projectId: "b123-f39b6",
    storageBucket: "b123-f39b6.appspot.com",
    messagingSenderId: "767641630260",
    appId: "1:767641630260:web:9a507baba2c902db5d7c61",
    measurementId: "G-X2XDJQTYEJ"
};

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'books');

getDocs(colRef)
    .then((snapshot) => {
        console,log(snapshot.docs);
    });