const socket = io('http://localhost:8000');

const from = document.getElementById('send-cointain');
const messageInput = document.getElementById('massageInp');
const massageContainer = document.querySelector(".cointner")

const append = (message, position)=>{
    const messageElemant = document.createElement('div');
    messageElemant.innerText = message;
    messageElemant.classList.add(position);
    messageContainer.append(messageElemant);

}

const name = prompt("Enter your name ")
socket.emit('new-user-joined',name);

socket.on('user-joined',name=>{
append(`${name} joined the chat`,'right');
});