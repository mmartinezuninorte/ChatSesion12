const socket = io()

//DOM elementos
let message = document.getElementById('message')
let username = document.getElementById('username')
let button = document.getElementById('send')
let output = document.getElementById('output')
let actions = document.getElementById('actions')

//Envia un mensaje
button.addEventListener('click',()=>{
    socket.emit('chatmensaje', {
        message: message.value,
        username: username.value
    })
})

//Detectar escritura de mensaje
message.addEventListener('keypress',()=>{
    socket.emit('escribiendoChat', username.value)
})

socket.on('mensajeServidor',(data)=>{
    actions.innerHTML = ''
    output.innerHTML += `<p>
     ${data.username} : ${data.message} 
     </p>`
})

socket.on('escribiendoServidor',(data)=>{
    actions.innerHTML = `<p>
        ${data} esta escribiendo...
    </p>`
})