class UI {
    constructor(chat){
        this.chat = chat;
    }
    view(message)
    {
        const li = `
        <li class = "list-group-item bg-light "> 
        <div class = "text-warning mID">${message.id} : </div>
        <div class = "mtxt">${message.messagetxt}</div>
        </li>
        `;
        this.chat.innerHTML+=li;
        chat.scrollTop = chat.scrollHeight;
    }
}