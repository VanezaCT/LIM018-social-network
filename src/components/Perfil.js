import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

export const Perfil = () => {
    const sectionPerfil = document.createElement('section')
    sectionPerfil.classList = 'sectionPerfil'
    const sectionContPerfil = document.createElement('section')
    sectionContPerfil.className = 'sectionContPerfil'
    const divPerfil = document.createElement('div')
    divPerfil.className = 'divPerfil'
    const datosPerfil=document.createElement('div')
    datosPerfil.className='datosPerfil'
    const divPublicaciones = document.createElement('div')
    divPublicaciones.className = 'divPublicaciones'
    const btnPublicar=document.createElement('button')
    btnPublicar.id=' btnPublicar'
    btnPublicar.textContent='Publicar Contenido'

    let name = document.createElement('p')
    name.className='name'
    let email = document.createElement('p')
    email.className='email'
    

    sectionPerfil.appendChild(sectionContPerfil)
    //perfil
    sectionContPerfil.appendChild(divPerfil)
    divPerfil.appendChild(datosPerfil)
    datosPerfil.appendChild(photo)
    datosPerfil.appendChild(name)
    datosPerfil.appendChild(email)

    //publicaciones
    sectionContPerfil.appendChild(divPublicaciones)
    divPublicaciones.appendChild(btnPublicar)
    


    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {

        if (user !== null) {

              // photo.src = user.photoURL
                name.textContent = user.displayName
                email.textContent = user.email
            console.log(user);
            }
        
        else {
            // User is signed out
            // ...
        }
    });
    return sectionPerfil;

}