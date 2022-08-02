
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

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

  export const Registrar = () => {
    const registrar = document.createElement('section')
    registrar.className = 'registrar'
    const divRegistrar = document.createElement('div')
    const ingresarDatos = document.createElement('p')
    const username = document.createElement('input')
  username.className = 'username'
  username.id = 'username'
  username.placeholder = ' Nombre de usuario'
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
    divRegistrar.appendChild(username)
    divRegistrar.appendChild(inputCorreo)
    divRegistrar.appendChild(inputContrasenia)
    divRegistrar.appendChild(btnRegistrar)
  
    //creaar nuevo usuario
    btnRegistrar.addEventListener('click', (e) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          set(ref(database, 'users/' + user.uid), {
            username: username,
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
  
    return registrar;
  }