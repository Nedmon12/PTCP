import mongoose from "mongoose";
const MessageSchema = mongoose.Schema({
    receiverusername: String,
    conversation: 
            [{
                message: String,
                timestamp: String,
                user:{
                    displayname: String,
                    email: String,
                    Photo: String,
                    uid: String
                     }
             }]
})
export default mongoose.models('messages', MessageSchema)