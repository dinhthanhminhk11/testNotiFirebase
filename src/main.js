import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Pet from './router/pet'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const app = express()

app.use(express.json())
app.use(cors())
const server = app.listen(process.env.PORT, () => {
    console.log(`connected port ${process.env.PORT}`)
})

app.use('/api', Pet)



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW_rLJY59aHf-Shepr3ieUY12c7INlUZo",
  authDomain: "demochatfirebase-2a209.firebaseapp.com",
  databaseURL: "https://demochatfirebase-2a209-default-rtdb.firebaseio.com",
  projectId: "demochatfirebase-2a209",
  storageBucket: "demochatfirebase-2a209.appspot.com",
  messagingSenderId: "600361562209",
  appId: "1:600361562209:web:8d59e3a4e0a4dfe9ec7a20",
  measurementId: "G-X5DLV5QBTX"
};

const appFireBase = initializeApp(firebaseConfig);
const db = getFirestore(appFireBase);

async function getCities(db) {
    const citiesCol = collection(db, 'Messages');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

