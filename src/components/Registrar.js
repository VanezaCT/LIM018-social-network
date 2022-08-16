
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-storage.js";


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
const storage = getStorage(app);
//const storageRef = ref(storage);

export const Registrar = () => {
  const registrar = document.createElement('section')
  registrar.className = 'registrar'
  const divRegistrar = document.createElement('div')
  const ingresarDatos = document.createElement('p')
  const photoPerfil=document.createElement('input')
  photoPerfil.id='photoPerfil'
  photoPerfil.type='file'
  const userName = document.createElement('input')
  userName.className = 'userName'
  userName.id = 'userName'
  userName.placeholder = ' Nombre de usuario'
  const inputCorreo = document.createElement('input')
  inputCorreo.className = 'inputCorreo'
  inputCorreo.id = 'inputCorreo'
  inputCorreo.placeholder = ' Ingresar tu correo'
  const inputContrasenia = document.createElement('input')
  inputContrasenia.className = 'inputContrasenia'
  inputContrasenia.id = 'inputContrasenia'
  inputContrasenia.placeholder = ' Ingresar tu contraseña'
  const btnRegistrar = document.createElement('button')
  btnRegistrar.className = 'btnRegistrar'

  ingresarDatos.textContent = 'Ingresa tus datos:'
  btnRegistrar.textContent = 'Registrar'

  registrar.appendChild(ingresarDatos)
  registrar.appendChild(divRegistrar)
  divRegistrar.appendChild(photoPerfil)
  divRegistrar.appendChild(userName)
  divRegistrar.appendChild(inputCorreo)
  divRegistrar.appendChild(inputContrasenia)
  divRegistrar.appendChild(btnRegistrar)

  //creaar nuevo usuario
  btnRegistrar.addEventListener('click', (e) => {
    let email = document.getElementById('inputCorreo').value;
let password = document.getElementById('inputContrasenia').value;
let userName = document.getElementById('userName').value
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
       set(ref(database, 'users/' + user.uid), {
         user: userName,
         email: email
          
        })
        console.log(userCredential);
        alert('Usuario creado')
        sendEmailVerification();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage)
      });
  })

  sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });

  return registrar;
}