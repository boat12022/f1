const express = require('express')
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs,
    addDoc, doc, setDoc,
} from 'firebase/firestore';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { set } from 'firebase/database';

dotenv.config();

const app = express()
const port = 3000

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))
app.set('view engine', 'ejs');

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "greenandgray-1314f.firebaseapp.com",
  projectId: "greenandgray-1314f",
  storageBucket: "greenandgray-1314f.appspot.com",
  messagingSenderId: "338846523603",
  appId: "1:338846523603:web:386c0d143230e68b32f426",
  measurementId: "G-M5FR1NZMFC"

};


initializeApp(firebaseConfig);

const db = getFirestore();

const sellerApplicationsColRef = collection(db, 'sellerApplications');
let reviewsColRef = collection(db, "sellerApplications", "OnboardApplication", "Review");

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

app.get('/signup', (req, res) => {
  res.render("signup", {});
})

app.post('/signup', async (req, res) => {
  // var reviewID = reviewsColRef.doc().id;
  // await setDoc(doc(db, "sellerApplications", "OnboardApplication", "Review", reviewID), {
  //   name: req.body.name,
  //   email: req.body.email,
  // });
  addDoc(reviewsColRef, {
    name: req.body.name,
    email: req.body.email,
  })
  // console.log(reviewID);
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})