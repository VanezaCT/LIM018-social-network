// Este es el punto de entrada de tu aplicacion
import { Home } from "./components/Home.js";
import { Login } from "./components/Login.js";
import { Registrar } from "./components/Registrar.js";
import { Perfil } from "./components/Perfil.js";

const rootDiv=document.getElementById('root')

const routes={
  '/':Home,
  '/Registrar':Registrar,
  '/Login':Login,
  '/Perfil':Perfil
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
  rootDiv.appendChild(routes['/']())
  rootDiv.appendChild(routes[pathname]())
};
rootDiv.appendChild(routes[window.location.pathname]())


  