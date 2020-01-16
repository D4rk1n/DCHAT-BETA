const newMessage = document.querySelector(".new-message");
const newID = document.querySelector(".new-id");
const update = document.querySelector(".updates");
newMessage.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    chatRoom.AddMessage(newMessage.message.value.trim()).then(()=>{
        newMessage.reset();
    }).catch(e=>{
        console.log(e);
    });
   
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


const chat = document.querySelector('.chat-messages');
const chatUI = new UI(chat);
const chatRoom = new ChatRoom('gaming','user');
chatRoom.getMessages(m=>{ chatUI.view(m);})