// aqui exportaras las funciones que necesite

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js";
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';
//import { async } from "regenerator-runtime";

const firebaseConfig = {
  apiKey: "AIzaSyDRS2C37ANdYaeIPfM3LzFPK4gqL3UY_P4",
  authDomain: "redsocial-67cea.firebaseapp.com",
  databaseURL: "https://redsocial-67cea-default-rtdb.firebaseio.com",
  projectId: "redsocial-67cea",
  storageBucket: "redsocial-67cea.appspot.com",
  messagingSenderId: "708516769517",
  appId: "1:708516769517:web:1fb0a6e5f15036893626e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const database = getDatabase(app);
const auth = getAuth();
const storage = getStorage(app);
const database = getFirestore(app);


export async function getAll(){
    console.log("todos los usuarios");
    const allUser= await database.collection("users").orderBy("username","desc")//.get();
    console.log(allUser);
   allUser.forEach(user => {
        console.log(`Id=>${user.id}`);
        console.log(user.data());
    });
  }


