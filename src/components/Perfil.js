import { getAll } from "../lib/index.js"

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
    //datosPerfil.appendChild(photo)
    datosPerfil.appendChild(name)
    datosPerfil.appendChild(email)

    //publicaciones
    sectionContPerfil.appendChild(divPublicaciones)
    divPublicaciones.appendChild(btnPublicar)
    getAll();

    return sectionPerfil;

}
