//it is a entry point of node application socet io app
const io = require('socket.io')(8000)

const user = {}

io.on('connection',socket =>{
    socket.on('new-user-joined', name=>{
        console.log("New-user",name);
        user[socket.id] = name;
        socket.broadcast.emit('user-joined',name)
    });
    socket.on('send',Message =>{
        socket.broadcast.emit('receive',{message: message, name: user[socket.id]})
    });
})