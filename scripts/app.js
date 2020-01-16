const newMessage = document.querySelector(".new-message");
newMessage.addEventListener('submit',(e)=>{
    e.preventDefault();
    chatRoom.AddMessage(newMessage.message.value.trim()).then(()=>{
        newMessage.reset();
    }).catch(e=>{
        console.log(e);
    });
   
})



const chat = document.querySelector('.chat-messages');
const chatUI = new UI(chat);
const chatRoom = new ChatRoom('gaming','user');
chatRoom.getMessages(m=>{ chatUI.view(m);})