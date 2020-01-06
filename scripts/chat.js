class ChatRoom {
    constructor(room,id){
        this.room = room;
        this.id = id;
        this.messages = DB.collection('messages');
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
}

console.log(cr);