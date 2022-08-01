// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
myFunction();

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
 import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
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
 const database = getDatabase(app);
 const auth = getAuth();

  //botones
  let btningresar=document.getElementById('btningresar')
  let inicioLogin=document.querySelector('#inicioLogin')
  inicioLogin.style.visibility='hidden'
  let registrar=document.querySelector('#registrar')
  registrar.style.visibility='hidden'
  let btnRegistrate=document.getElementById('btnRegistrate')
  btningresar.addEventListener('click',(e)=>{
    inicioLogin.style.visibility='visible';
  });
  btnRegistrate.addEventListener('click',(e)=>{
    inicioLogin.style.visibility='hidden'
    registrar.style.visibility='visible'
  })


 //creaar nuevo usuario
 let btnRegistrar = document.getElementById('btnRegistrar')  
 btnRegistrar.addEventListener('click', (e)=>{
   let email = document.getElementById('inputCorreo').value;
   let password = document.getElementById('inputContrasenia').value;
   let username = document.getElementById('username').value;
   createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
   // Signed in
   const user = userCredential.user;
   set(ref(database,'users/'+ user.uid),{
     username:username,
     email: email
   })
   alert('Usuario creado')
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   // ..
   alert(errorMessage)
 });
  })

  //login con usuario ya registrado
  let btnIniciarSesion=document.getElementById('btnIniciarSesion')
  btnIniciarSesion.addEventListener('click',(e)=>{
    let email = document.getElementById('loginCorreo').value;
    let password = document.getElementById('loginContrasenia').value;
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    let dt=new Date();
    update(ref(database,  'users/'+user.uid),{
      last_login: dt,
    })
    alert('Usuario correcto')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
  })

  //registrar con google
const provider = new GoogleAuthProvider();

let btnGoogle=document.getElementById('btnGoogle')
btnGoogle.addEventListener('click',(e)=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

})


  