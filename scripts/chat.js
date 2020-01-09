class ChatRoom {
    constructor(room,id){
        this.room = room;
        this.id = id;
        this.messages = DB.collection('messages');
        this.listner;
    }
    async AddMessage(messagetxt) {
        var message = {
            messagetxt,
            id : this.id,
            room : this.room,
            time : firebase.firestore.Timestamp.fromDate(new Date())
        }
        return await this.messages.add(message);
    }
    getMessages(cb)
    {
        this.listner = this.messages.where('room','==',this.room)
        .orderBy('time')
        .onSnapshot(ss => {
           ss.docChanges().forEach(c => {
               if(c.type === 'added')
               {
                   cb(c.doc.data());
               }
           }) 
        })
    }
    changeID(id)
    {
        this.id = id;
    }
    changeRoom(room)
    {
        this.room = room;
        if(this.listner)
        {
            this.listner();
        }
    }
}

new ChatRoom("gameing" , "xXlOlXx").getMessages(data => {
    console.log(data);
})
