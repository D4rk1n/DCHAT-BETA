const chat = document.querySelector('.chat-messages');
const chatUI = new UI(chat);
const chatRoom = new ChatRoom('gaming','user');
chatRoom.getMessages(m=>{ chatUI.view(m);})