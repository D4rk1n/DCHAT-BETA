const newMessage = document.querySelector(".new-message");
const newID = document.querySelector(".new-id");
const update = document.querySelector(".updates");
const rooms = document.querySelector(".chat-rooms");
const chat = document.querySelector('.chat-messages');
rooms.addEventListener('click',e => {
    if(e.srcElement.tagName==='BUTTON')
    {
        chatRoom.changeRoom(e.target.id);
        chatUI.clear();
        chatRoom.getMessages(m=>{ chatUI.view(m);})
    }
    
})
newMessage.addEventListener('submit',(e)=>{
    e.preventDefault();
    let m = newMessage.message.value.trim();
    if(m.length < 74){
    chatRoom.AddMessage(m).then(()=>{
        newMessage.reset();
    }).catch(e=>{
        console.log(e);
    }); 
}
    else {
        update.textContent = `THE MESSAGE LENGTH SHOULD BE LESS THAN 74`;
    setTimeout(()=>{
        update.textContent='';
    },3000)
    }
   
})
newID.addEventListener('submit',e =>{
    e.preventDefault();
    let id = newID.ID.value.trim();
    chatRoom.changeID(id);
    newID.reset();
    update.textContent = `YOUR ID IS UPDATED TO  ${id}`;
    setTimeout(()=>{
        update.textContent='';
    },3000)
})

let id = localStorage.ID ? localStorage.ID : 'USER';  
const chatUI = new UI(chat);
const chatRoom = new ChatRoom('general',id);
chatRoom.getMessages(m=>{ chatUI.view(m);})