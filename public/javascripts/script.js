var client = io();

document.forms[0].onsubmit = function(e){
    var input = document.getElementById('message');
    // emits a 'chat' event which is then listened for on the backend
    client.emit('chat', input.value);
    input.value = '';
    return false;
};

client.on('message',(message)=>{
    var li = document.createElement('li');
    li.innerText = message;
    document.querySelector("ul#messages").appendChild(li);
});