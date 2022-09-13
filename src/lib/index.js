// aqui exportaras las funciones que necesite

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';


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

export async function mostrarUsuarios() {

  const user = auth.currentUser;
  if (user !== null) {

    const uid = user.uid;
    const docRef = doc(database, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

      console.log("Document data:", docSnap.data());
      const dataUser = docSnap.data()
      sessionStorage.setItem("dataUser",JSON.stringify(dataUser) );
      //sessionStorage.getItem("lastname");
      const name = document.getElementById('name')
      const email = document.getElementById('email')
      name.innerHTML = dataUser.username
      email.innerHTML = dataUser.email
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

  }

}

export async function almacenarPublicacion() {
  let inputpublicar = document.getElementById('inputpublicar').value
  //document.getElementById("demo").innerHTML = inputpublicar;
  const user = auth.currentUser;
  const uid = user.uid;
  const dataUser=JSON.parse(sessionStorage.getItem("dataUser"))
  const docRef = await addDoc(collection(database, "post"), {
    post: inputpublicar,
    uid: user.uid,
    username: dataUser.username
  });

}

export async function mostrarPublicacion(){

  const querySnapshot = await getDocs(collection(database, "post"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const uid = doc.id
    const dataPost=doc.data()
    //console.log(uid, " => ", dataPost);
    const post=document.getElementById('post')
    const btnEditar=document.getElementById('btnEditar')
    const btnEliminar= document.getElementById('btnEliminar')
    
      post.innerHTML= dataPost.username + ': '+ dataPost.post 
    
    
  });

}




