const express = require('express')
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs,
} from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const port = 3000

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "b123-f39b6.firebaseapp.com",
    projectId: "b123-f39b6",
    storageBucket: "b123-f39b6.appspot.com",
    messagingSenderId: "767641630260",
    appId: "1:767641630260:web:9a507baba2c902db5d7c61",
    measurementId: "G-X2XDJQTYEJ"
};

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'users');

// getDocs(colRef)
//     .then((snapshot) => {
//         console.log(snapshot.docs);
//     });

app.get('/', (req, res) => {
  getDocs(colRef)
    .then((snapshot) => {
        // console.log(snapshot.docs);
        let books = [];
        snapshot.docs.forEach(doc => {
          books.push({...doc.data(), id: doc.id});
        });
        console.log(books);
    })
    .catch((error) => {
      console.log(error);
    });
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})