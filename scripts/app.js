const newMessage = document.querySelector(".new-message");
const newID = document.querySelector(".new-id");
newMessage.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    chatRoom.AddMessage(newMessage.message.value.trim()).then(()=>{
        newMessage.reset();
        chat.scrollTop = chat.scrollHeight;
    }).catch(e=>{
        console.log(e);
    });
   
})

newID.addEventListener('submit',e =>{
    e.preventDefault();
    chatRoom.changeID(newID.ID.value.trim());
    newID.reset();
})


const chat = document.querySelector('.chat-messages');
const chatUI = new UI(chat);
const chatRoom = new ChatRoom('gaming','user');
chatRoom.getMessages(m=>{ chatUI.view(m);})