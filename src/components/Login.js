import { onNavegate } from "../main.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";


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
  const provider = new GoogleAuthProvider();

  export const Login = () => {
    const inicioLogin = document.createElement('section')
    inicioLogin.className = 'inicioLogin'
    inicioLogin.id = 'inicioLogin'
    const titulo = document.createElement('h1')
    titulo.className = 'titulo'
    const imgInicio = document.createElement('img')
    imgInicio.className = 'imgInicio'
    imgInicio.src = './img/imgInicio.png'
    const ingresa = document.createElement('p')
    const inputCorreo = document.createElement('input')
    inputCorreo.className = 'inputCorreo'
    inputCorreo.id = 'loginCorreo'
    inputCorreo.placeholder = ' Ingresar tu correo'
    const inputContrasenia = document.createElement('input')
    inputContrasenia.className = 'inputContrasenia'
    inputContrasenia.id = 'loginContrasenia'
    inputContrasenia.placeholder = ' Ingresar tu contraseña'
    const btnIniciarSesion = document.createElement('button')
    btnIniciarSesion.className = 'iniciarSesion'
    btnIniciarSesion.id = 'btnIniciarSesion'
    const textCuenta = document.createElement('p')
    textCuenta.className = 'textRegistro'
    const btnRegistrate = document.createElement('button')
    btnRegistrate.className = 'btnRegistrate'
    btnRegistrate.id = 'btnRegistrate'
    const btnGoogle = document.createElement('button')
    btnGoogle.className = 'btnGoogle'
    btnGoogle.id = 'btnGoogle'
  
    titulo.textContent = 'Student View'
    ingresa.textContent = 'Ingresa:'
    btnIniciarSesion.textContent = 'Iniciar sesión'
    textCuenta.textContent = '¿No tienes cuenta?,'
    btnRegistrate.textContent = 'Registrate'
    btnGoogle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px"height="48px"><path fill="#FFC107"d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00"d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50"d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2"d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>' + 'Continuar con Google'
  
    btnRegistrate.addEventListener('click', () => onNavegate('/Registrar'))
  
    inicioLogin.appendChild(titulo)
    inicioLogin.appendChild(imgInicio)
    inicioLogin.appendChild(ingresa)
    inicioLogin.appendChild(inputCorreo)
    inicioLogin.appendChild(inputContrasenia)
    inicioLogin.appendChild(btnIniciarSesion)
    inicioLogin.appendChild(textCuenta)
    textCuenta.appendChild(btnRegistrate)
    inicioLogin.appendChild(btnGoogle)
  
    //login con usuario ya registrado
    btnIniciarSesion.addEventListener('click', (e) => {
      let email = document.getElementById('loginCorreo').value;
let password = document.getElementById('loginContrasenia').value;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          let dt = new Date();
          update(ref(database, 'users/' + user.uid), {
            last_login: dt,
          })
          alert('Usuario correcto')
          return onNavegate('/Perfil');
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
        });
    })
    
  //registrar con google

  btnGoogle.addEventListener('click', (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        set(ref(database, 'users/' + user.uid), {

        })
        alert('Usuario creado')
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

  return inicioLogin;
}
