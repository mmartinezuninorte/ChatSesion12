const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'public')))

app.set('port', 8012)

const server =app.listen(app.get('port'), ()=>{
    console.log('El servidor esta disponible en el puerto ',app.get('port'))
})

//---------------------------------------------------------------------
//Socket
const socketIO = require('socket.io')
const io = socketIO(server)

io.on('connection', ()=>{
    console.log('Un usuario se ha conectado')
})