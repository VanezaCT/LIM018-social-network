// Este es el punto de entrada de tu aplicacion
import { Home } from "./components/Home.js";
import { Login } from "./components/Login.js";
import { Registrar } from "./components/Registrar.js";
import { Perfil } from "./components/Perfil.js";
import { Publicaciones } from "./components/Publicaciones.js";

const rootDiv=document.getElementById('root')
const bienvenida=document.getElementById('bienvenida')

const routes={
  '/':Home,
  '/Registrar':Registrar,
  '/Login':Login,
  '/Perfil':Perfil,
  '/Publicaciones':Publicaciones
}

export const onNavegate=(pathname)=>{
  window.history.pushState(
    {},
    pathname,
    window.location.origin+pathname,
  );
  while(rootDiv.firstChild){
    rootDiv.removeChild(rootDiv.firstChild)

  }
  if(window.location.pathname !== '/'){
  rootDiv.appendChild(routes['/']())
}
  rootDiv.appendChild(routes[pathname]())
};

if(window.location.pathname !== '/'){
  rootDiv.appendChild(routes['/']())
}
rootDiv.appendChild(routes[window.location.pathname]())


  