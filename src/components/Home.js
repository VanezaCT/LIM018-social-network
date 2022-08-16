import { onNavegate } from "../main.js"
export const Home = () => {
  const homeGeneral=document.createElement('section')
    const HomeNav = document.createElement('header')
    HomeNav.className = 'nav'
    const optionsNav = document.createElement('div')
    optionsNav.className = 'options'
    const titulo = document.createElement('h1')
    titulo.className = 'titulo'
    const inicio = document.createElement('p')
    const btnIngresar = document.createElement('button')
    btnIngresar.className = 'btningresar'
    
    /*const bienvenida=document.createElement('main')
    bienvenida.className='bienvenida'
    const textBienvenida=document.createElement('p')
    textBienvenida.className='textBienvenida'
    const textRestringido=document.createElement('p')*/
  
    titulo.textContent = 'Student View'
    inicio.textContent = 'Inicio'
    btnIngresar.textContent = 'Ingresar'
   // textBienvenida.textContent='Bienvenido a la red  social  de la I.E ... donde podras estar informado de todas las actividades que se realizan en nuestra institucion, por grados y secciones de acuerdo a su preferencia '
    //bienvenida.textContent='Bienvenido a la red  social  de la I.E ... donde podras estar informado de todas las actividades que se realizan en nuestra institucion, por grados y secciones de acuerdo a su preferencia '
   // textRestringido.textContent='Acceso restringido... solo a la comunidad eduactiva'
    
    btnIngresar.addEventListener('click', () =>onNavegate('/Login'))
    inicio.addEventListener('click',()=> onNavegate('/') )
  
    homeGeneral.appendChild(HomeNav)
    HomeNav.appendChild(titulo)
    HomeNav.appendChild(optionsNav)
    optionsNav.appendChild(inicio)
    optionsNav.appendChild(btnIngresar)
    //homeGeneral.appendChild(bienvenida)
    //bienvenida.appendChild(textBienvenida)
    //bienvenida.appendChild(textRestringido)
    
  
    return homeGeneral;
  }
  