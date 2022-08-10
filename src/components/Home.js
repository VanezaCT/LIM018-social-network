import { onNavegate } from "../main.js"
export const Home = () => {
    const HomeNav = document.createElement('header')
    HomeNav.className = 'nav'
    const optionsNav = document.createElement('div')
    optionsNav.className = 'options'
    const titulo = document.createElement('h1')
    titulo.className = 'titulo'
    const inicio = document.createElement('p')
    const btnIngresar = document.createElement('button')
    btnIngresar.className = 'btningresar'
  
    titulo.textContent = 'Student View'
    inicio.textContent = 'Inicio'
    btnIngresar.textContent = 'Ingresar'
  
    btnIngresar.addEventListener('click', () => onNavegate('/Login'))
    inicio.addEventListener('click',()=> onNavegate('/') )
  
    HomeNav.appendChild(titulo)
    HomeNav.appendChild(optionsNav)
    optionsNav.appendChild(inicio)
    optionsNav.appendChild(btnIngresar)
  
    return HomeNav;
  }
  