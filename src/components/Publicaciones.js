
export  const Publicaciones = ()=>{
    const myModal = document.createElement('div')
    myModal.className='modalContainer'
    myModal.id='myModal'
    const modalContent=document.createElement('div')
    modalContent.className='modal-content'
    const close=document.createElement('span')
    close.className='close'
    close.textContent='X'
    const titulo=document.createElement('h2')
    titulo.textContent='Publicar'
    const inputText=document.createElement('input')
    inputText.type='text'

    myModal.appendChild(modalContent)
    modalContent.appendChild(close)
    modalContent.appendChild(titulo)
    modalContent.appendChild(inputText)


    console.log('hola');
    return myModal;
}