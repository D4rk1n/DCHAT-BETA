class UI {
    constructor(chat){
        this.chat = chat;
    }
    view(message)
    {
        
        let date =dateFns.distanceInWordsToNow(message.time.toDate() , {addSuffix : true});
        const li = `
        <li class = "list-group-item bg-light message-item "> 
        <div class = "text-warning mID">${message.id}</div> 
        <div class = "mtxt">${message.messagetxt}</div>
        <div class = "mdate"> ${date}</div>
        </li>
        `;
        this.chat.innerHTML+=li;
        chat.scrollTop = chat.scrollHeight;
    }
    clear(nRoom , oRoom)
    {
        document.getElementById(nRoom).classList.add("disabled");
        document.getElementById(oRoom).classList.remove("disabled");
        this.chat.innerHTML='';
    }
}